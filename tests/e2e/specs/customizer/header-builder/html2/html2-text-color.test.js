import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'html2 block settings in the customizer', () => {
	it( 'html2 text color for desktop should apply correctly', async () => {
		const htmlColor = {
			'header-html-2': 'Testing HTML2 text color',
			'header-html-2color': {
				desktop: 'rgb(120, 31, 158)',
			},
			'header-desktop-items': {
				primary: {
					primary_center: {
						0: 'html-2',

					},
				},
			},
		};
		await setCustomize( htmlColor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-header-html-2 .ast-builder-html-element' );
		await expect( {
			selector: '.ast-header-html-2 .ast-builder-html-element',
			property: 'color',
		} ).cssValueToBe( `${ htmlColor[ 'header-html-2color' ].desktop }`,
		);
	} );

	it( 'html2 text color for tablet should apply correctly', async () => {
		const htmlColor = {
			'header-html-2': 'Testing HTML2 text color',
			'header-html-2color': {
				tablet: 'rgb(19, 122, 23)',
			},
			'header-mobile-items': {
				primary: {
					primary_center: {
						0: 'html-2',

					},
				},
			},
		};
		await setCustomize( htmlColor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'medium' );
		await page.waitForSelector( '.ast-header-html-2 .ast-builder-html-element' );
		await expect( {
			selector: '.ast-header-html-2 .ast-builder-html-element',
			property: 'color',
		} ).cssValueToBe( `${ htmlColor[ 'header-html-2color' ].tablet }`,
		);
	} );

	it( 'html2 text color for mobile should apply correctly', async () => {
		const htmlColor = {
			'header-html-2': 'Testing HTML2 text color',
			'header-html-2color': {
				mobile: 'rgb(39, 36, 200)',
			},
			'header-mobile-items': {
				primary: {
					primary_center: {
						0: 'html-2',

					},
				},
			},
		};
		await setCustomize( htmlColor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'small' );
		await page.waitForSelector( '.ast-header-html-2 .ast-builder-html-element' );
		await expect( {
			selector: '.ast-header-html-2 .ast-builder-html-element',
			property: 'color',
		} ).cssValueToBe( `${ htmlColor[ 'header-html-2color' ].mobile }`,
		);
	} );
} );
