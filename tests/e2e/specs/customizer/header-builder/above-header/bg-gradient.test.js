import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'Above header background gradient setting in customizer', () => {
	it( 'background gradient should apply correctly', async () => {
		const aboveHeaderBgGradient = {
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
					'background-color': 'linear-gradient(135deg, rgb(6, 147, 227) 31%, rgb(155, 81, 224) 64%)',
					'background-repeat': 'no-repeat',
					'background-position': 'left top',
					'background-size': 'contain',
					'background-attachment': 'fixed',
					'background-type': 'gradient',
				},
				tablet: {
					'background-color': 'linear-gradient(135deg, rgb(155, 200, 225) 31%, rgb(101, 6, 189) 64%)',
					'background-repeat': 'no-repeat',
					'background-position': 'left top',
					'background-size': 'contain',
					'background-attachment': 'fixed',
					'background-type': 'gradient',
				},
				mobile: {
					'background-color': 'linear-gradient(135deg, rgb(14, 224, 175) 31%, rgb(155, 81, 224) 64%)',
					'background-repeat': 'no-repeat',
					'background-position': 'left top',
					'background-size': 'contain',
					'background-attachment': 'fixed',
					'background-type': 'gradient',
				},
			},
		};
		await setCustomize( aboveHeaderBgGradient );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'background-image',
		} ).cssValueToBe(
			`${ aboveHeaderBgGradient[ 'hba-header-bg-obj-responsive' ].desktop[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'background-image',
		} ).cssValueToBe(
			`${ aboveHeaderBgGradient[ 'hba-header-bg-obj-responsive' ].tablet[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'small' );
		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'background-image',
		} ).cssValueToBe(
			`${ aboveHeaderBgGradient[ 'hba-header-bg-obj-responsive' ].mobile[ 'background-color' ] }`,
		);
	} );
} );
