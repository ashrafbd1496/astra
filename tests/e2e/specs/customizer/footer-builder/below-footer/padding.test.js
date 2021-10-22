import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Below footer padding setting in customizer', () => {
	it( 'padding should apply correctly', async () => {
		const belowfooterpadding = {
			'section-below-footer-builder-padding': {
				desktop: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				tablet: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				mobile: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( belowfooterpadding );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-top',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].desktop.top }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-right',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].desktop.right }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-bottom',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].desktop.bottom }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-left',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].desktop.left }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-top',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].tablet.top }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-right',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].tablet.right }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-bottom',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].tablet.bottom }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-left',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].tablet.left }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-top',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].mobile.top }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-right',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].mobile.right }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-bottom',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].mobile.bottom }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'padding-left',
		} ).cssValueToBe( `${ belowfooterpadding[ 'section-below-footer-builder-padding' ].mobile.left }${ belowfooterpadding[ 'section-below-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
	} );
} );