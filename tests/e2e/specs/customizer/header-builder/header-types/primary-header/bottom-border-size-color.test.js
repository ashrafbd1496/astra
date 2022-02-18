import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
describe( 'primary header bottom border size & color setting in customizer', () => {
	it( 'border size & color should apply correctly', async () => {
		const borderSizeColor = {
			'hb-header-main-sep': '10',
			'hb-header-main-sep-color': 'rgb(229, 91, 91)',
		};
		await setCustomize( borderSizeColor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector(
			'#ast-desktop-header .ast-primary-header-bar',
		);
		await expect( {
			selector: '#ast-desktop-header .ast-primary-header-bar',
			property: 'border-bottom-width',
		} ).cssValueToBe(
			`${ borderSizeColor[ 'hb-header-main-sep' ] + 'px' }`,
		);

		await expect( {
			selector: '#ast-desktop-header .ast-primary-header-bar',
			property: 'border-bottom-color',
		} ).cssValueToBe(
			`${ borderSizeColor[ 'hb-header-main-sep-color' ] }`,
		);
	} );
} );
