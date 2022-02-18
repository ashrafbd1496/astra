import { createURL } from '@wordpress/e2e-test-utils';
import {
	setCustomize,
	uploadImage,
	setLogo,
} from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';

describe( 'site logo settings in the customizer', () => {
	it( 'site logo width should apply correctly', async () => {
		const fileDetails = {
			fileName: 'Logo-Image.jpg',
			fileURL:
				'https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg',
		};
		const imageId = await uploadImage( fileDetails );
		await page.goto( createURL( '/wp-admin/upload.php' ), {
			waitUntil: 'networkidle0',
		} );
		await setLogo( imageId.attachedMedia );
		const sitelogoWidth = {
			'ast-header-responsive-logo-width': {
				desktop: '305',
				tablet: '205',
				mobile: '105',
			},
		};
		await setCustomize( sitelogoWidth );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( 'header .custom-logo-link img' );
		await expect( {
			selector: 'header .custom-logo-link img',
			property: 'max-width',
		} ).cssValueToBe(
			`${ sitelogoWidth[ 'ast-header-responsive-logo-width' ].desktop }px`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: 'header .custom-logo-link img',
			property: 'max-width',
		} ).cssValueToBe(
			`${ sitelogoWidth[ 'ast-header-responsive-logo-width' ].tablet }px`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'header .custom-logo-link img, .ast-header-break-point .site-branding img, .ast-header-break-point .custom-logo-link img',
			property: 'max-width',
		} ).cssValueToBe(
			`${ sitelogoWidth[ 'ast-header-responsive-logo-width' ].mobile }px`,
		);
	} );
} );
