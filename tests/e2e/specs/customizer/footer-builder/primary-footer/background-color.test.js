import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';

describe( 'primary footer background color settings in the customizer', () => {
	it( 'background color should apply correctly', async () => {
		const backgroundcolor = {
			'hb-footer-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(210, 248, 249)',
				},
				tablet: {
					'background-color': 'rgb(210, 248, 249)',
				},
				mobile: {
					'background-color': 'rgb(210, 248, 249)',
				},
			},
		};
		await setCustomize( backgroundcolor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'background-color',
		} ).cssValueToBe( `${ backgroundcolor[ 'hb-footer-bg-obj-responsive' ].desktop[ 'background-color' ] }` );

		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'background-color',
		} ).cssValueToBe( `${ backgroundcolor[ 'hb-footer-bg-obj-responsive' ].tablet[ 'background-color' ] }` );

		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'background-color',
		} ).cssValueToBe( `${ backgroundcolor[ 'hb-footer-bg-obj-responsive' ].mobile[ 'background-color' ] }` );
	} );
} );