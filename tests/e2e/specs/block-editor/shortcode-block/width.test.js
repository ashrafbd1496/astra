import { insertBlock, createNewPost } from '@wordpress/e2e-test-utils';
describe( 'Shortcode in gutenberg editor', () => {
	it( 'assert default width of the shortcode in the block editor', async () => {
		await createNewPost( { postType: 'post', title: 'test Shortcode' } );
		await page.click( '[aria-label="Settings"]' );
		await insertBlock( 'Shortcode' );
		await page.waitForSelector( '.wp-block-shortcode' );
		await expect( {
			selector: '.wp-block-shortcode',
			property: 'width',
		} ).cssValueToBe( `910px` );
	} );
} );
