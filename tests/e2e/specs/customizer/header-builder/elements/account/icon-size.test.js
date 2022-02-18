import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../../utils/customize';
import { setBrowserViewport } from '../../../../../utils/set-browser-viewport';

describe( 'account icon in the customizer', () => {
	it( 'account icon size for desktop should apply correctly', async () => {
		const accountIconSize = {
			'header-account-icon-size': {
				desktop: 17,
			},
			'header-account-login-link': {
				url: '#',
				new_tab: false,
				link_rel: '',
			},
			'header-desktop-items': {
				primary: {
					primary_center: {
						0: 'account',
					},
				},
			},
		};
		await setCustomize( accountIconSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-header-account-wrap .account-icon' );
		await expect( {
			selector: '.ast-header-account-wrap .account-icon',
			property: 'width',
		} ).cssValueToBe(
			`${ accountIconSize[ 'header-account-icon-size' ].desktop }px`,
		);

		await expect( {
			selector: '.ast-header-account-wrap .account-icon',
			property: 'height',
		} ).cssValueToBe(
			`${ accountIconSize[ 'header-account-icon-size' ].desktop }px`,
		);
	} );

	it( 'account icon size for tablet should apply correctly', async () => {
		const accountIconSize = {
			'header-account-icon-size': {
				tablet: 20,
			},
			'header-account-login-link': {
				url: '#',
				new_tab: false,
				link_rel: '',
			},
			'header-mobile-items': {
				primary: {
					primary_center: {
						0: 'account',
					},
				},
			},
		};
		await setCustomize( accountIconSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-header-account-wrap .account-icon' );

		await setBrowserViewport( 'medium' );
		await expect( {
			selector: '.ast-header-account-wrap .account-icon',
			property: 'width',
		} ).cssValueToBe(
			`${ accountIconSize[ 'header-account-icon-size' ].tablet }px`,
		);

		await expect( {
			selector: '.ast-header-account-wrap .account-icon',
			property: 'height',
		} ).cssValueToBe(
			`${ accountIconSize[ 'header-account-icon-size' ].tablet }px`,
		);
	} );

	it( 'account icon size for mobile should apply correctly', async () => {
		const accountIconSize = {
			'header-account-icon-size': {
				mobile: 23,
			},
			'header-account-login-link': {
				url: '#',
				new_tab: false,
				link_rel: '',
			},
			'header-mobile-items': {
				primary: {
					primary_center: {
						0: 'account',
					},
				},
			},
		};
		await setCustomize( accountIconSize );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-header-account-wrap .account-icon' );

		await setBrowserViewport( 'small' );
		await expect( {
			selector: '.ast-header-account-wrap .account-icon',
			property: 'width',
		} ).cssValueToBe(
			`${ accountIconSize[ 'header-account-icon-size' ].mobile }px`,
		);

		await expect( {
			selector: '.ast-header-account-wrap .account-icon',
			property: 'height',
		} ).cssValueToBe(
			`${ accountIconSize[ 'header-account-icon-size' ].mobile }px`,
		);
	} );
} );
