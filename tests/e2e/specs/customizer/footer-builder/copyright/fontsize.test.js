import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { responsiveFontSize } from '../../../../utils/responsive-utils';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'copyright font size settings in the customizer', () => {
	it( 'copyright font size should apply correctly', async () => {
		const copyrightfontsize = {
			'font-size-section-footer-copyright': {
				desktop: '50',
				tablet: '40',
				mobile: '32',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};

		await setCustomize( copyrightfontsize );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.evaluate( () => {
			window.scrollBy( 0, window.innerHeight );
		} );
		await page.waitForSelector( '.ast-footer-copyright' );

		await setBrowserViewport( 'large' );

		await scrollToElement( '#colophon' );

		await expect( {
			selector: '.ast-footer-copyright',
			property: 'font-size',
		} ).cssValueToBe( `${ copyrightfontsize[ 'font-size-section-footer-copyright' ].desktop }${ copyrightfontsize[ 'font-size-section-footer-copyright' ][ 'desktop-unit' ] }` );

		await setBrowserViewport( 'medium' );

		await expect( {
			selector: '.ast-footer-copyright',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				copyrightfontsize[ 'font-size-section-footer-copyright' ].tablet,
			) }${
				copyrightfontsize[ 'font-size-section-footer-copyright' ][ 'tablet-unit' ]
			}`,
		);

		await setBrowserViewport( 'small' );

		await expect( {
			selector: '.ast-footer-copyright',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				copyrightfontsize[ 'font-size-section-footer-copyright' ].mobile,
			) }${
				copyrightfontsize[ 'font-size-section-footer-copyright' ][ 'mobile-unit' ]
			}`,
		);
	} );
} );
