import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { scrollToElement } from '../../../../utils/scroll-to-element';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'Social Icons in the customizer', () => {
	it( 'footer social icon radius should apply correctly', async () => {
		const socialiconRadius = {
			'footer-social-1-radius': '10px',
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconRadius );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element' );
		await setBrowserViewport( 'large' );

		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element',
			property: 'border-radius',
		} ).cssValueToBe( `${ socialiconRadius[ 'footer-social-1-radius' ] }`,
		);
	} );
} );
