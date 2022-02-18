import {
	createURL,
	createNewPost,
	setPostContent,
} from '@wordpress/e2e-test-utils';
import { publishPost } from '../../../../utils/publish-post';
import { setCustomize } from '../../../../utils/customize';
import { TPOGRAPHY_TEST_POST_CONTENT } from '../../../../utils/post';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'h2 global typography settings in the customizer', () => {
	it( 'heading 2 typography style should be applied correctly', async () => {
		const h2Typography = {
			'font-family-h2': "'Akaya Kanadaka,display'",
			'font-weight-h2': '400',
			'text-transform-h2': 'uppercase',
			'font-size-h2': {
				desktop: '30',
				tablet: '18',
				mobile: '10',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'line-height-h2': '3px',
		};

		await setCustomize( h2Typography );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'post',
				title: 'heading-2-typography-test',
			} );
			await setPostContent( TPOGRAPHY_TEST_POST_CONTENT );
			await page.waitForTimeout( 10000 );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( 'heading-2-typography-test' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.entry-content h2' );
		await expect( {
			selector: '.entry-content h2',
			property: 'font-family',
		} ).cssValueToBe( `${ h2Typography[ 'font-family-h2' ] }` );

		await expect( {
			selector: '.entry-content h2',
			property: 'font-weight',
		} ).cssValueToBe( `${ h2Typography[ 'font-weight-h2' ] }` );

		await expect( {
			selector: '.entry-content h2',
			property: 'text-transform',
		} ).cssValueToBe( `${ h2Typography[ 'text-transform-h2' ] }` );

		await expect( {
			selector: '.entry-content h2',
			property: 'font-size',
		} ).cssValueToBe(
			`${ h2Typography[ 'font-size-h2' ].desktop }${ h2Typography[ 'font-size-h2' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );

		await expect( {
			selector: '.entry-content h2',
			property: 'font-size',
		} ).cssValueToBe(
			`${ h2Typography[ 'font-size-h2' ].tablet }${ h2Typography[ 'font-size-h2' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );

		await expect( {
			selector: '.entry-content h2',
			property: 'font-size',
		} ).cssValueToBe(
			`${ h2Typography[ 'font-size-h2' ].mobile }${ h2Typography[ 'font-size-h2' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: '.entry-content h2',
			property: 'line-height',
		} ).cssValueToBe( `${ h2Typography[ 'line-height-h2' ] }` );
	} );
} );
