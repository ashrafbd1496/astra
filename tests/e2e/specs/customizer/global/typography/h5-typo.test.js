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

describe( 'global typography heading 5 settings in the customizer', () => {
	it( 'heading 5 font family settings should be applied correctly', async () => {
		const heading5Font = {
			'font-family-h5': 'Offside, display',
			'font-weight-h5': '400',
			'text-transform-h5': 'uppercase',
			'font-size-h5': {
				desktop: '30',
				tablet: '20',
				mobile: '10',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'line-height-h5': '3px',
		};

		await setCustomize( heading5Font );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'post',
				title: 'heading-5-typography-test',
			} );
			await setPostContent( TPOGRAPHY_TEST_POST_CONTENT );
			await page.waitForTimeout( 10000 );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( 'heading-5-typography-test' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( 'h5, .entry-content h5' );
		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'font-family',
		} ).cssValueToBe( `${ heading5Font[ 'font-family-h5' ] }` );

		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'font-weight',
		} ).cssValueToBe( `${ heading5Font[ 'font-weight-h5' ] }` );

		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'text-transform',
		} ).cssValueToBe( `${ heading5Font[ 'text-transform-h5' ] }` );

		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'font-size',
		} ).cssValueToBe(
			`${ heading5Font[ 'font-size-h5' ].desktop }${ heading5Font[ 'font-size-h5' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );

		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				heading5Font[ 'font-size-h5' ].tablet,
			) }${ heading5Font[ 'font-size-h5' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );

		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				heading5Font[ 'font-size-h5' ].mobile,
			) }${ heading5Font[ 'font-size-h5' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: 'h5, .entry-content h5',
			property: 'line-height',
		} ).cssValueToBe( `${ heading5Font[ 'line-height-h5' ] }` );
	} );
} );
