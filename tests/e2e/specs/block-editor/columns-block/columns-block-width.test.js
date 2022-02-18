import {
	insertBlock,
	createNewPost,
	closeGlobalBlockInserter,
} from '@wordpress/e2e-test-utils';
describe( 'columns in gutenberg editor', () => {
	it( 'assert wide width of the columns in the block editor', async () => {
		await createNewPost( {
			postType: 'post',
			title: 'test Columns',
		} );
		await insertBlock( 'Columns' );
		await closeGlobalBlockInserter();
		await page.click( '[aria-label="Two columns; equal split"]' );
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
