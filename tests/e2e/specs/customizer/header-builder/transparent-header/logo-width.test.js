import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { publishPost } from '../../../../utils/publish-post';
import { setCustomize, uploadImage } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';

describe( 'transparent header logo settings in the customizer', () => {
	it( 'logo width should apply correctly', async () => {
		const fileDetails = {
			fileName: 'Logo-Image.jpg',
			fileURL:
				'https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg',
			returnURL: true,
		};
		const imageId = await uploadImage( fileDetails );
		await page.goto( createURL( '/wp-admin/upload.php' ), {
			waitUntil: 'networkidle0',
		} );
		const logoWidth = {
			'transparent-header-enable': true,
			'different-transparent-logo': true,
			'transparent-header-logo-width': {
				desktop: '350',
				tablet: '250',
				mobile: '150',
			},
			'transparent-header-logo': imageId.attachedMedia,
			'transparent-header-disable-latest-posts-index': false,
		};
		await setCustomize( logoWidth );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'page',
				title: 'transparent',
			} );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( '/transparent' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-theme-transparent-header #masthead .site-logo-img .transparent-custom-logo img',
		);
		await expect( {
			selector:
				'.ast-theme-transparent-header #masthead .site-logo-img .transparent-custom-logo img',
			property: 'max-width',
		} ).cssValueToBe(
			`${ logoWidth[ 'transparent-header-logo-width' ].desktop }px`,
		);

		await setBrowserViewport( 'medium' );
		await expect( {
			selector:
				'.ast-theme-transparent-header #masthead .site-logo-img .transparent-custom-logo img',
			property: 'max-width',
		} ).cssValueToBe(
			`${ logoWidth[ 'transparent-header-logo-width' ].tablet }px`,
		);

		await setBrowserViewport( 'small' );
		await expect( {
			selector:
				'.ast-theme-transparent-header #masthead .site-logo-img .transparent-custom-logo img',
			property: 'max-width',
		} ).cssValueToBe(
			`${ logoWidth[ 'transparent-header-logo-width' ].mobile }px`,
		);
	} );
} );
