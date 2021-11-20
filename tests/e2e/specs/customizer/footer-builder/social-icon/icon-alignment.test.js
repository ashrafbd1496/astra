import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { scrollToElement } from '../../../../utils/scroll-to-element';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'Social Icons in the customizer', () => {
	it( 'footer social icon alignment for desktop should apply correctly', async () => {
		const socialiconAlignment = {
			'footer-social-1-alignment': {
				desktop: 'left',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '[data-section="section-fb-social-icons-1"] .footer-social-inner-wrap' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '[data-section="section-fb-social-icons-1"] .footer-social-inner-wrap',
			property: 'text-align',
		} ).cssValueToBe(
			`${ socialiconAlignment[ 'footer-social-1-alignment' ].desktop }`,
		);
	} );
	it( 'footer social icon alignment for tablet should apply correctly', async () => {
		const socialiconAlignment = {
			'footer-social-1-alignment': {
				tablet: 'center',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '[data-section="section-fb-social-icons-1"] .footer-social-inner-wrap' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '[data-section="section-fb-social-icons-1"] .footer-social-inner-wrap',
			property: 'text-align',
		} ).cssValueToBe(
			`${ socialiconAlignment[ 'footer-social-1-alignment' ].tablet }`,
		);
	} );
	it( 'footer social icon alignment for mobile should apply correctly', async () => {
		const socialiconAlignment = {
			'footer-social-1-alignment': {
				mobile: 'right',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconAlignment );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '[data-section="section-fb-social-icons-1"] .footer-social-inner-wrap' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '[data-section="section-fb-social-icons-1"] .footer-social-inner-wrap',
			property: 'text-align',
		} ).cssValueToBe(
			`${ socialiconAlignment[ 'footer-social-1-alignment' ].mobile }`,
		);
	} );
} );
