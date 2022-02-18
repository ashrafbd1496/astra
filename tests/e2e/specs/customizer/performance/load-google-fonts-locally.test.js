import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
describe( 'google fonts enable and disable locally', () => {
	it( 'local link for google fonts should be loaded successfully', async () => {
		const loadGoogleFontsLocally = {
			'body-font-family': 'Righteous',
			'load-google-fonts-locally': '1',
		};
		await setCustomize( loadGoogleFontsLocally );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '#astra-google-fonts-css' );
		const link = await page.$eval( '#astra-google-fonts-css', ( element ) =>
			element.getAttribute( 'href' ),
		);
		const fontUrl = link.substring( 0, link.indexOf( '?' ) );
		await expect( fontUrl ).toBe(
			'http://localhost:8888/wp-content/astra-local-fonts/astra-local-fonts.css',
		);
	} );
	it( 'googleapi link for google fonts should be loaded successfully', async () => {
		const loadGoogleFontsLocally = {
			'body-font-family': 'Righteous',
			'load-google-fonts-locally': '0',
		};
		await setCustomize( loadGoogleFontsLocally );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '#astra-google-fonts-css' );
		const link = await page.$eval( '#astra-google-fonts-css', ( element ) =>
			element.getAttribute( 'href' ),
		);
		const fontUrl = link.substring( 0, link.indexOf( '?' ) );
		await expect( fontUrl ).toBe( 'https://fonts.googleapis.com/css' );
	} );
} );
