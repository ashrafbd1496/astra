import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { responsiveFontSize } from '../../../../utils/responsive-utils';
describe( 'customizing html element in the above header section', () => {
	it( 'text color for HTML element should apply correctly', async () => {
		const htmlBlock = {
			'header-html-1':
				'<p>HTML Text color |<a href="https://wpastra.com/" rel="nofollow noopener" target="_blank">Astra QA</a></p>',
			'header-html-1color': {
				desktop: 'rgb(0, 0, 255)',
				tablet: 'rgb(52, 3, 89)',
				mobile: 'rgb(89, 3, 78)',
			},
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'html-1',
					},
				},
			},
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'html-1',
					},
				},
			},
		};
		await setCustomize( htmlBlock );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		//text color
		await page.waitForSelector(
			'.ast-header-html-1 .ast-builder-html-element',
		);
		await expect( {
			selector: '.ast-header-html-1 .ast-builder-html-element',
			property: 'color',
		} ).cssValueToBe( `${ htmlBlock[ 'header-html-1color' ].desktop }` );
		await setBrowserViewport( 'medium' );
		await page.waitForSelector(
			'.ast-header-html-1 .ast-builder-html-element',
		);
		await expect( {
			selector: '.ast-header-html-1 .ast-builder-html-element',
			property: 'color',
		} ).cssValueToBe( `${ htmlBlock[ 'header-html-1color' ].tablet }` );
		await setBrowserViewport( 'small' );
		await page.waitForSelector(
			'.ast-header-html-1 .ast-builder-html-element',
		);
		await expect( {
			selector: '.ast-header-html-1 .ast-builder-html-element',
			property: 'color',
		} ).cssValueToBe( `${ htmlBlock[ 'header-html-1color' ].mobile }` );
		//Assertion for link color
	} );
	it( 'link color for HTML element should apply correctly', async () => {
		const htmlBlock = {
			'header-html-1link-color': {
				desktop: 'rgb(234, 22, 22)',
				tablet: 'rgb(80, 1, 1)',
				mobile: 'rgb(27, 1, 36)',
			},
		};
		await setCustomize( htmlBlock );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-header-html-1 a' );
		await expect( {
			selector: '.ast-header-html-1 a',
			property: 'color',
		} ).cssValueToBe(
			`${ htmlBlock[ 'header-html-1link-color' ].desktop }`,
		);
		await setBrowserViewport( 'medium' );
		await page.waitForSelector( '.ast-header-html-1 a' );
		await expect( {
			selector: '.ast-header-html-1 a',
			property: 'color',
		} ).cssValueToBe(
			`${ htmlBlock[ 'header-html-1link-color' ].tablet }`,
		);
		await setBrowserViewport( 'small' );
		await page.waitForSelector( '.ast-header-html-1 a' );
		await expect( {
			selector: '.ast-header-html-1 a',
			property: 'color',
		} ).cssValueToBe(
			`${ htmlBlock[ 'header-html-1link-color' ].mobile }`,
		);
	} );
	it( 'font size for HTML element should apply correctly', async () => {
		const htmlBlock = {
			'header-html-1':
				'<p>HTML Text color |<a href="https://wpastra.com/" rel="nofollow noopener" target="_blank">Astra QA</a></p>',
			'font-size-section-hb-html-1': {
				desktop: '50',
				tablet: '30',
				mobile: '20',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};
		await setCustomize( htmlBlock );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		// Assertion for font size
		await page.waitForSelector(
			'.ast-header-html-1 .ast-builder-html-element',
		);
		await expect( {
			selector: '.ast-header-html-1 .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ htmlBlock[ 'font-size-section-hb-html-1' ].desktop }${ htmlBlock[ 'font-size-section-hb-html-1' ][ 'desktop-unit' ] }`,
		);
		await setBrowserViewport( 'medium' );

		await expect( {
			selector: '.ast-header-html-1 .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				htmlBlock[ 'font-size-section-hb-html-1' ].tablet,
			) }${ htmlBlock[ 'font-size-section-hb-html-1' ][ 'tablet-unit' ] }`,
		);
		await setBrowserViewport( 'small' );

		await expect( {
			selector: '.ast-header-html-1 .ast-builder-html-element',
			property: 'font-size',
		} ).cssValueToBe(
			`${ await responsiveFontSize(
				htmlBlock[ 'font-size-section-hb-html-1' ].mobile,
			) }${ htmlBlock[ 'font-size-section-hb-html-1' ][ 'mobile-unit' ] }`,
		);
	} );
} );
