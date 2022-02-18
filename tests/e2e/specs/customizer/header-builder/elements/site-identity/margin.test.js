import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';

describe( 'site Identity margin settings in the customizer', () => {
	it( 'spacing should apply corectly', async () => {
		const siteTaglineSpacing = {
			'title_tagline-margin': {
				desktop: {
					top: 10,
					right: 15,
					bottom: 20,
					left: 25,
				},
				tablet: {
					top: '',
					right: '',
					bottom: '',
					left: '',
				},
				mobile: {
					top: '',
					right: '',
					bottom: '',
					left: '',
				},
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
		};

		await setCustomize( siteTaglineSpacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector(
			'.ast-builder-layout-element .ast-site-identity',
		);

		await expect( {
			selector: '.ast-builder-layout-element .ast-site-identity',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ siteTaglineSpacing[ 'title_tagline-margin' ].desktop.top }${ siteTaglineSpacing[ 'title_tagline-margin' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-builder-layout-element .ast-site-identity',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ siteTaglineSpacing[ 'title_tagline-margin' ].desktop.right }${ siteTaglineSpacing[ 'title_tagline-margin' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-builder-layout-element .ast-site-identity',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ siteTaglineSpacing[ 'title_tagline-margin' ].desktop.bottom }${ siteTaglineSpacing[ 'title_tagline-margin' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-builder-layout-element .ast-site-identity',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ siteTaglineSpacing[ 'title_tagline-margin' ].desktop.left }${ siteTaglineSpacing[ 'title_tagline-margin' ][ 'desktop-unit' ] }`,
		);
	} );
} );
