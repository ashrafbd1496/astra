import { createURL, createNewPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
import { publishPost } from '../../../utils/publish-post';
describe( 'breadcrumb alignment settings in the customizer', () => {
	it( 'breadcrumb center alignment should apply corectly for after header', async () => {
		const afterAlignmentCenter = {
			'breadcrumb-position': 'astra_header_after',
			'breadcrumb-alignment': 'center',
		};
		await setCustomize( afterAlignmentCenter );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'page',
				title: 'breadcrumb',
			} );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-align',
		} ).cssValueToBe(
			`${ afterAlignmentCenter[ 'breadcrumb-alignment' ] }`,
		);
	} );
	it( 'breadcrumb left alignment should apply corectly for after header', async () => {
		const aftereAlignmentleft = {
			'breadcrumb-position': 'astra_header_after',
			'breadcrumb-alignment': 'left',
		};
		await setCustomize( aftereAlignmentleft );

		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'page',
				title: 'breadcrumb',
			} );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-align',
		} ).cssValueToBe(
			`${ aftereAlignmentleft[ 'breadcrumb-alignment' ] }`,
		);
	} );
	it( 'breadcrumb alignment should apply corectly', async () => {
		const afterAlignmentRight = {
			'breadcrumb-position': 'astra_header_after',
			'breadcrumb-alignment': 'right',
		};
		await setCustomize( afterAlignmentRight );
		let ppStatus = false;
		while ( false === ppStatus ) {
			await createNewPost( {
				postType: 'page',
				title: 'breadcrumb',
			} );
			ppStatus = await publishPost();
		}
		// await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-align',
		} ).cssValueToBe(
			`${ afterAlignmentRight[ 'breadcrumb-alignment' ] }`,
		);
	} );
} );
