import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Above footer margin setting in customizer', () => {
	it( 'margin should apply correctly', async () => {
		const abovefooterMargin = {
			'section-above-footer-builder-margin': {
				desktop: {
					top: '50',
					right: '50',
					bottom: '50',
					left: '50'
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
				above: {
					above_1: {
						0: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( abovefooterMargin );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-above-footer-wrap[data-section="section-above-footer-builder"]' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].desktop.top }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].desktop.right }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].desktop.bottom }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].desktop.left }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].tablet.top }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].tablet.right }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].tablet.bottom }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].tablet.left }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-top',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].mobile.top }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-right',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].mobile.right }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].mobile.bottom }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.site-above-footer-wrap[data-section="section-above-footer-builder"]',
			property: 'margin-left',
		} ).cssValueToBe( `${ abovefooterMargin[ 'section-above-footer-builder-margin' ].mobile.left }${ abovefooterMargin[ 'section-above-footer-builder-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
