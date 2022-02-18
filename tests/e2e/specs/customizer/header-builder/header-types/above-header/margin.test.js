import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'above header margin setting in customizer', () => {
	it( 'margin should apply correctly', async () => {
		const aboveHeaderMargin = {
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'widget-1',
					},
				},
			},
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'widget-2',
					},
				},
			},
			'section-above-header-builder-margin': {
				desktop: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				tablet: {
					top: '25',
					right: '25',
					bottom: '25',
					left: '25',
				},
				mobile: {
					top: '15',
					right: '15',
					bottom: '15',
					left: '15',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( aboveHeaderMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].desktop.top }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].desktop.right }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].desktop.bottom }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].desktop.left }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].tablet.top }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].tablet.right }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].tablet.bottom }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].tablet.left }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].mobile.top }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].mobile.right }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].mobile.bottom }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ aboveHeaderMargin[ 'section-above-header-builder-margin' ].mobile.left }${ aboveHeaderMargin[ 'section-above-header-builder-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
