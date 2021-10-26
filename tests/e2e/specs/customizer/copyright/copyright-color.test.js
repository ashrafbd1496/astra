import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
import { setBrowserViewport } from '../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../utils/scroll-to-element';

describe( 'copyright color settings in the customizer', () => {
	it( 'copyright text color should apply correctly', async () => {
		const copyrightcolor = {
			'footer-copyright-color': 'rgb(10, 10, 255)',
		};
		await setCustomize( copyrightcolor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-footer-copyright' );

		await setBrowserViewport( 'large' );

		await scrollToElement( '#colophon' );

		await expect( {
			selector: '.ast-footer-copyright',
			property: 'color',
		} ).cssValueToBe( `${ copyrightcolor[ 'footer-copyright-color' ] }` );
	} );
} );
