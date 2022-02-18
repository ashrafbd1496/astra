import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'above header background color setting in customizer', () => {
	it( 'background color should apply correctly', async () => {
		const aboveHeaderBgColor = {
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'widget-1',
					},
				},
			},
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'social-icons-1',
					},
				},
			},
			'hba-header-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(255, 255, 255)',
				},
				tablet: {
					'background-color': 'rgb(239, 215, 233)',
				},
				mobile: {
					'background-color': 'rgb(215, 215, 215)',
				},
			},
		};
		await setCustomize( aboveHeaderBgColor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ aboveHeaderBgColor[ 'hba-header-bg-obj-responsive' ].desktop[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-above-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ aboveHeaderBgColor[ 'hba-header-bg-obj-responsive' ].tablet[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-above-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ aboveHeaderBgColor[ 'hba-header-bg-obj-responsive' ].mobile[ 'background-color' ] }`,
		);
	} );
} );
