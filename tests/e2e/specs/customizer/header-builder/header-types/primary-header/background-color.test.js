import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'primary header background color setting in customizer', () => {
	it( 'background color should apply correctly', async () => {
		const backgroundColor = {
			'hb-header-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(198, 236, 1)',
				},
				tablet: {
					'background-color': 'rgb(198, 126, 1)',
				},
				mobile: {
					'background-color': 'rgb(122, 236, 1)',
				},
			},
		};
		await setCustomize( backgroundColor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector(
			'#ast-desktop-header .ast-primary-header-bar',
		);
		await expect( {
			selector: '#ast-desktop-header .ast-primary-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ backgroundColor[ 'hb-header-bg-obj-responsive' ].desktop[ 'background-color' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '#ast-desktop-header .ast-primary-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ backgroundColor[ 'hb-header-bg-obj-responsive' ].tablet[ 'background-color' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '#ast-desktop-header .ast-primary-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ backgroundColor[ 'hb-header-bg-obj-responsive' ].mobile[ 'background-color' ] }`,
		);
	} );
} );
