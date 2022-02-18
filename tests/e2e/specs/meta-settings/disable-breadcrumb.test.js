import { createURL } from '@wordpress/e2e-test-utils';
import { publishPost } from '../../utils/publish-post';
import { openAstraMetaSettings } from '../../utils/open-astra-meta-setting';
import { setCustomize } from '../../utils/customize';
describe( 'astra meta setting', () => {
	it( 'sidebar, content layout and breadcrumb disable setting', async () => {
		const breadcrumbSetting = {
			'breadcrumb-position': 'astra_header_after',
		};
		let result = null;
		await setCustomize( breadcrumbSetting );
		// Check if the breadcrumb is enabled or not.
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await openAstraMetaSettings();
		//breadcrumb disabled
		await page.evaluate( () => {
			[
				...document.querySelectorAll(
					'.ast-sidebar-layout-meta-wrap .components-toggle-control__label',
				),
			]
				.find(
					( element ) => element.textContent === 'Disable Breadcrumb',
				)
				.click();
		} );
		await publishPost();
		await page.goto( createURL( 'meta' ), {
			waitUntil: 'networkidle0',
		} );
		const breadcrumb = await page.evaluate( () => {
			// Converts to boolean value.
			return !! document.querySelector( '.ast-breadcrumbs-wrapper' );
		} );
		if ( breadcrumb ) {
			result = null;
		}
		await expect( result ).toBeNull();
	} );
} );
