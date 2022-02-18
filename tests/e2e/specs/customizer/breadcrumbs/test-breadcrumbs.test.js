import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
import { publishPost } from '../../../utils/publish-post';
import { responsiveFontSize } from '../../../utils/responsive-utils';
import { setBrowserViewport } from '../../../utils/set-browser-viewport';
describe( 'breadcrumb Typography settings in the customizer', () => {
	it( 'breadcrumb typography should apply correctly', async () => {
		const breadcrumbTypography = {
			'breadcrumb-position': 'astra_header_primary_container_after',
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
		await setCustomize( breadcrumbTypography );

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

		await expect( {
			selector:
				'.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li ',
			property: 'font-size',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-font-size' ].desktop }${ breadcrumbTypography[ 'breadcrumb-font-size' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				breadcrumbTypography[ 'breadcrumb-font-size' ].tablet,
			) }${
				breadcrumbTypography[ 'breadcrumb-font-size' ][ 'tablet-unit' ]
			}`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				breadcrumbTypography[ 'breadcrumb-font-size' ].mobile,
			) }${
				breadcrumbTypography[ 'breadcrumb-font-size' ][ 'mobile-unit' ]
			}`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-weight',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-font-weight' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'line-height',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-line-height' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-transform',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-text-transform' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
			property: 'font-family',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-font-family' ] }`,
		);

		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-active-color-responsive' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-active-color-responsive' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
			property: 'color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-active-color-responsive' ].mobile }`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-bg-color' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-bg-color' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'background-color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-bg-color' ].mobile }`,
		);

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-text-color-responsive' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-text-color-responsive' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper .trail-items a',
			property: 'color',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-text-color-responsive' ].mobile }`,
		);

		// GitHub action E2E fail case
		// await setBrowserViewport( 'large' );
		// await page.hover( '.ast-breadcrumbs-wrapper .trail-items a' );
		// await expect( {
		// 	selector: '.ast-breadcrumbs-wrapper .trail-items a:hover',
		// 	property: 'color',
		// } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-hover-color-responsive' ].desktop }`,
		// );

		// await setBrowserViewport( 'large' );
		// await expect( {
		// 	selector: '.trail-items li::after',
		// 	property: 'color',
		// } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-separator-color' ].desktop }`,
		// );
		// await setBrowserViewport( 'medium' );
		// await expect( {
		// 	selector: '.trail-items li::after',
		// 	property: 'color',
		// } ).cssValueToBe(
		// 	`${ breadcrumbTypography[ 'breadcrumb-separator-color' ].tablet }`,
		// );
		// await setBrowserViewport( 'small' );
		// await expect( {
		// 	selector: '.trail-items li::after',
		// 	property: 'color',
		// } ).cssValueToBe(
		// 	`${ breadcrumbTypography[ 'breadcrumb-separator-color' ].mobile }`,
		// );

		await setBrowserViewport( 'large' );
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].desktop.top }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].desktop.right }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].desktop.bottom }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].desktop.left }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].tablet.top }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].tablet.right }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].tablet.bottom }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].tablet.left }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].mobile.top }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].mobile.right }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].mobile.bottom }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-breadcrumbs-inner nav',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ breadcrumbTypography[ 'breadcrumb-spacing' ].mobile.left }${ breadcrumbTypography[ 'breadcrumb-spacing' ][ 'mobile-unit' ] }`,
		);
	} );
} );
