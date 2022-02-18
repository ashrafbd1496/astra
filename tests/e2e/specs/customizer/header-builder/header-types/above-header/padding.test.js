import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';
describe( 'above header padding setting in customizer', () => {
	it( 'padding should apply correctly', async () => {
		const aboveHeaderPadding = {
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
			'section-above-header-builder-padding': {
				desktop: {
					top: '50',
					right: '30',
					bottom: '50',
					left: '30',
				},
				tablet: {
					top: '30',
					right: '20',
					bottom: '30',
					left: '20',
				},
				mobile: {
					top: '20',
					right: '20',
					bottom: '20',
					left: '20',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( aboveHeaderPadding );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].desktop.top }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].desktop.right }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].desktop.bottom }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].desktop.left }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].tablet.top }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].tablet.right }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].tablet.bottom }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].tablet.left }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].mobile.top }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].mobile.right }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].mobile.bottom }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ aboveHeaderPadding[ 'section-above-header-builder-padding' ].mobile.left }${ aboveHeaderPadding[ 'section-above-header-builder-padding' ][ 'mobile-unit' ] }`,
		);
	} );
} );
