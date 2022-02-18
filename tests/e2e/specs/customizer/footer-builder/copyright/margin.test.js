import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'copyright Margin setting in customizer', () => {
	it( 'copyright margin for desktop should apply correctly', async () => {
		const copyrightmargin = {
			'section-footer-copyright-margin': {
				desktop: {
					top: '30',
					right: '27',
					bottom: '24',
					left: '21',
				},
				'desktop-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'copyright',
						1: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( copyrightmargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-copyright' );

		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].desktop.top }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].desktop.right }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].desktop.bottom }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].desktop.left }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'desktop-unit' ] }`,
		);
	} );

	it( 'copyright margin for tablet should apply correctly', async () => {
		const copyrightmargin = {
			'section-footer-copyright-margin': {
				tablet: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				'tablet-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'copyright',
						1: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( copyrightmargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-copyright' );

		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].tablet.top }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].tablet.right }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].tablet.bottom }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].tablet.left }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'tablet-unit' ] }`,
		);
	} );
	it( 'copyright margin for mobile should apply correctly', async () => {
		const copyrightmargin = {
			'section-footer-copyright-margin': {
				mobile: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				'mobile-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'copyright',
						1: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( copyrightmargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-copyright' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].mobile.top }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].mobile.right }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].mobile.bottom }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ copyrightmargin[ 'section-footer-copyright-margin' ].mobile.left }${ copyrightmargin[ 'section-footer-copyright-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
