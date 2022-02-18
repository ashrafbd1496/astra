import { insertBlock, createNewPost } from '@wordpress/e2e-test-utils';
describe( 'list in gutenberg editor', () => {
	it( 'assert wide width of the list in the block editor', async () => {
		await createNewPost( {
			postType: 'post',
			title: 'test List',
		} );
		await insertBlock( 'List' );
		await page.keyboard.type( 'one' );
		await page.keyboard.press( 'Enter' );
		await page.keyboard.type( 'two' );
		await page.waitForSelector(
			'.editor-styles-wrapper > .block-editor-block-list__layout',
		);
		await expect( {
			selector:
				'.editor-styles-wrapper > .block-editor-block-list__layout',
			property: 'width',
		} ).cssValueToBe( `1119px` );
	} );
} );
