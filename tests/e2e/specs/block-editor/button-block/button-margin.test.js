import { insertBlock, createNewPost, pressKeyWithModifier } from '@wordpress/e2e-test-utils';
describe( 'Button in gutenberg editor', () => {
	it( 'assert margin of the button in the block editor', async () => {
		await createNewPost( {
			postType: 'post',
			title: 'test Gutenberg button',
		} );
		await insertBlock( 'Buttons' );
		await page.keyboard.type( 'Login' );
		await pressKeyWithModifier( 'primary', 'k' );
		await page.waitForFunction(
			() => !! document.activeElement.closest( '.block-editor-url-input' ),
		);
		await page.keyboard.type( 'https://google.com' );
		await page.keyboard.press( 'Enter' );
		await page.waitForSelector( '.edit-post-visual-editor .block-editor-block-list__block' );
		await expect( {
			selector: '.wp-block-buttons',
			property: 'margin',
		} ).cssValueToBe( `0px` );
	} );
} );
