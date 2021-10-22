import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Below footer margin setting in customizer', () => {
	it( 'margin should apply correctly', async () => {
		const belowfooterMargin = {
			'section-below-footer-builder-margin': {
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
		await setCustomize( belowfooterMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].desktop.top }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].desktop.right }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].desktop.bottom }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].desktop.left }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].tablet.top }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].tablet.right }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].tablet.bottom }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].tablet.left }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].mobile.top }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].mobile.right }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].mobile.bottom }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ belowfooterMargin[ 'section-below-footer-builder-margin' ].mobile.left }${ belowfooterMargin[ 'section-below-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );