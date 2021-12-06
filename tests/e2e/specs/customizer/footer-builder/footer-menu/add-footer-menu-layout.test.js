import { createURL, createNewPost, publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Add footer menu stack layout', () => {
	it( 'footer menu stack layout should be added properly', async () => {
		await createNewPost( {
			postType: 'page',
			title: 'Test Page',
			content: 'This is simple test page',
		} );
		await publishPost();
		await createNewPost( {
			postType: 'page',
			title: 'Sub Test Page',
			content: 'This is simple sub test page',
		} );
		await publishPost();
		await page.goto( createURL( '/wp-admin/nav-menus.php' ), {
			waitUntil: 'networkidle0',
		} );
		await scrollToElement( '#nav-menu-footer' );
		if ( await page.$( '.menu-delete' ) ) {
			await page.click( '.menu-delete' );
		}
		await page.focus( '#menu-name' );
		await page.type( '#menu-name', 'Menu' );
		await page.focus( '#locations-footer_menu' );
		await page.click( '#locations-footer_menu' );
		await page.click( '#save_menu_footer' );
		await page.waitForSelector( '.accordion-section-content ' );
		await page.focus( '#page-tab' );
		await page.click( '#page-tab' );
		await page.click( '#submit-posttype-page' );
		await scrollToElement( '#nav-menu-footer' );
		await page.waitForSelector( '.publishing-action' );
		await page.focus( '#save_menu_footer' );
		await page.click( '#save_menu_footer' );
		const footerMenuLayout = {
			'footer-menu-layout': {
				desktop: 'vertical',
				tablet: 'vertical',
				mobile: 'vertical',
			},
			'footer-desktop-items': {
				above: {
					above_1: {
						0: 'menu',
					},
				},
			},
		};
		await setCustomize( footerMenuLayout );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-footer' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '#astra-footer-menu .menu-item',
			property: '-webkit-box-orient',
		} ).cssValueToBe( `${ footerMenuLayout[ 'footer-menu-layout' ].desktop }` );
		await page.waitForSelector( '.site-footer' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '#astra-footer-menu .menu-item',
			property: '-webkit-box-orient',
		} ).cssValueToBe( `${ footerMenuLayout[ 'footer-menu-layout' ].tablet }` );
		await page.waitForSelector( '.site-footer' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '#astra-footer-menu .menu-item',
			property: '-webkit-box-orient',
		} ).cssValueToBe( `${ footerMenuLayout[ 'footer-menu-layout' ].mobile }` );
	} );
} );
describe( 'Add footer menu inline layout', () => {
	it( 'footer menu inline layout should be added properly', async () => {
		const footerMenuLayoutInline = {
			'footer-menu-layout': {
				desktop: 'horizontal',
				tablet: 'horizontal',
				mobile: 'horizontal',
			},
		};
		await setCustomize( footerMenuLayoutInline );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-footer' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '#astra-footer-menu .menu-item',
			property: '-webkit-box-orient',
		} ).cssValueToBe( `${ footerMenuLayoutInline[ 'footer-menu-layout' ].desktop }` );
		await page.waitForSelector( '.site-footer' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '#astra-footer-menu .menu-item',
			property: '-webkit-box-orient',
		} ).cssValueToBe( `${ footerMenuLayoutInline[ 'footer-menu-layout' ].tablet }` );
		await page.waitForSelector( '.site-footer' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '#astra-footer-menu .menu-item',
			property: '-webkit-box-orient',
		} ).cssValueToBe( `${ footerMenuLayoutInline[ 'footer-menu-layout' ].mobile }` );
	} );
} );
