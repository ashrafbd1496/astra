import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
describe( 'bottom border setting for Below header Section in the customizer', () => {
	it( 'bottom border size and color should apply correctly', async () => {
		const belowHeaderBorder = {
			'header-desktop-items': {
				below: {
					below_center: {
						0: 'button-1',
					},
				},
			},
			'hbb-header-separator': '10',
			'hbb-header-bottom-border-color': 'rgb(23, 5, 230)',
		};
		await setCustomize( belowHeaderBorder );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-below-header-bar' );
		await expect( {
			selector: '.ast-below-header-bar',
			property: 'border-bottom-width',
		} ).cssValueToBe(
			`${ belowHeaderBorder[ 'hbb-header-separator' ] + 'px' }`,
		);

		await expect( {
			selector: '.ast-below-header-bar',
			property: 'border-bottom-color',
		} ).cssValueToBe(
			`${ belowHeaderBorder[ 'hbb-header-bottom-border-color' ] }`,
		);
	} );
} );
