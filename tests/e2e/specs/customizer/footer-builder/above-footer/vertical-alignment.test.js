import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Above footer vertical alignment setting in customizer', () => {
	it( 'verical alignment top should apply correctly', async () => {
		const verticalAlignment = {
			'hba-footer-vertical-alignment': 'flex-start',
			'footer-desktop-items': {
				above: {
					above_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( verticalAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'large' );

		await scrollToElement( '#colophon' );

		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"] .ast-builder-grid-row' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"] .ast-builder-grid-row',
			property: 'align-items',
		} ).cssValueToBe( `${ verticalAlignment[ 'hba-footer-vertical-alignment' ] }`,

		);
	} );
	it( 'verical alignment center should apply correctly', async () => {
		const verticalAlignment = {
			'hbb-footer-vertical-alignment': 'center',
			'footer-desktop-items': {
				above: {
					above_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( verticalAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'medium' );

		await scrollToElement( '#colophon' );

		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"] .ast-builder-grid-row' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"] .ast-builder-grid-row',
			property: 'align-items',
		} ).cssValueToBe( `${ verticalAlignment[ 'hba-footer-vertical-alignment' ] }`,

		);
	} );
	it( 'verical alignment bottom should apply correctly', async () => {
		const verticalAlignment = {
			'hbb-footer-vertical-alignment': 'flex-end',
			'footer-desktop-items': {
				above: {
					above_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( verticalAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'medium' );

		await scrollToElement( '#colophon' );

		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"] .ast-builder-grid-row' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"] .ast-builder-grid-row',
			property: 'align-items',
		} ).cssValueToBe( `${ verticalAlignment[ 'hba-footer-vertical-alignment' ] }`,

		);
	} );
} );
