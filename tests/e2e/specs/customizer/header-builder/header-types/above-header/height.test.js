import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'above header height setting in customizer', () => {
	it( 'height should apply correctly', async () => {
		const aboveheaderHeight = {
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
						0: 'widget-1',
					},
				},
			},
			'hba-header-height': {
				desktop: 90,
				tablet: 70,
				mobile: 50,
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( aboveheaderHeight );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-above-header-bar .site-above-header-wrap',
		);
		await expect( {
			selector: '.ast-above-header-bar .site-above-header-wrap',
			property: 'min-height',
		} ).cssValueToBe(
			`${ aboveheaderHeight[ 'hba-header-height' ].desktop }${ aboveheaderHeight[ 'hba-header-height' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );

		await expect( {
			selector:
				'.ast-mobile-header-wrap .ast-above-header-bar, .ast-above-header-bar .site-above-header-wrap',
			property: 'min-height',
		} ).cssValueToBe(
			`${ aboveheaderHeight[ 'hba-header-height' ].tablet }${ aboveheaderHeight[ 'hba-header-height' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );

		await expect( {
			selector:
				'.ast-mobile-header-wrap .ast-above-header-bar, .ast-above-header-bar .site-above-header-wrap',
			property: 'min-height',
		} ).cssValueToBe(
			`${ aboveheaderHeight[ 'hba-header-height' ].mobile }${ aboveheaderHeight[ 'hba-header-height' ][ 'mobile-unit' ] }`,
		);
	} );
} );
