import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Primary footer border size setting in customizer', () => {
	it( 'border size should apply correctly', async () => {
		const borderSizeColor = {
			'hb-footer-main-sep': '50',
			'hb-footer-main-sep-color': 'rgb(255, 79, 88)',
			'footer-desktop-items': {
				primary: {
					primary_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( borderSizeColor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'border-top-width',
		} ).cssValueToBe( `${ borderSizeColor[ 'hb-footer-main-sep' ] + 'px' }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'border-top-color',
		} ).cssValueToBe( `${ borderSizeColor[ 'hb-footer-main-sep-color' ] }`,

		);
	} );
} );
