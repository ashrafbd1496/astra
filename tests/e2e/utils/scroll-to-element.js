/**
 * This function can be used for scrolling the scroll to a particular HTML element.
 *
 * @param {string} element - The HTML selector where you want to scroll to.
 * @return {void}
 */
export const scrollToElement = async ( element ) => {
	const selectedElement = await page.$( element );
	await page.evaluate(
		( el ) => el.scrollIntoView(),
		selectedElement,
	);
};
