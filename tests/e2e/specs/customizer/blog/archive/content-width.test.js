import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { publishPost } from '../../../../utils/publish-post';
import { setCustomize } from '../../../../utils/customize';
describe( 'custom content width setting for blog/Archive in customizer', () => {
	it( 'width should apply correctly', async () => {
		const blogWidth = {
			'blog-width': 'custom',
			'blog-max-width': 669,
		};
		await setCustomize( blogWidth );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'post',
				title: 'blog',
			} );
			await page.waitForTimeout( 10000 );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( '/author/admin' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '#content > div' );
		await expect( {
			selector: '#content > div',
			property: 'max-width',
		} ).cssValueToBe( `${ blogWidth[ 'blog-max-width' ] }` + 'px' );
	} );
	it( 'default content width setting for blog/Archive in customizer', async () => {
		const blogWidth = {
			'blog-width': 'default',
			'blog-max-width': 1240,
		};
		await setCustomize( blogWidth );
		await page.goto( createURL( '/author/admin' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-container' );
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe( `${ blogWidth[ 'blog-max-width' ] }` + 'px' );
	} );
} );
