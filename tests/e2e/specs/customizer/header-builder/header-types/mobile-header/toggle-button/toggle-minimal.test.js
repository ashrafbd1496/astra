import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../../utils/set-browser-viewport';

describe( 'toggle button minimal layout settings in the customizer', () => {
	it( 'toggle button minimal layout settings should apply correctly', async () => {
		const toggleMinimal = {
			'header-mobile-items': {
				primary: {
					primary_right: {
						1: 'mobile-trigger',
					},
				},
			},
			'mobile-header-menu-label': 'Menu',
			'mobile-header-toggle-icon-size': 40,
			'mobile-header-toggle-btn-color': 'rgb(10, 10, 10)',
			'mobile-header-label-font-size': 20,
			'section-header-mobile-trigger-margin': {
				tablet: {
					top: 10,
					right: 10,
					bottom: 10,
					left: 10,
				},
				mobile: {
					top: 10,
					right: 10,
					bottom: 10,
					left: 10,
				},
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};

		await setCustomize( toggleMinimal );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await setBrowserViewport( 'medium' );

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',
			property: 'width' && 'height',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'mobile-header-toggle-icon-size' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',
			property: 'fill',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'mobile-header-toggle-btn-color' ] }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu',
			property: 'font-size',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'mobile-header-label-font-size' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].tablet.top }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].tablet.right }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].tablet.bottom }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].tablet.left }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].mobile.top }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].mobile.right }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].mobile.bottom }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ toggleMinimal[ 'section-header-mobile-trigger-margin' ].mobile.left }${ toggleMinimal[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
