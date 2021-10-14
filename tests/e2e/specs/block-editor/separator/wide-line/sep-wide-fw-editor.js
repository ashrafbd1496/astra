/**
 * WordPress dependencies
 */
import {
	insertBlock,
	createNewPost,
	clickBlockToolbarButton,
	openDocumentSettingsSidebar,
} from '@wordpress/e2e-test-utils';
describe( 'separator in gutenberg editor for wide line style', () => {
	it( 'test separartor in the block editor for full width alignment', async () => {
		await createNewPost( {
			postType: 'post',
			title: 'test separator',
		} );
		await insertBlock( 'Separator' );
		await openDocumentSettingsSidebar();
		await page.click( '.block-editor-block-styles__item[aria-label="Wide Line"]' );
		await clickBlockToolbarButton( 'Align' );
		await page.waitForFunction( () =>
			// eslint-disable-next-line @wordpress/no-global-active-element
			document.activeElement.classList.contains(
				'components-dropdown-menu__menu-item',
			),
		);
		await page.click( '[aria-label="Align"] button:nth-child(3)' );
		//to test width of separator
		await expect( {
			selector: '.wp-block',
			property: 'width',
		} ).cssValueToBe( '1119px' );
	} );
} );
