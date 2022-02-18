import { createURL } from '@wordpress/e2e-test-utils';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { setCustomize } from '../../../../utils/customize';
describe( 'header margin settings in the customizer', () => {
	it( 'header margin settings should be applied correctly in mobile view', async () => {
		const headerWidthAndMargin = {
			'section-header-builder-layout-margin': {
				mobile: {
					top: '100',
					right: '100',
					bottom: '100',
					left: '100',
				},
				'mobile-unit': 'px',
			},
		};
		await setCustomize( headerWidthAndMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].mobile.top }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].mobile.right }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].mobile.left }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].mobile.bottom }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
