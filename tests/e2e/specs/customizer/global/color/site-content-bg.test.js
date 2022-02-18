import { setCustomize } from '../../../../utils/customize';
import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { publishPost } from '../../../../utils/publish-post';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'testing site background and content background color setting under the customizer', () => {
	it( 'site background color should apply correctly', async () => {
		const sitebgColors = {
			'site-layout-outside-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(229, 219, 219)',
				},
				tablet: {
					'background-color': 'rgb(255, 255, 255)',
				},
				mobile: {
					'background-color': 'rgb(253, 242, 242)',
				},
			},
		};
		await setCustomize( sitebgColors );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'post',
				title: 'background-color-test',
				content: 'this is the background color test',
			} );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( 'background-color-test' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-separate-container' );
		await expect( {
			selector: '.ast-separate-container',
			property: 'background-color',
		} ).cssValueToBe(
			`${ sitebgColors[ 'site-layout-outside-bg-obj-responsive' ].desktop[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-separate-container',
			property: 'background-color',
		} ).cssValueToBe(
			`${ sitebgColors[ 'site-layout-outside-bg-obj-responsive' ].tablet[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-separate-container',
			property: 'background-color',
		} ).cssValueToBe(
			`${ sitebgColors[ 'site-layout-outside-bg-obj-responsive' ].mobile[ 'background-color' ] }`,
		);
	} );

	it( 'content background color should apply correctly', async () => {
		const contentColors = {
			'content-bg-obj-responsive': {
				desktop: {
					'background-color': 'rgb(240, 255, 240)',
				},
				tablet: {
					'background-color': 'rgb(219, 242, 217)',
				},
				mobile: {
					'background-color': 'rgb(240, 255, 240)',
				},
			},
		};
		await setCustomize( contentColors );
		await page.goto( createURL( 'background-color-test' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector(
			'.ast-article-single:not(.ast-related-post)',
		);
		await expect( {
			selector: '.ast-article-single:not(.ast-related-post)',
			property: 'background-color',
		} ).cssValueToBe(
			`${ contentColors[ 'content-bg-obj-responsive' ].desktop[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-article-single:not(.ast-related-post)',
			property: 'background-color',
		} ).cssValueToBe(
			`${ contentColors[ 'content-bg-obj-responsive' ].tablet[ 'background-color' ] }`,
		);
		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-article-single:not(.ast-related-post)',
			property: 'background-color',
		} ).cssValueToBe(
			`${ contentColors[ 'content-bg-obj-responsive' ].mobile[ 'background-color' ] }`,
		);
	} );
} );
