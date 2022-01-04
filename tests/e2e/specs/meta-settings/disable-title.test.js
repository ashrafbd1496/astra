import { createURL,
	publishPost,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../utils/customize';
import { openAstraMetaSettings } from '../../utils/open-astra-meta-setting';

describe( 'site layout meta setting', () => {
	it( 'site layout meta setting', async () => {
		const astraMetaSetting = {
			'site-post-title': 'disabled',
		};
		await setCustomize( astraMetaSetting );
		await openAstraMetaSettings();
		//title disable
		await page.evaluate( () => {
			[ ...document.querySelectorAll( '.ast-sidebar-layout-meta-wrap .components-toggle-control__label' ) ].find( ( element ) => element.textContent === 'Disable Title' ).click();
		} );
		await publishPost();
		await page.goto( createURL( '/meta' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.page .entry-header' );
		const disableTitle = await page.$eval( '.page .entry-header', ( element ) => element.getAttribute( 'entry-title' ) );
		await expect( disableTitle ).toBeNull( );
	} );
} );
