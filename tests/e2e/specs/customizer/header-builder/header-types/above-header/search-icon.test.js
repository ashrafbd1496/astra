import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'customizing search icon in the above header section', () => {
	it( 'search icon size and color for desktop should apply correctly', async () => {
		const searchIcon = {
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'search',
					},
				},
			},
			'header-search-icon-space': {
				desktop: '60',
				'desktop-unit': 'px',
			},
			'header-search-icon-color': {
				desktop: 'rgb(173, 17, 228)',
			},
		};
		await setCustomize( searchIcon );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.astra-search-icon' );
		await expect( {
			selector: '.astra-search-icon',
			property: 'font-size',
		} ).cssValueToBe(
			`${ searchIcon[ 'header-search-icon-space' ].desktop }${ searchIcon[ 'header-search-icon-space' ][ 'desktop-unit' ] }`,
		);
		//Search icon color for desktop
		await expect( {
			selector: '.ast-header-search .ast-icon',
			property: 'color',
		} ).cssValueToBe(
			`${ searchIcon[ 'header-search-icon-color' ].desktop }`,
		);
	} );
	it( 'search icon color and size for tablet should apply correctly', async () => {
		const searchIcon = {
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'search',
					},
				},
			},
			'header-search-icon-color': {
				tablet: 'rgb(7, 37, 245)',
			},
			'header-search-icon-space': {
				tablet: '50',
				'tablet-unit': 'px',
			},
		};
		await setCustomize( searchIcon );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-header-search .astra-search-icon',
			property: 'color',
		} ).cssValueToBe(
			`${ searchIcon[ 'header-search-icon-color' ].tablet }`,
		);
		//Search icon size for tablet
		await expect( {
			selector: '.ast-header-search .astra-search-icon',
			property: 'font-size',
		} ).cssValueToBe(
			`${ searchIcon[ 'header-search-icon-space' ].tablet }${ searchIcon[ 'header-search-icon-space' ][ 'tablet-unit' ] }`,
		);
	} );
	it( 'search icon color and size for mobile should apply correctly', async () => {
		const searchIcon = {
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'search',
					},
				},
			},
			'header-search-icon-color': {
				mobile: 'rgb(4, 128, 37)',
			},
			'header-search-icon-space': {
				mobile: '30',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( searchIcon );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-header-search .astra-search-icon',
			property: 'color',
		} ).cssValueToBe(
			`${ searchIcon[ 'header-search-icon-color' ].mobile }`,
		);
		//Search icon size for mobile
		await expect( {
			selector: '.ast-header-search .astra-search-icon',
			property: 'font-size',
		} ).cssValueToBe(
			`${ searchIcon[ 'header-search-icon-space' ].mobile }${ searchIcon[ 'header-search-icon-space' ][ 'mobile-unit' ] }`,
		);
	} );
} );
