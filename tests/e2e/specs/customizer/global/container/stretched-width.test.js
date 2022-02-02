import { createURL, createNewPost, publishPost, insertBlock } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
describe( 'to test content box container width in the customizer', () => {
	it( 'content boxed container width should apply correctly on post', async () => {
		const postContainerSize = {
			'site-content-width': 900,
			'site-content-layout': 'page-builder',
			'single-post-content-layout': 'page-builder',
		};
		await setCustomize( postContainerSize );
		await createNewPost( { postType: 'post', title: 'container post' } );
		await insertBlock( 'Buttons' );
		await page.keyboard.type( 'Login' );
		await publishPost();
		await page.goto( createURL( '/container-post/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-container',
		);
		postContainerSize[ 'site-content-width' ] = '940px';
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe(
			`${ postContainerSize[ 'site-content-width' ] }`,
		);
	} );

	it( 'content box container width should apply correctly on page', async () => {
		const pageContainerSize = {
			'site-content-width': 900,
			'site-content-layout': 'page-builder',
			'single-page-content-layout': 'page-builder',
		};
		await setCustomize( pageContainerSize );
		await createNewPost( { postType: 'page', title: 'container page' } );
		await insertBlock( 'Buttons' );
		await page.keyboard.type( 'Login' );
		await publishPost();
		await page.goto( createURL( '/container-page/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-container',
		);
		pageContainerSize[ 'site-content-width' ] = '940px';
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe(
			`${ pageContainerSize[ 'site-content-width' ] }`,
		);
	} );
	it( 'content box container width should apply correctly on  archive posts', async () => {
		const archiveContainerSize = {
			'site-content-width': 900,
			'site-content-layout': 'page-builder',
			'archive-post-content-layout': 'page-builder',
		};
		await setCustomize( archiveContainerSize );
		await page.goto( createURL( '/category/uncategorized' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-container',
		);
		archiveContainerSize[ 'site-content-width' ] = '940px';
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe(
			`${ archiveContainerSize[ 'site-content-width' ] }`,
		);
	} );
} );
