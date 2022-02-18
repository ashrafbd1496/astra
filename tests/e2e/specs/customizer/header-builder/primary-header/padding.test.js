import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'primary header padding setting in customizer', () => {
	it( 'padding should apply correctly', async () => {
		const primaryheaderpadding = {
			'section-primary-header-builder-padding': {
				desktop: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				tablet: {
					top: '40',
					right: '40',
					bottom: '40',
					left: '40',
				},
				mobile: {
					top: '30',
					right: '30',
					bottom: '30',
					left: '30',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( primaryheaderpadding );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector(
			'.ast-desktop .ast-primary-header-bar.main-header-bar',
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].desktop.top }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].desktop.right }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].desktop.bottom }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].desktop.left }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].tablet.top }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].tablet.right }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].tablet.bottom }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].tablet.left }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].mobile.top }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].mobile.right }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].mobile.bottom }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ primaryheaderpadding[ 'section-primary-header-builder-padding' ].mobile.left }${ primaryheaderpadding[ 'section-primary-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
	} );
} );
