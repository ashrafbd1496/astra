import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'below header padding setting in customizer', () => {
	it( 'padding for below header section should apply correctly', async () => {
		const belowHeaderPadding = {
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
			'section-below-header-builder-padding': {
				desktop: {
					top: '30',
					right: '50',
					bottom: '30',
					left: '50',
				},
				tablet: {
					top: '30',
					right: '20',
					bottom: '40',
					left: '20',
				},
				mobile: {
					top: '25',
					right: '25',
					bottom: '25',
					left: '25',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( belowHeaderPadding );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-below-header-bar.ast-below-header' );
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].desktop.top }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].desktop.right }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].desktop.bottom }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-below-header-bar.ast-below-header',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].desktop.left }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].tablet.top }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].tablet.right }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].tablet.bottom }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].tablet.left }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].mobile.top }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].mobile.right }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].mobile.bottom }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-below-header-bar.ast-below-header, .ast-header-break-point .ast-below-header-bar.ast-below-header',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ belowHeaderPadding[ 'section-below-header-builder-padding' ].mobile.left }${ belowHeaderPadding[ 'section-below-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
	} );
} );
