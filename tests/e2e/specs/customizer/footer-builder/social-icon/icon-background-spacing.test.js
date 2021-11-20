import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Social Icons in the customizer', () => {
	it( 'footer social icon background spacing should apply correctly', async () => {
		const socialiconbackSpacing = {
			'footer-social-1-bg-space': '48px',
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconbackSpacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .footer-social-inner-wrap .ast-builder-social-element',
			property: 'padding',
		} ).cssValueToBe( `${ socialiconbackSpacing[ 'footer-social-1-bg-space' ] }`,
		);
	} );
} );
