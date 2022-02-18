import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'below header margin setting in customizer', () => {
	it( 'margin should apply correctly', async () => {
		const belowHeaderMargin = {
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
			'section-below-header-builder-margin': {
				desktop: {
					top: '40',
					right: '45',
					bottom: '40',
					left: '45',
				},
				tablet: {
					top: '15',
					right: '10',
					bottom: '15',
					left: '10',
				},
				mobile: {
					top: '20',
					right: '30',
					bottom: '20',
					left: '30',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( belowHeaderMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-below-header-bar.ast-below-header' );
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].desktop.top }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].desktop.right }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].desktop.bottom }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].desktop.left }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].tablet.top }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].tablet.right }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].tablet.bottom }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].tablet.left }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].mobile.top }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].mobile.right }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].mobile.bottom }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ belowHeaderMargin[ 'section-below-header-builder-margin' ].mobile.left }${ belowHeaderMargin[ 'section-below-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
