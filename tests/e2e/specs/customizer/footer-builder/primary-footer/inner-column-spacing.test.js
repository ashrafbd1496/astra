import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'Primary footer inner column spacing setting in customizer', () => {
	it( 'spacing should apply correctly', async () => {
		const innercolumnSpacing = {
			'hb-inner-spacing':
            {
            	desktop: '50',
            	tablet: '50',
            	mobile: '50',
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
		await setCustomize( innercolumnSpacing );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .ast-builder-grid-row' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );

		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .ast-builder-grid-row',
			property: 'grid-column-gap',
		} ).cssValueToBe( `${ innercolumnSpacing[ 'hb-inner-spacing' ].desktop }${ innercolumnSpacing[ 'hb-inner-spacing' ][ 'desktop-unit' ] }`,
		);

		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .ast-builder-grid-row',
			property: 'grid-column-gap',
		} ).cssValueToBe( `${ innercolumnSpacing[ 'hb-inner-spacing' ].tablet }${ innercolumnSpacing[ 'hb-inner-spacing' ][ 'tablet-unit' ] }`,
		);

		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .ast-builder-grid-row',
			property: 'grid-column-gap',
		} ).cssValueToBe( `${ innercolumnSpacing[ 'hb-inner-spacing' ].mobile }${ innercolumnSpacing[ 'hb-inner-spacing' ][ 'mobile-unit' ] }`,
		);
	} );
} );
