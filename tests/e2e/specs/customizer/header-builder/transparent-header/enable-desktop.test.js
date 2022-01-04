import { createNewPost, createURL, publishPost, setBrowserViewport } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
describe( 'transparent header enable setting in the customizer', () => {
	it( 'transparent header should be enabled on desktop', async () => {
		const transparentHeaderEnable = {
			'transparent-header-enable': 1,
			'transparent-header-on-devices': 'desktop',
		};
		await setCustomize( transparentHeaderEnable );
		await createNewPost( { postType: 'page', title: 'transparent page' } );
		await publishPost();
		await page.goto( createURL( '/transparent page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-theme-transparent-header #masthead',
		);
		await expect( {
			selector: '.ast-theme-transparent-header #masthead',
			property: 'position',
		} ).cssValueToBe( `absolute` );
	} );
	it( 'transparent header should be enabled on mobile', async () => {
		const transparentHeaderEnable = {
			'transparent-header-enable': 1,
			'transparent-header-on-devices': 'mobile',
		};
		await setCustomize( transparentHeaderEnable );
		await page.goto( createURL( '/transparent page' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'medium' );
		await page.waitForSelector(
			'.ast-theme-transparent-header #masthead',
		);
		await expect( {
			selector: '.ast-theme-transparent-header #masthead',
			property: 'position',
		} ).cssValueToBe( `absolute` );
	} );
	it( 'transparent header should be enabled on desktop + mobile', async () => {
		const transparentHeaderEnable = {
			'transparent-header-enable': 1,
			'transparent-header-on-devices': 'both',
		};
		await setCustomize( transparentHeaderEnable );
		await page.goto( createURL( '/transparent page' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'small' );
		await page.waitForSelector(
			'.ast-theme-transparent-header #masthead',
		);
		await expect( {
			selector: '.ast-theme-transparent-header #masthead',
			property: 'position',
		} ).cssValueToBe( `absolute` );
	} );
} );
