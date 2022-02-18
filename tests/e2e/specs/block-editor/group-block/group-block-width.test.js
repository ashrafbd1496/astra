import { insertBlock, createNewPost } from '@wordpress/e2e-test-utils';
describe( 'group in gutenberg editor', () => {
	it( 'assert wide width of the group in the block editor', async () => {
		await createNewPost( {
			postType: 'post',
			title: 'test group',
		} );
		await insertBlock( 'Group' );
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
