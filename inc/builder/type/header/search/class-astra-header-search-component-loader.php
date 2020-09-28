<?php
/**
 * Search Styling Loader for Astra theme.
 *
 * @package     astra-builder
 * @author      Astra
 * @copyright   Copyright (c) 2020, Astra
 * @link        https://wpastra.com/
 * @since x.x.x
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Customizer Initialization
 *
 * @since x.x.x
 */
class Astra_Header_Search_Component_Loader {

	/**
	 * Constructor
	 *
	 * @since x.x.x
	 */
	public function __construct() {

		add_filter( 'astra_get_search', array( $this, 'get_search_markup' ), 10, 2 );
		add_action( 'customize_preview_init', array( $this, 'preview_scripts' ), 110 );
	}

	/**
	 * Customizer Preview
	 *
	 * @since x.x.x
	 */
	public function preview_scripts() {
		/**
		 * Load unminified if SCRIPT_DEBUG is true.
		 */
		/* Directory and Extension */
		$dir_name    = ( SCRIPT_DEBUG ) ? 'unminified' : 'minified';
		$file_prefix = ( SCRIPT_DEBUG ) ? '' : '.min';
		wp_enqueue_script( 'astra-header-builder-search-customizer-preview-js', ASTRA_HEADER_SEARCH_URI . '/assets/js/customizer-preview.js', array( 'customize-preview', 'astra-customizer-preview-js' ), ASTRA_THEME_VERSION, true );

		// Localize variables for Astra Breakpoints JS.
		wp_localize_script(
			'astra-header-builder-search-customizer-preview-js',
			'astraBuilderPreview',
			array(
				'tablet_break_point' => astra_get_tablet_breakpoint(),
				'mobile_break_point' => astra_get_mobile_breakpoint(),
			)
		);
	}

	/**
	 * Adding Wrapper for Search Form.
	 *
	 * @since x.x.x
	 *
	 * @param string $search_markup   Search Form Content.
	 * @param string $option    Search Form Options.
	 * @return Search HTML structure created.
	 */
	public static function get_search_markup( $search_markup, $option = '' ) {

		if ( is_customize_preview() ) {
			Astra_Builder_UI_Controller::render_customizer_edit_button();
		}

		return $search_markup;
	}
}

/**
*  Kicking this off by creating the object of the class.
*/
new Astra_Header_Search_Component_Loader();
