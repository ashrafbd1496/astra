import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { responsiveFontSize } from '../../../../utils/responsive-utils';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'html1 block settings in the customizer', () => {
	it( 'html1 font size for desktop should apply correctly', async () => {
		const htmlfontSize = {
			'footer-html-1':
				'<a href="https://wpastra.com/">HTML font size</a>',
			'font-size-section-fb-html-1': {
				desktop: '50',
				'desktop-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'html-1',
					},
				},
			},
		};
		await setCustomize( htmlfontSize );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.footer-widget-area[data-section="section-fb-html-1"] .ast-builder-html-element',
		);
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector:
				'.footer-widget-area[data-section="section-fb-html-1"] .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ htmlfontSize[ 'font-size-section-fb-html-1' ].desktop }${ htmlfontSize[ 'font-size-section-fb-html-1' ][ 'desktop-unit' ] }`,
		);
	} );
	it( 'html1 font size for tablet should apply correctly', async () => {
		const htmlfontSize = {
			'footer-html-1':
				'<a href="https://wpastra.com/">HTML font size</a>',
			'font-size-section-fb-html-1': {
				tablet: '30',
				'tablet-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'html-1',
					},
				},
			},
		};
		await setCustomize( htmlfontSize );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.footer-widget-area[data-section="section-fb-html-1"] .ast-builder-html-element',
		);
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector:
				'.footer-widget-area[data-section="section-fb-html-1"] .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				htmlfontSize[ 'font-size-section-fb-html-1' ].tablet,
			) }${
				htmlfontSize[ 'font-size-section-fb-html-1' ][ 'tablet-unit' ]
			}`,
		);
	} );
	it( 'html1 font size for mobile should apply correctly', async () => {
		const htmlfontSize = {
			'footer-html-1':
				'<a href="https://wpastra.com/">HTML font size</a>',
			'font-size-section-fb-html-1': {
				mobile: '25',
				'mobile-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'html-1',
					},
				},
			},
		};
		await setCustomize( htmlfontSize );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.footer-widget-area[data-section="section-fb-html-1"] .ast-builder-html-element',
		);
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector:
				'.footer-widget-area[data-section="section-fb-html-1"] .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				htmlfontSize[ 'font-size-section-fb-html-1' ].mobile,
			) }${
				htmlfontSize[ 'font-size-section-fb-html-1' ][ 'mobile-unit' ]
			}`,
		);
	} );
} );
