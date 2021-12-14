import { setCustomize } from '../../../utils/customize';
describe( 'Enable google fonts locally', () => {
	it( 'local link for google fonts should be loaded successfully', async () => {
		const loadGoogleFontsLocally = {
			'body-font-family': 'Righteous',
			'load-google-fonts-locally': '1',
		};
		await setCustomize( loadGoogleFontsLocally );
		const viewPageSource = await browser.newPage();
		await viewPageSource.goto( 'view-source:http://localhost:8888/' );

		// The text of span element..
		const fontHref = await page.$eval( '#astra-google-fonts-css > a', ( ele ) => ele.getAttribute( 'href' ) );
		expect( fontHref ).includes( 'http://localhost:8888/wp-content/astra-local-fonts/astra-local-fonts.css' );
		await page.waitFor( 5000 );
		await page.close();
	} );
} );
