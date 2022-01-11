import {
	createURL,
	createNewPost,
	publishPost,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/customize';
describe( 'breadcrumb alignment settings in the customizer', () => {
	it( 'breadcrumb center alignment should apply corectly for before title', async () => {
		const beforeTitleAlignmentCenter = {
			'breadcrumb-position': 'astra_entry_top',
			'breadcrumb-alignment': 'center',
		};
		await setCustomize( beforeTitleAlignmentCenter );
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
			`${ beforeTitleAlignmentCenter[ 'breadcrumb-alignment' ] }`,
		);
	} );
	it( 'breadcrumb left alignment should apply corectly for before title', async () => {
		const beforeTitleAlignmentLeft = {
			'breadcrumb-position': 'astra_entry_top',
			'breadcrumb-alignment': 'left',
		};
		await setCustomize( beforeTitleAlignmentLeft );
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
			`${ beforeTitleAlignmentLeft[ 'breadcrumb-alignment' ] }`,
		);
	} );
	it( 'breadcrumb alignment should apply corectly', async () => {
		const beforeTitleAlignmentRight = {
			'breadcrumb-position': 'astra_entry_top',
			'breadcrumb-alignment': 'right',
		};
		await setCustomize( beforeTitleAlignmentRight );
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
			`${ beforeTitleAlignmentRight[ 'breadcrumb-alignment' ] }`,
		);
	} );
} );
