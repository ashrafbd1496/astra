import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Below footer padding setting in customizer', () => {
	it( 'padding should apply correctly', async () => {
		const primaryfooterpadding = {
			'section-primary-footer-builder-padding': {
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
			'footer-desktop-items': {
				primary: {
					primary_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( primaryfooterpadding );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-top',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].desktop.top }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-right',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].desktop.right }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-bottom',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].desktop.bottom }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-left',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].desktop.left }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-top',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].tablet.top }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-right',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].tablet.right }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-bottom',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].tablet.bottom }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-left',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].tablet.left }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-top',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].mobile.top }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-right',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].mobile.right }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-bottom',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].mobile.bottom }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'padding-left',
		} ).cssValueToBe( `${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ].mobile.left }${ primaryfooterpadding[ 'section-primary-footer-builder-padding' ][ 'mobile-unit' ] }`,
		);
	} );
} );
