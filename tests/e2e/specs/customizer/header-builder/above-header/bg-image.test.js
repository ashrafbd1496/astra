import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/customize';
import { setBrowserViewport } from '../../../../utils/set-browser-viewport';
describe( 'Above header background image setting in customizer', () => {
	it( 'background image should apply correctly', async () => {
		const aboveHeaderBgImage = {
			'header-desktop-items': {
				above: {
					above_left: {
						0: 'widget-1',
					},
				},
			},
			'header-mobile-items': {
				above: {
					above_left: {
						0: 'social-icons-1',
					},
				},
			},
			'hba-header-bg-obj-responsive': {
				desktop: {
					'background-image':
						'https://images.ctfassets.net/hrltx12pl8hq/4CH9hYoMSORDuL8BXgX0Br/c2520603e3d2616468161c38519c9446/shutterstock_631575830.jpg?fit=fill&w=2560&h=400&fm=webp',

					'background-repeat': 'no-repeat',
					'background-position': 'left top',
					'background-size': 'cover',
					'background-attachment': 'fixed',
					'background-type': 'image',
				},
				tablet: {
					'background-image':
						'https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-Color-Backgrounds-For-Desktop.jpg',

					'background-repeat': 'no-repeat',
					'background-position': 'left top',
					'background-size': 'cover',
					'background-attachment': 'fixed',
					'background-type': 'image',
				},
				mobile: {
					'background-image':
						'https://image.freepik.com/free-vector/festive-blurred-lights_53876-89102.jpg',

					'background-repeat': 'no-repeat',
					'background-position': 'right top',
					'background-size': 'cover',
					'background-attachment]': 'fixed',
					'background-type': 'image',
				},
			},
		};
		await setCustomize( aboveHeaderBgImage );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'background-image',
		} ).cssValueToBe(
			`url("${
				aboveHeaderBgImage[ 'hba-header-bg-obj-responsive' ].desktop[
					'background-image'
				] + '")'
			}`,
		);

		await setBrowserViewport( 'medium' );
		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'background-image',
		} ).cssValueToBe(
			`url("${
				aboveHeaderBgImage[ 'hba-header-bg-obj-responsive' ].tablet[
					'background-image'
				] + '")'
			}`,
		);

		await setBrowserViewport( 'small' );
		await page.waitForSelector( '.ast-above-header.ast-above-header-bar' );
		await expect( {
			selector: '.ast-above-header.ast-above-header-bar',
			property: 'background-image',
		} ).cssValueToBe(
			`url("${
				aboveHeaderBgImage[ 'hba-header-bg-obj-responsive' ].mobile[
					'background-image'
				] + '")'
			}`,
		);
	} );
} );
