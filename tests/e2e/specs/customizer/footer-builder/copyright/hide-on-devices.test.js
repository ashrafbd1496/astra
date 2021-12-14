import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'copyright hide on desktop settings in the customizer', () => {
	it( 'copyright hide on desktop setting should apply correctly', async () => {
		const copyrighthideonDesktop = {
			'section-footer-copyright-hide-desktop': 'grid',
		};
		await setCustomize( copyrighthideonDesktop );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder',
			property: 'display',
		} ).cssValueToBe( `${ copyrighthideonDesktop[ 'section-footer-copyright-hide-desktop' ] }`,
		);
	} );

	it( 'copyright hide on tablet setting should apply correctly', async () => {
		const copyrighthideonTablet = {
			'section-footer-copyright-hide-tablet': 'grid',
		};

		await setCustomize( copyrighthideonTablet );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder',
			property: 'display',
		} ).cssValueToBe( `${ copyrighthideonTablet[ 'section-footer-copyright-hide-tablet' ] }`,
		);
	} );

	it( 'copyright hide on mobile setting should apply correctly', async () => {
		const copyrighthideonMobile = {
			'section-footer-copyright-hide-mobile': 'grid',
		};

		await setCustomize( copyrighthideonMobile );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.site-below-footer-wrap[data-section="section-below-footer-builder',
			property: 'display',
		} ).cssValueToBe( `${ copyrighthideonMobile[ 'section-footer-copyright-hide-mobile' ] }`,
		);
	} );
} );
