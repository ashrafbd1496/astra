import {
	createURL,
	createNewPost,
	setPostContent,
} from '@wordpress/e2e-test-utils';
import { publishPost } from '../../../../utils/publish-post';
import { setCustomize } from '../../../../utils/customize';
import { TPOGRAPHY_TEST_POST_CONTENT } from '../../../../utils/post';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'h3 global typography settings in the customizer', () => {
	it( 'heading 3 typography style should be applied correctly', async () => {
		const h3Typography = {
			'font-family-h3': "'Faster One', display",
			'font-weight-h3': '400',
			'text-transform-h3': 'uppercase',
			'font-size-h3': {
				desktop: '25',
				tablet: '20',
				mobile: '10',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'line-height-h3': '30px',
		};

		await setCustomize( h3Typography );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'post',
				title: 'heading-3-typography-test',
			} );
			await setPostContent( TPOGRAPHY_TEST_POST_CONTENT );
			await page.waitForTimeout( 10000 );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( 'heading-3-typography-test' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( 'h3, .entry-content h3' );
		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'font-family',
		} ).cssValueToBe( `${ h3Typography[ 'font-family-h3' ] }` );

		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'font-weight',
		} ).cssValueToBe( `${ h3Typography[ 'font-weight-h3' ] }` );

		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'text-transform',
		} ).cssValueToBe( `${ h3Typography[ 'text-transform-h3' ] }` );

		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'font-size',
		} ).cssValueToBe(
			`${ h3Typography[ 'font-size-h3' ].desktop }${ h3Typography[ 'font-size-h3' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );

		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'font-size',
		} ).cssValueToBe(
			`${ h3Typography[ 'font-size-h3' ].tablet }${ h3Typography[ 'font-size-h3' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );

		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'font-size',
		} ).cssValueToBe(
			`${ h3Typography[ 'font-size-h3' ].mobile }${ h3Typography[ 'font-size-h3' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: 'h3, .entry-content h3',
			property: 'line-height',
		} ).cssValueToBe( `${ h3Typography[ 'line-height-h3' ] }` );
	} );
} );
