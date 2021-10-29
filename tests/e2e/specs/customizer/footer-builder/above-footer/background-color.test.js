import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';

describe( 'above footer background color settings in the customizer', () => {
	it( 'background color should apply correctly', async () => {
		const backgroundcolor = {
			'hba-footer-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(242, 206, 206)',
				},
				tablet: {
					'background-color': 'rgb(242, 206, 206)',
				},
				mobile: {
					'background-color': 'rgb(242, 206, 206)',
				},
			},
			'footer-desktop-items': {
				above: {
					above_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( backgroundcolor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );

		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'background-color',
		} ).cssValueToBe( `${ backgroundcolor[ 'hba-footer-bg-obj-responsive' ].desktop[ 'background-color' ] }` );

		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"]' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'background-color',
		} ).cssValueToBe( `${ backgroundcolor[ 'hba-footer-bg-obj-responsive' ].tablet[ 'background-color' ] }` );

		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"]' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'background-color',
		} ).cssValueToBe( `${ backgroundcolor[ 'hba-footer-bg-obj-responsive' ].mobile[ 'background-color' ] }` );
	} );
} );