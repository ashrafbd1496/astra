import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
import { publishPost } from '../../../utils/publish-post';
import { responsiveFontSize } from '../../../utils/responsive-utils';
import { setBrowserViewport } from '../../../utils/set-browser-viewport';
describe( 'breadcrumb typography settings in the customizer', () => {
	it( 'breadcrumb typography should apply corectly', async () => {
		const beforebreadcrumbFont = {
			'breadcrumb-position': 'astra_entry_top',
			'breadcrumb-separator': '>>',
			'breadcrumb-font-family': 'Raleway, sans-serif',
			'breadcrumb-font-weight': '800',
			'breadcrumb-text-transform': 'uppercase',
			'breadcrumb-font-size': {
				desktop: 72,
				tablet: 42,
				mobile: 32,
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
				tablet: 'rgb(158, 233, 229)',
				mobile: 'rgb(168, 243, 239)',
			},
			'breadcrumb-separator-color': {
				desktop: 'rgb(19, 7, 7)',
				tablet: 'rgb(19, 7, 7)',
				mobile: 'rgb(19, 7, 7)',
			},
			'breadcrumb-text-color-responsive': {
				desktop: 'rgb(26, 13, 9)',
				tablet: 'rgb(26, 13, 9)',
				mobile: 'rgb(26, 13, 9)',
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
		await setCustomize( beforebreadcrumbFont );

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
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );

		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-font-size' ].desktop }${ beforebreadcrumbFont[ 'breadcrumb-font-size' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				beforebreadcrumbFont[ 'breadcrumb-font-size' ].tablet,
			) }${
				beforebreadcrumbFont[ 'breadcrumb-font-size' ][ 'tablet-unit' ]
			}`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				beforebreadcrumbFont[ 'breadcrumb-font-size' ].mobile,
			) }${
				beforebreadcrumbFont[ 'breadcrumb-font-size' ][ 'mobile-unit' ]
			}`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'font-weight',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-font-weight' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'line-height',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-line-height' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-transform',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-text-transform' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper ',
			property: 'font-family',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-font-family' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-active-color-responsive' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-active-color-responsive' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-active-color-responsive' ].mobile }`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-bg-color' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-bg-color' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-bg-color' ].mobile }`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-text-color-responsive' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-text-color-responsive' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-text-color-responsive' ].mobile }`,
		);
		// GitHub action E2E fail case
		// await setBrowserViewport( 'large' );
		// await page.hover( '.ast-breadcrumbs-wrapper .trail-items a' );
		// await expect( {
		// 	selector: '.ast-breadcrumbs-wrapper .trail-items a',
		// 	property: 'color',
		// } ).cssValueToBe( `${ beforebreadcrumbFont[ 'breadcrumb-hover-color-responsive' ].desktop }`,
		// );

		// await expect( {
		// 	selector: '.trail-item.trail-begin::after',
		// 	property: 'color',
		// } ).cssValueToBe( `${ beforebreadcrumbFont[ 'breadcrumb-separator-color' ].desktop }`,
		// );
		// await setBrowserViewport( 'medium' );
		// await expect( {
		// 	selector: '.trail-item.trail-begin::after',
		// 	property: 'color',
		// } ).cssValueToBe(
		// 	`${ beforebreadcrumbFont[ 'breadcrumb-separator-color' ].tablet }`,
		// );
		// await setBrowserViewport( 'small' );
		// await expect( {
		// 	selector: '.trail-item.trail-begin::after',
		// 	property: 'color',
		// } ).cssValueToBe(
		// 	`${ beforebreadcrumbFont[ 'breadcrumb-separator-color' ].mobile }`,
		// );

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].desktop.top }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].desktop.right }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].desktop.bottom }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].desktop.left }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].tablet.top }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].tablet.right }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].tablet.bottom }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].tablet.left }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].mobile.top }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].mobile.right }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].mobile.bottom }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ beforebreadcrumbFont[ 'breadcrumb-spacing' ].mobile.left }${ beforebreadcrumbFont[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
	} );
} );
