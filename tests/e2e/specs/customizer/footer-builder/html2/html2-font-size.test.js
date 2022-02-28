import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { responsiveFontSize } from '../../../../utils/responsive-utils';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'html2 block settings in the customizer', () => {
	it( 'html2 font size for desktop should apply correctly', async () => {
		const htmlfontSize = {
			'footer-html-2': '<a href="https://wpastra.com/">HTML link color</a>',
			'font-size-section-fb-html-2': {
				desktop: '50',
				'desktop-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'html-2',

					},
				},
			},
		};
		await setCustomize( htmlfontSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.footer-widget-area[data-section="section-fb-html-2"] .ast-builder-html-element' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-2"] .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ htmlfontSize[ 'font-size-section-fb-html-2' ].desktop }${ htmlfontSize[ 'font-size-section-fb-html-2' ][ 'desktop-unit' ] }`,
		);
	} );
	it( 'html2 font size for tablet should apply correctly', async () => {
		const htmlfontSize = {
			'footer-html-2': '<a href="https://wpastra.com/">HTML link color</a>',
			'font-size-section-fb-html-2': {
				tablet: '30',
				'tablet-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'html-2',

					},
				},
			},
		};
		await setCustomize( htmlfontSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.footer-widget-area[data-section="section-fb-html-2"] .ast-builder-html-element' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-2"] .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				htmlfontSize[ 'font-size-section-fb-html-2' ].tablet,
			) }${
				htmlfontSize[ 'font-size-section-fb-html-2' ][ 'tablet-unit' ]
			}`,
		);
	} );

	it( 'html2 font size for mobile should apply correctly', async () => {
		const htmlfontSize = {
			'footer-html-2': '<a href="https://wpastra.com/">HTML link color</a>',
			'font-size-section-fb-html-2': {
				mobile: '30',
				'mobile-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'html-2',

					},
				},
			},
		};
		await setCustomize( htmlfontSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.footer-widget-area[data-section="section-fb-html-2"] .ast-builder-html-element' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-2"] .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe( `${ await responsiveFontSize(
			htmlfontSize[ 'font-size-section-fb-html-2' ].mobile,
		) }${
			htmlfontSize[ 'font-size-section-fb-html-2' ][ 'mobile-unit' ]
		}`,
		);
	} );
} );
