/**
 * Internal dependencies
 */
import { waitForWindowDimensions } from '@wordpress/e2e-test-utils';

/**
 * Named viewport options.
 *
 * @typedef {"large"|"medium"|"small"} WPDimensionsName
 */

/**
 * Viewport dimensions object.
 *
 * @typedef {Object} WPViewportDimensions
 * @property {number} width  Width, in pixels.
 * @property {number} height Height, in pixels.
 */

/**
 * Predefined viewport dimensions to reference by name.
 *
 * @enum {WPViewportDimensions}
 * @type {Object<WPDimensionsName,WPViewportDimensions>}
 */
export const PREDEFINED_DIMENSIONS = {
	large: { width: 960, height: 700 },
	medium: { width: 920, height: 700 },
	small: { width: 540, height: 700 },
};

/**
 * Valid argument argument type from which to derive viewport dimensions.
 *
 * @typedef {WPDimensionsName|WPViewportDimensions} WPViewport
 */

/**
 * Sets browser viewport to specified type.
 *
 * @param {WPViewport} viewport Viewport name or dimensions object to assign.
 */
export async function setBrowserViewport( viewport ) {
	const dimensions =
		typeof viewport === 'string'
			? PREDEFINED_DIMENSIONS[ viewport ]
			: viewport;

	await page.setViewport( dimensions );
	await waitForWindowDimensions( dimensions.width, dimensions.height );
}
