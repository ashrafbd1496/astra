import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { scrollToElement } from '../../../../utils/scroll-to-element';
describe( 'copyright alignment settings in the customizer', () => {
	it( 'copyright left alignment should apply correctly', async () => {
		const copyrightAlignment = {
			'footer-copyright-alignment': {
				desktop: 'left',
				tablet: 'left',
				mobile: 'left',
			},
		};
		await setCustomize( copyrightAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-copyright' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].desktop }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].tablet }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].mobile }`,
		);
	} );

	it( 'copyright center alignment should apply correctly', async () => {
		const copyrightAlignment = {
			'footer-copyright-alignment': {
				desktop: 'center',
				tablet: 'center',
				mobile: 'center',
			},
		};
		await setCustomize( copyrightAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.evaluate( () => {
			window.scrollBy( 0, window.innerHeight );
		} );

		await page.waitForSelector( '.ast-footer-copyright' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].desktop }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].tablet }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].mobile }`,
		);
	} );

	it( 'copyright right alignment should apply correctly', async () => {
		const copyrightAlignment = {
			'footer-copyright-alignment': {
				desktop: 'right',
				tablet: 'right',
				mobile: 'right',
			},
		};
		await setCustomize( copyrightAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.evaluate( () => {
			window.scrollBy( 0, window.innerHeight );
		} );

		await page.waitForSelector( '.ast-footer-copyright' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].desktop }`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].tablet }`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'text-align',
		} ).cssValueToBe(
			`${ copyrightAlignment[ 'footer-copyright-alignment' ].mobile }`,
		);
	} );
} );
