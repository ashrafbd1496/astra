import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../../utils/set-browser-viewport';

describe( 'toggle button fill layout settings in the customizer', () => {
	it( 'toggle button fill layout settings should apply correctly', async () => {
		const toggleFill = {
			'header-mobile-items': {
				primary: {
					primary_right: {
						1: 'mobile-trigger',
					},
				},
			},
			'mobile-header-toggle-btn-style': 'fill',
			'mobile-header-menu-label': 'Menu',
			'mobile-header-toggle-icon-size': 40,
			'mobile-header-toggle-btn-color': 'rgb(255, 255, 255)',
			'mobile-header-toggle-btn-bg-color': 'rgb(0, 0, 13)',
			'mobile-header-toggle-border-radius': 2,
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

		await setCustomize( toggleFill );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await setBrowserViewport( 'medium' );

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',
			property: 'width' && 'height',
		} ).cssValueToBe(
			`${ toggleFill[ 'mobile-header-toggle-icon-size' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',
			property: 'fill',
		} ).cssValueToBe(
			`${ toggleFill[ 'mobile-header-toggle-btn-color' ] }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-fill',
			property: 'background-color',
		} ).cssValueToBe(
			`${ toggleFill[ 'mobile-header-toggle-btn-bg-color' ] }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-fill',
			property: 'border-radius',
		} ).cssValueToBe(
			`${ toggleFill[ 'mobile-header-toggle-border-radius' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu',
			property: 'font-size',
		} ).cssValueToBe(
			`${ toggleFill[ 'mobile-header-label-font-size' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].tablet.top }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].tablet.right }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].tablet.bottom }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].tablet.left }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].mobile.top }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].mobile.right }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].mobile.bottom }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ toggleFill[ 'section-header-mobile-trigger-margin' ].mobile.left }${ toggleFill[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
