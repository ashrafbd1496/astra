import {
	createURL,
	createNewPost,
	setPostContent,
} from '@wordpress/e2e-test-utils';
import { publishPost } from '../../../../utils/publish-post';
import { setCustomize } from '../../../../utils/customize';
import { TPOGRAPHY_TEST_POST_CONTENT } from '../../../../utils/post';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { responsiveFontSize } from '../../../../utils/responsive-utils';

describe( 'global typography heading 6 settings in the customizer', () => {
	it( 'heading 6 font family settings should be applied correctly', async () => {
		const heading6Font = {
			'font-family-h6': "'Patrick Hand SC', handwriting",
			'font-weight-h6': '400',
			'text-transform-h6': 'uppercase',
			'font-size-h6': {
				desktop: '30',
				tablet: '20',
				mobile: '10',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'line-height-h6': '3px',
		};

		await setCustomize( heading6Font );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'post',
				title: 'heading-6-typography-test',
			} );
			await setPostContent( TPOGRAPHY_TEST_POST_CONTENT );
			await page.waitForTimeout( 10000 );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( 'heading-6-typography-test' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( 'h6, .entry-content h6' );
		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'font-family',
		} ).cssValueToBe( `${ heading6Font[ 'font-family-h6' ] }` );

		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'font-weight',
		} ).cssValueToBe( `${ heading6Font[ 'font-weight-h6' ] }` );

		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'text-transform',
		} ).cssValueToBe( `${ heading6Font[ 'text-transform-h6' ] }` );

		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'font-size',
		} ).cssValueToBe(
			`${ heading6Font[ 'font-size-h6' ].desktop }${ heading6Font[ 'font-size-h6' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );

		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				heading6Font[ 'font-size-h6' ].tablet,
			) }${ heading6Font[ 'font-size-h6' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );

		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				heading6Font[ 'font-size-h6' ].mobile,
			) }${ heading6Font[ 'font-size-h6' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: 'h6, .entry-content h6',
			property: 'line-height',
		} ).cssValueToBe( `${ heading6Font[ 'line-height-h6' ] }` );
	} );
} );
