<?php
/**
 * Astra Addon Cache
 *
 * @package     Astra
 * @author      Brainstorm Force
 * @copyright   Copyright (c) 2019, Brainstorm Force
 * @link        https://www.brainstormforce.com
 * @since       Astra x.x.x
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Astra_Cache
 */
class Astra_Cache extends Astra_Cache_Base {

	/**
	 * Member Variable
	 *
	 * @var array instance
	 */
	private static $dynamic_css_files = array();

	/**
	 * Constructor
	 *
	 * @since x.x.x
	 * @param String $cache_dir Base cache directory in the uploads directory.
	 */
	public function __construct( $cache_dir ) {
		parent::__construct( $cache_dir );
	}

	/**
	 * Create an array of all the files that needs to be merged in dynamic CSS file.
	 *
	 * @since x.x.x
	 * @param array $file file path.
	 * @return void
	 */
	public static function add_css_file( $file ) {
		self::$dynamic_css_files = array_merge( self::$dynamic_css_files, $file );
	}

	/**
	 * Fetch theme CSS data to be added in the dynamic CSS file.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function setup_cache() {
		$theme_css_data  = apply_filters( 'astra_dynamic_theme_css', '' );
		$theme_css_data .= $this->get_css_from_files( self::$dynamic_css_files );

		// Return if there is no data to add in the css file.
		if ( empty( $theme_css_data ) ) {
			return;
		}

		// Call enqueue styles function.
		$this->enqueue_styles( Astra_Enqueue_Scripts::trim_css( $theme_css_data ), 'theme' );
	}

}

new Astra_Cache( 'astra' );
