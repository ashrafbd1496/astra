import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'primary header margin setting in customizer', () => {
	it( 'margin should apply correctly', async () => {
		const primaryheaderMargin = {
			'section-primary-header-builder-margin': {
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
		await setCustomize( primaryheaderMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector(
			'.ast-desktop .ast-primary-header-bar.main-header-bar',
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].desktop.top }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].desktop.right }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].desktop.bottom }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-desktop .ast-primary-header-bar.main-header-bar',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].desktop.left }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].tablet.top }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].tablet.right }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].tablet.bottom }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].tablet.left }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].mobile.top }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].mobile.right }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].mobile.bottom }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector:
				'.ast-header-break-point #masthead .ast-primary-header-bar.main-header-bar',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ primaryheaderMargin[ 'section-primary-header-builder-margin' ].mobile.left }${ primaryheaderMargin[ 'section-primary-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
