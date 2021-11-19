import { createURL, setBrowserViewport } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Social Icons in the customizer', () => {
	it( 'footer social icon size for desktop should apply correctly', async () => {
		const socialiconSize = {
			'footer-social-1-size': {
				desktop: '50px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element svg' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element svg',
			property: 'width',
		} ).cssValueToBe( `${ socialiconSize[ 'footer-social-1-size' ].desktop }` );

		await expect( {
			selector: '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element svg',
			property: 'height',
		} ).cssValueToBe( `${ socialiconSize[ 'footer-social-1-size' ].desktop }` );
	} );

	it( 'footer social icon size for mobile should apply correctly', async () => {
		const socialiconSize = {
			'footer-social-1-size': {
				mobile: '17px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element svg' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element svg',
			property: 'width',
		} ).cssValueToBe( `${ socialiconSize[ 'footer-social-1-size' ].mobile }` );

		await expect( {
			selector: '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element svg',
			property: 'height',
		} ).cssValueToBe( `${ socialiconSize[ 'footer-social-1-size' ].mobile }` );
	} );
} );
