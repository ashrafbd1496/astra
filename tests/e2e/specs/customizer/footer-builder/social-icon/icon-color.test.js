import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { scrollToElement } from '../../../../utils/scroll-to-element';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'Social Icons in the customizer', () => {
	it( 'footer social icon color for desktop should apply correctly', async () => {
		const socialiconColor = {
			'footer-social-1-color': {
				desktop: 'rgb(111, 80, 199)',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconColor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-social-1-wrap .ast-social-color-type-custom .ast-builder-social-element svg' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .ast-social-color-type-custom .ast-builder-social-element svg',
			property: 'fill',
		} ).cssValueToBe( `${ socialiconColor[ 'footer-social-1-color' ].desktop }`,
		);
	} );

	it( 'footer social icon color for tablet should apply correctly', async () => {
		const socialiconColor = {
			'footer-social-1-color': {
				tablet: 'rgb(111, 80, 199)',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconColor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-social-1-wrap .ast-social-color-type-custom .ast-builder-social-element svg' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .ast-social-color-type-custom .ast-builder-social-element svg',
			property: 'fill',
		} ).cssValueToBe( `${ socialiconColor[ 'footer-social-1-color' ].tablet }`,
		);
	} );

	it( 'footer social icon color for mobile should apply correctly', async () => {
		const socialiconColor = {
			'footer-social-1-color': {
				mobile: 'rgb(111, 80, 199)',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconColor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-footer-social-1-wrap .ast-social-color-type-custom .ast-builder-social-element svg' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap .ast-social-color-type-custom .ast-builder-social-element svg',
			property: 'fill',
		} ).cssValueToBe( `${ socialiconColor[ 'footer-social-1-color' ].mobile }`,
		);
	} );
} );
