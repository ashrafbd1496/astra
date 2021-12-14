import {
	createURL,
	createNewPost,
	publishPost,
} from '@wordpress/e2e-test-utils';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { setCustomize } from '../../../../utils/customize';
describe( 'Header width settings in the customizer', () => {
	it( 'header content width should be applied correctly in desktop view', async () => {
		const headerWidth = {
			'hb-header-main-layout-width': 'content',
		};
		await setCustomize( headerWidth );
		await page.setViewport( { width: 1280, height: 800 } );
		await createNewPost( {
			postType: 'page',
			title: 'Home',
			content: 'This is a home page',
		} );
		await publishPost();
		await page.goto( createURL( '/home' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '#page' );
		//subtracted 20px padding left and padding right from the total width
		await expect( {
			selector: '.ast-container',
			property: 'width',
		} ).cssValueToBe( `1240px`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-container',
			property: 'width',
		} ).cssValueToBe( `auto`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-container',
			property: 'width',
		} ).cssValueToBe( `auto`,
		);
	} );
	it( 'header full width should be applied correctly in desktop view', async () => {
		const headerWidth = {
			'hb-header-main-layout-width': 'full',
		};
		await setCustomize( headerWidth );
		await page.setViewport( { width: 1280, height: 800 } );
		await page.goto( createURL( '/home' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '#page' );
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe( `100%`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe( `100%`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe( `100%`,
		);
	} );
} );
