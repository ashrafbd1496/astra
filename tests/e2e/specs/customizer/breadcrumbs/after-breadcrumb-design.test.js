import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
import { publishPost } from '../../../utils/publish-post';
import { responsiveFontSize } from '../../../utils/responsive-utils';
import { setBrowserViewport } from '../../../utils/set-browser-viewport';
describe( 'breadcrumb Typography settings in the customizer', () => {
	it( 'breadcrumb typography should apply corectly', async () => {
		const aftbreadcrumbFont = {
			'breadcrumb-position': 'astra_header_after',
			'breadcrumb-separator': '>>',
			'breadcrumb-font-family': 'Raleway, sans-serif',
			'breadcrumb-font-weight': '800',
			'breadcrumb-text-transform': 'uppercase',
			'breadcrumb-font-size': {
				desktop: 72,
				tablet: '42',
				mobile: '32',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'breadcrumb-line-height': '100.8px',
			'breadcrumb-active-color-responsive': {
				desktop: 'rgb(25, 7, 0)',
				tablet: 'rgb(25, 7, 0)',
				mobile: 'rgb(25, 7, 0)',
			},
			'breadcrumb-bg-color': {
				desktop: 'rgb(148, 223, 219)',
				tablet: 'rgb(148, 223, 219)',
				mobile: 'rgb(148, 223, 219)',
			},
			'breadcrumb-separator-color': {
				desktop: 'rgb(19, 7, 37)',
				tablet: 'rgb(19, 7, 37)',
				mobile: 'rgb(19, 7, 37)',
			},
			'breadcrumb-text-color-responsive': {
				desktop: 'rgb(26, 13, 29)',
				tablet: 'rgb(26, 13, 29)',
				mobile: 'rgb(26, 13, 29)',
			},
			'breadcrumb-hover-color-responsive': {
				desktop: 'rgb(22, 19, 2)',
				tablet: 'rgb(48, 237, 38)',
				mobile: 'rgb(48, 237, 38)',
			},
			'breadcrumb-spacing': {
				desktop: {
					top: 10,
					right: 15,
					bottom: 20,
					left: 25,
				},
				tablet: {
					top: 10,
					right: 15,
					bottom: 20,
					left: 25,
				},
				mobile: {
					top: 10,
					right: 15,
					bottom: 20,
					left: 25,
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( aftbreadcrumbFont );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'page',
				title: 'breadcrumb',
			} );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li',
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				aftbreadcrumbFont[ 'breadcrumb-font-size' ].tablet,
			) }${
				aftbreadcrumbFont[ 'breadcrumb-font-size' ][ 'tablet-unit' ]
			}`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				aftbreadcrumbFont[ 'breadcrumb-font-size' ].mobile,
			) }${
				aftbreadcrumbFont[ 'breadcrumb-font-size' ][ 'mobile-unit' ]
			}`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-weight',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-font-weight' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-font-size' ].desktop }${ aftbreadcrumbFont[ 'breadcrumb-font-size' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'line-height',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-line-height' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'text-transform',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-text-transform' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-family',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-font-family' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-active-color-responsive' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-active-color-responsive' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-active-color-responsive' ].mobile }`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-bg-color' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-bg-color' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-bg-color' ].mobile }`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-text-color-responsive' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-text-color-responsive' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-text-color-responsive' ].mobile }`,
		);
		// GitHub action E2E fail case
		//to test content link hover color
		//await setBrowserViewport( 'large' );
		//await page.hover( '.ast-breadcrumbs-wrapper .trail-items a' );
		//await expect( {
		//	selector: '.ast-breadcrumbs-wrapper .trail-items a',
		//	property: 'color',
		//} ).cssValueToBe( `${ aftbreadcrumbFont[ 'breadcrumb-hover-color-responsive' ].desktop }`,
		//);

		// await expect( {
		// 	selector: '.ast-breadcrumbs-wrapper .trail-items li::after',
		// 	property: 'color',
		// } ).cssValueToBe( `${ aftbreadcrumbFont[ 'breadcrumb-separator-color' ].desktop }`,
		// );
		// await setBrowserViewport( 'medium' );
		// await expect( {
		// 	selector: '.ast-breadcrumbs-wrapper .trail-items li::after',
		// 	property: 'color',
		// } ).cssValueToBe(
		// 	`${ aftbreadcrumbFont[ 'breadcrumb-separator-color' ].tablet }`,
		// );
		// await setBrowserViewport( 'small' );
		// await expect( {
		// 	selector: '.ast-breadcrumbs-wrapper .trail-items li::after',
		// 	property: 'color',
		// } ).cssValueToBe(
		// 	`${ aftbreadcrumbFont[ 'breadcrumb-separator-color' ].mobile }`,
		// );

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].desktop.top }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].desktop.right }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].desktop.bottom }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].desktop.left }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].tablet.top }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].tablet.right }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].tablet.bottom }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].tablet.left }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].mobile.top }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].mobile.right }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].mobile.bottom }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.main-header-bar.ast-header-breadcrumb',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ aftbreadcrumbFont[ 'breadcrumb-spacing' ].mobile.left }${ aftbreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
	} );
} );
