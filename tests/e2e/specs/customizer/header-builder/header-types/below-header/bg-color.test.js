import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'below header background color setting in customizer', () => {
	it( 'background color for below header section should apply correctly', async () => {
		const belowHeaderBgcolor = {
			'header-desktop-items': {
				below: {
					below_center: {
						0: 'button-1',
					},
				},
			},
			'header-mobile-items': {
				below: {
					below_center: {
						0: 'button-1',
					},
				},
			},
			'hbb-header-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(113, 229, 202)',
				},
				tablet: {
					'background-color': 'rgb(113, 115, 202)',
				},
				mobile: {
					'background-color': 'rgb(95, 229, 202)',
				},
			},
		};
		await setCustomize( belowHeaderBgcolor );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-below-header.ast-below-header-bar' );
		await expect( {
			selector: '.ast-below-header.ast-below-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ belowHeaderBgcolor[ 'hbb-header-bg-obj-responsive' ].desktop[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-below-header.ast-below-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ belowHeaderBgcolor[ 'hbb-header-bg-obj-responsive' ].tablet[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-below-header.ast-below-header-bar',
			property: 'background-color',
		} ).cssValueToBe(
			`${ belowHeaderBgcolor[ 'hbb-header-bg-obj-responsive' ].mobile[ 'background-color' ] }`,
		);
	} );
} );
