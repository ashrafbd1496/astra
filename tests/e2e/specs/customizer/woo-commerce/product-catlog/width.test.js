import {
	createURL,
} from '@wordpress/e2e-test-utils';

import { setCustomize } from '../../../../utils/customize';
import { productpage } from '../../../../utils/product-pages';
describe( 'setting shop archive width from customizer', () => {
	it( 'default width for shop archive should apply', async () => {
		const shopArchiveWidth = {
			'shop-archive-width': 'custom',
			'shop-archive-max-width': 500,
		};
		await setCustomize( shopArchiveWidth );
		await productpage();
		await page.goto( createURL( 'shop' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-woo-shop-archive .site-content > .ast-container' );
		await expect( {
			selector: '.ast-woo-shop-archive .site-content > .ast-container',
			property: 'max-width',
		} ).cssValueToBe(
			`${ shopArchiveWidth[ 'shop-archive-max-width' ] + 'px' }`,
		);
	} );
} );
