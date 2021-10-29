import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Primary footer vertical alignment setting in customizer', () => {
	it( 'verical alignment top should apply correctly', async () => {
		const verticalAlignment = {
			'hb-footer-vertical-alignment': 'flex-start',
			'footer-desktop-items': {
				primary: {
					primary_1: {
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

		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section',
			property: 'align-items',
		} ).cssValueToBe( `${ verticalAlignment[ 'hb-footer-vertical-alignment' ] }`,

		);
	} );
	it( 'verical alignment center should apply correctly', async () => {
		const verticalAlignment = {
			'hbb-footer-vertical-alignment': 'center',
			'footer-desktop-items': {
				primary: {
					primary_1: {
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

		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section',
			property: 'align-items',
		} ).cssValueToBe( `${ verticalAlignment[ 'hb-footer-vertical-alignment' ] }`,

		);
	} );
	it( 'verical alignment bottom should apply correctly', async () => {
		const verticalAlignment = {
			'hbb-footer-vertical-alignment': 'flex-end',
			'footer-desktop-items': {
				primary: {
					primary_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( verticalAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'small' );

		await scrollToElement( '#colophon' );

		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section',
			property: 'align-items',
		} ).cssValueToBe( `${ verticalAlignment[ 'hb-footer-vertical-alignment' ] }`,

		);
	} );
} );
