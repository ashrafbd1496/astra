import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'below header height setting in customizer', () => {
	it( 'height should apply correctly', async () => {
		const belowHeaderHeight = {
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
			'hbb-header-height': {
				desktop: 90,
				tablet: 70,
				mobile: 50,
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( belowHeaderHeight );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-below-header-bar .site-below-header-wrap',
		);
		await expect( {
			selector: '.ast-below-header-bar .site-below-header-wrap',
			property: 'min-height',
		} ).cssValueToBe(
			`${ belowHeaderHeight[ 'hbb-header-height' ].desktop }${ belowHeaderHeight[ 'hbb-header-height' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );

		await expect( {
			selector: '.ast-mobile-header-wrap .ast-below-header-bar',
			property: 'min-height',
		} ).cssValueToBe(
			`${ belowHeaderHeight[ 'hbb-header-height' ].tablet }${ belowHeaderHeight[ 'hbb-header-height' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );

		await expect( {
			selector: '.ast-mobile-header-wrap .ast-below-header-bar',
			property: 'min-height',
		} ).cssValueToBe(
			`${ belowHeaderHeight[ 'hbb-header-height' ].mobile }${ belowHeaderHeight[ 'hbb-header-height' ][ 'mobile-unit' ] }`,
		);
	} );
} );
