import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
describe( 'drag widget1 in the above header section and check it on frontend', () => {
	it( 'check whether the widget1 is dragged in the above header section', async () => {
		const dragWidget1 = {
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'widget-1',
					},
				},
			},
		};
		await setCustomize( dragWidget1 );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header-bar',
			property: 'display',
		} ).cssValueToBe( `block` );
	} );
} );
