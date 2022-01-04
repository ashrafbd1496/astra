import { createNewPost } from '@wordpress/e2e-test-utils';

export const openAstraMetaSettings = async () => {
	await createNewPost( {
		postType: 'page',
		title: 'meta',
		content: 'Test Meta Settings',
	} );
	await page.waitForSelector(
		'.interface-pinned-items .components-button:not(:first-child)',
	);
	await page.click(
		'.interface-pinned-items .components-button:not(:first-child)',
	);
};
