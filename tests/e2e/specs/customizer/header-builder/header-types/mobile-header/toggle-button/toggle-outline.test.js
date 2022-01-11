import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../../utils/set-browser-viewport';

describe( 'toggle button outline layout settings in the customizer', () => {
	it( 'toggle button outline layout settings should apply correctly', async () => {
		const toggleOutline = {
			'header-mobile-items': {
				primary: {
					primary_right: {
						1: 'mobile-trigger',
					},
				},
			},
			'mobile-header-toggle-btn-style': 'outline',
			'mobile-header-menu-label': 'Menu',
			'mobile-header-toggle-icon-size': 40,
			'mobile-header-toggle-btn-color': 'rgb(1, 7, 14)',
			'mobile-header-toggle-btn-border-size': {
				top: 2,
				right: 2,
				bottom: 2,
				left: 2,
			},
			'mobile-header-toggle-border-color': 'rgb(1, 7, 14)',
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

		await setCustomize( toggleOutline );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await setBrowserViewport( 'medium' );

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',
			property: 'width' && 'height',
		} ).cssValueToBe(
			`${ toggleOutline[ 'mobile-header-toggle-icon-size' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',
			property: 'fill',
		} ).cssValueToBe(
			`${ toggleOutline[ 'mobile-header-toggle-btn-color' ] }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-outline',
			property: 'border-top-width',
		} ).cssValueToBe(
			`${
				toggleOutline[ 'mobile-header-toggle-btn-border-size' ].top +
				'px'
			}`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-outline',
			property: 'border-right-width',
		} ).cssValueToBe(
			`${
				toggleOutline[ 'mobile-header-toggle-btn-border-size' ].right +
				'px'
			}`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-outline',
			property: 'border-bottom-width',
		} ).cssValueToBe(
			`${
				toggleOutline[ 'mobile-header-toggle-btn-border-size' ].bottom +
				'px'
			}`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-outline',
			property: 'border-left-width',
		} ).cssValueToBe(
			`${
				toggleOutline[ 'mobile-header-toggle-btn-border-size' ].left +
				'px'
			}`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-outline',
			property: 'border-color',
		} ).cssValueToBe(
			`${ toggleOutline[ 'mobile-header-toggle-border-color' ] }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-outline',
			property: 'border-radius',
		} ).cssValueToBe(
			`${ toggleOutline[ 'mobile-header-toggle-border-radius' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu',
			property: 'font-size',
		} ).cssValueToBe(
			`${ toggleOutline[ 'mobile-header-label-font-size' ] + 'px' }`,
		);

		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].tablet.top }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].tablet.right }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].tablet.bottom }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].tablet.left }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].mobile.top }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].mobile.right }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].mobile.bottom }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ toggleOutline[ 'section-header-mobile-trigger-margin' ].mobile.left }${ toggleOutline[ 'section-header-mobile-trigger-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
