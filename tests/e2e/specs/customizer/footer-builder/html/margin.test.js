import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'footer html-1 block settings in the customizer', () => {
	it( 'footer html-1 margin for desktop should apply correctly', async () => {
		const htmlMargin = {
			'footer-html-1':
				'Here is HTML-1 element. <a href="https://wpastra.com/"> with anchor link. </a>',
			'section-fb-html-1-margin': {
				desktop: {
					top: 50,
					right: 40,
					bottom: 30,
					left: 20,
				},
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
		await setCustomize( htmlMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.footer-widget-area[data-section="section-fb-html-1"]',
		);
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].desktop.top }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].desktop.right }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].desktop.bottom }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].desktop.left }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'desktop-unit' ] }`,
		);
	} );

	it( 'footer html-1 margin for tablet should apply correctly', async () => {
		const htmlMargin = {
			'footer-html-1':
				'Here is HTML-1 element. <a href="https://wpastra.com/"> with anchor link. </a>',
			'section-fb-html-1-margin': {
				tablet: {
					top: 40,
					right: 30,
					bottom: 20,
					left: 10,
				},
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
		await setCustomize( htmlMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.footer-widget-area[data-section="section-fb-html-1"]',
		);
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].tablet.top }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].tablet.right }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].tablet.bottom }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].tablet.left }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'tablet-unit' ] }`,
		);
	} );

	it( 'footer html-1 margin for mobile should apply correctly', async () => {
		const htmlMargin = {
			'footer-html-1':
				'Here is HTML-1 element. <a href="https://wpastra.com/"> with anchor link. </a>',
			'section-fb-html-1-margin': {
				mobile: {
					top: 30,
					right: 20,
					bottom: 10,
					left: 0,
				},
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
		await setCustomize( htmlMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.footer-widget-area[data-section="section-fb-html-1"]',
		);
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].mobile.top }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].mobile.right }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].mobile.bottom }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.footer-widget-area[data-section="section-fb-html-1"]',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ htmlMargin[ 'section-fb-html-1-margin' ].mobile.left }${ htmlMargin[ 'section-fb-html-1-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
