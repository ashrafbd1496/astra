import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Below footer margin setting in customizer', () => {
	it( 'margin should apply correctly', async () => {
		const primaryfooterMargin = {
			'section-primary-footer-builder-margin': {
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
		await setCustomize( primaryfooterMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].desktop.top }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].desktop.right }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].desktop.bottom }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].desktop.left }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].tablet.top }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].tablet.right }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].tablet.bottom }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].tablet.left }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].mobile.top }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].mobile.right }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].mobile.bottom }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ].mobile.left }${ primaryfooterMargin[ 'section-primary-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
