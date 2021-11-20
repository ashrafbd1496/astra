import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { scrollToElement } from '../../../../utils/scroll-to-element';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'Social Icons in the customizer', () => {
	it( 'footer social icon margin for desktop should apply correctly', async () => {
		const socialiconMargin = {
			'section-fb-social-icons-1-margin': {
				desktop: {
					top: '50',
					right: '56',
					bottom: '50',
					left: '50',
				},
				'desktop-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-footer-social-1-wrap' );
		await setBrowserViewport( 'large' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-top',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].desktop.top }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-right',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].desktop.right }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].desktop.bottom }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-left',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].desktop.left }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'desktop-unit' ] }`,
		);
	} );

	it( 'footer social icon margin for tablet should apply correctly', async () => {
		const socialiconMargin = {
			'section-fb-social-icons-1-margin': {
				tablet: {
					top: '50',
					right: '56',
					bottom: '50',
					left: '50',
				},
				'tablet-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-footer-social-1-wrap' );
		await setBrowserViewport( 'medium' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-top',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].tablet.top }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-right',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].tablet.right }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].tablet.bottom }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'tablet-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-left',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].tablet.left }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'tablet-unit' ] }`,
		);
	} );

	it( 'footer social icon margin for mobile should apply correctly', async () => {
		const socialiconMargin = {
			'section-fb-social-icons-1-margin': {
				mobile: {
					top: '50',
					right: '56',
					bottom: '50',
					left: '50',
				},
				'mobile-unit': 'px',
			},
			'footer-desktop-items': {
				primary: {
					primary_2: {
						0: 'social-icons-1',

					},
				},
			},
		};
		await setCustomize( socialiconMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-footer-social-1-wrap' );
		await setBrowserViewport( 'small' );
		await scrollToElement( '#colophon' );
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-top',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].mobile.top }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-right',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].mobile.right }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].mobile.bottom }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'mobile-unit' ] }`,
		);
		await expect( {
			selector: '.ast-footer-social-1-wrap',
			property: 'margin-left',
		} ).cssValueToBe( `${ socialiconMargin[ 'section-fb-social-icons-1-margin' ].mobile.left }${ socialiconMargin[ 'section-fb-social-icons-1-margin' ][ 'mobile-unit' ] }`,
		);
	} );
} );
