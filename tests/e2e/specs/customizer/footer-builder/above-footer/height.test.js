import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';

describe( 'Above footer height setting in customizer', () => {
	it( 'height should apply correctly', async () => {
		const AbovefooterHeight = {
			'hba-footer-height': '200',
			'footer-desktop-items': {
				above: {
					above_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( AbovefooterHeight );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'min-height',
		} ).cssValueToBe( `${ AbovefooterHeight[ 'hba-footer-height' ] + 'px' }`,
		);
	} );
} );
