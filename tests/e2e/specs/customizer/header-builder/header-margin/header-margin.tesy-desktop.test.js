import {
	createURL,
	createNewPost,
	publishPost,
} from '@wordpress/e2e-test-utils';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
import { setCustomize } from '../../../../utils/customize';
describe( 'Header margin settings in the customizer', () => {
	it( 'header margin settings should be applied correctly in desktop view', async () => {
		const headerWidthAndMargin = {
			'section-header-builder-layout-margin': {
				desktop: {
					top: '150',
					right: '150',
					bottom: '150',
					left: '150',
				},
				'desktop-unit': 'px',
			},
		};
		await setCustomize( headerWidthAndMargin );
		await createNewPost( {
			postType: 'page',
			title: 'Home',
			content: 'This is a home page',
		} );
		await publishPost();
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '#page' );
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-top',
		} ).cssValueToBe( `${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].desktop.top }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-right',
		} ).cssValueToBe( `${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].desktop.right }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-left',
		} ).cssValueToBe( `${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].desktop.left }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'desktop-unit' ] }`,
		);
		await expect( {
			selector: '.ast-hfb-header .site-header',
			property: 'margin-bottom',
		} ).cssValueToBe( `${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ].desktop.bottom }${ headerWidthAndMargin[ 'section-header-builder-layout-margin' ][ 'desktop-unit' ] }`,
		);
	} );
} );