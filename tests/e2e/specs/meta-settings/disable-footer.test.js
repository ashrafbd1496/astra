import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../utils/customize';
import { publishPost } from '../../utils/publish-post';
import { setBrowserViewport } from '../../utils/set-browser-viewport';
import { scrollToElement } from '../../utils/scroll-to-element';
import { openAstraMetaSettings } from '../../utils/open-astra-meta-setting';

describe( 'disable footer meta setting', () => {
	it( 'disabling footer should work properly', async () => {
		const astraMetaSetting = {
			'footer-desktop-items': {
				primary: {
					primary_2: {
						1: 'social-icons-1',
					},
				},
			},
		};
		await setCustomize( astraMetaSetting );
		await openAstraMetaSettings();
		//Footer disable
		await page.evaluate( () => {
			[
				...document.querySelectorAll(
					'.ast-sidebar-layout-meta-wrap .components-toggle-control__label',
				),
			]
				.find( ( element ) => element.textContent === 'Disable Footer' )
				.click();
		} );
		await publishPost();
		await page.goto( createURL( '/meta' ), {
			waitUntil: 'networkidle0',
		} );
		await setBrowserViewport( 'large' );
		await page.waitForSelector( '#secondary' );
		await scrollToElement( '#secondary' );
		const siteFooter = await page.$eval( '#secondary', ( element ) =>
			element.getAttribute( 'colophon' ),
		);
		await expect( siteFooter ).toBeNull();
	} );
} );
