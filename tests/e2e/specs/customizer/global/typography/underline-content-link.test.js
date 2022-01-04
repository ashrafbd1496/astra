import {
	createURL,
	createNewPost,
	publishPost,
	insertBlock,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
describe( 'Underline content links option under the customizer', () => {
	it( 'underline content links option should apply correctly', async () => {
		const underlineLinks = {
			'underline-content-links': 'underline',
		};

		await setCustomize( underlineLinks );
		await createNewPost( {
			postType: 'post',
			title: 'sample-post',
		} );
		await insertBlock( 'HTML' );
		await page.keyboard.type( '<a href="url">Here is the link</a>' );
		await publishPost();

		await page.goto( createURL( '/sample-post' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-single-post .entry-content a' );
		await expect( {
			selector: '.ast-single-post .entry-content a',
			property: 'text-decoration-line',
		} ).cssValueToBe( `${ underlineLinks[ 'underline-content-links' ] }` );
	} );
} );
