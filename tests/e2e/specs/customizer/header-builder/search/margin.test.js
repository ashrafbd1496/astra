import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'search-icon margin in the customizer', () => {
	it( 'search-icon margin for desktop should apply correctly', async () => {
		const searchiconMargin = {
			'section-header-search-margin': {
				desktop: {
					top: '30',
					right: '25',
					bottom: '20',
					left: '15',
				},
				'desktop-unit': 'px',
			},
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'search',
					},
				},
			},
		};
		await setCustomize( searchiconMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-header-search' );
		await expect( {
			selector: '.ast-header-search',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].desktop.top }${ searchiconMargin[ 'section-header-search-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-header-search',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].desktop.right }${ searchiconMargin[ 'section-header-search-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-header-search',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].desktop.bottom }${ searchiconMargin[ 'section-header-search-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-header-search',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].desktop.left }${ searchiconMargin[ 'section-header-search-margin' ][ 'desktop-unit' ] }`,
		);
	} );
	it( 'search icon margin for tablet should apply correctly', async () => {
		const searchiconMargin = {
			'section-header-search-margin': {
				tablet: {
					top: '50',
					right: '45',
					bottom: '40',
					left: '35',
				},
				'tablet-unit': 'px',
			},
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'search',
					},
				},
			},
		};
		await setCustomize( searchiconMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-hfb-header .site-header-section > .ast-header-search',
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].tablet.top }${ searchiconMargin[ 'section-header-search-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].tablet.right }${ searchiconMargin[ 'section-header-search-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].tablet.bottom }${ searchiconMargin[ 'section-header-search-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].tablet.left }${ searchiconMargin[ 'section-header-search-margin' ][ 'tablet-unit' ] }`,
		);
	} );

	it( 'search icon margin for mobile should apply correctly', async () => {
		const searchiconMargin = {
			'section-header-search-margin': {
				mobile: {
					top: '30',
					right: '25',
					bottom: '20',
					left: '15',
				},
				'mobile-unit': 'px',
			},
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'search',
					},
				},
			},
		};
		await setCustomize( searchiconMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-hfb-header .site-header-section > .ast-header-search',
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].mobile.top }${ searchiconMargin[ 'section-header-search-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].mobile.right }${ searchiconMargin[ 'section-header-search-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].mobile.bottom }${ searchiconMargin[ 'section-header-search-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-hfb-header .site-header-section > .ast-header-search',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ searchiconMargin[ 'section-header-search-margin' ].mobile.left }${ searchiconMargin[ 'section-header-search-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
