import {
	createURL,
	createNewPost,
	publishPost,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
describe( 'breadcrumb alignment settings in the customizer', () => {
	it( 'breadcrumb center alignment should apply corectly for inside position', async () => {
		const insideAlignmentCenter = {
			'breadcrumb-position': 'astra_header_primary_container_after',
			'breadcrumb-alignment': 'center',
		};
		await setCustomize( insideAlignmentCenter );
		await createNewPost( {
			postType: 'page',
			title: 'breadcrumb',
		} );
		await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-align',
		} ).cssValueToBe(
			`${ insideAlignmentCenter[ 'breadcrumb-alignment' ] }`,
		);
	} );
	it( 'breadcrumb left alignment should apply corectly for inside position', async () => {
		const insideAlignmentLeft = {
			'breadcrumb-position': 'astra_header_primary_container_after',
			'breadcrumb-alignment': 'left',
		};
		await setCustomize( insideAlignmentLeft );
		await createNewPost( {
			postType: 'page',
			title: 'breadcrumb',
		} );
		await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-align',
		} ).cssValueToBe(
			`${ insideAlignmentLeft[ 'breadcrumb-alignment' ] }`,
		);
	} );
	it( 'breadcrumb alignment should apply corectly', async () => {
		const insideAlignmentRight = {
			'breadcrumb-position': 'astra_header_primary_container_after',
			'breadcrumb-alignment': 'right',
		};
		await setCustomize( insideAlignmentRight );
		await createNewPost( {
			postType: 'page',
			title: 'breadcrumb',
		} );
		await publishPost();
		await page.goto( createURL( '/breadcrumb' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-breadcrumbs-wrapper .breadcrumbs' );
		await expect( {
			selector: '.ast-breadcrumbs-wrapper',
			property: 'text-align',
		} ).cssValueToBe(
			`${ insideAlignmentRight[ 'breadcrumb-alignment' ] }`,
		);
	} );
} );
