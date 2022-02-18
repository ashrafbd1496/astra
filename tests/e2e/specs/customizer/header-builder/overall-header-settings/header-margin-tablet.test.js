import { createURL } from '@wordpress/e2e-test-utils';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { setCustomize } from '../../../../utils/customize';
describe( 'header margin settings in the customizer', () => {
	it( 'header margin settings should be applied correctly in tablet view', async () => {
		const headerWidthAndMargin = {
			'section-header-builder-layout-margin': {
				tablet: {
					top: '120',
					right: '120',
					bottom: '120',
					left: '120',
				},
				'tablet-unit': 'px',
			},
		};
		await setCustomize( headerWidthAndMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].tablet.top }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].tablet.right }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].tablet.left }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].tablet.bottom }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'tablet-unit' ] }`,
		);
	} );
} );
