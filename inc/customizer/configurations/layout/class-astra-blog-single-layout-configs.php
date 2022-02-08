<?php
/**
 * Bottom Footer Options for Astra Theme.
 *
 * @package     Astra
 * @author      Astra
 * @copyright   Copyright (c) 2020, Astra
 * @link        https://wpastra.com/
 * @since       Astra 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Astra_Blog_Single_Layout_Configs' ) ) {

	/**
	 * Register Blog Single Layout Configurations.
	 */
	class Astra_Blog_Single_Layout_Configs extends Astra_Customizer_Config_Base {

		/**
		 * Register Blog Single Layout Configurations.
		 *
		 * @param Array                $configurations Astra Customizer Configurations.
		 * @param WP_Customize_Manager $wp_customize instance of WP_Customize_Manager.
		 * @since 1.4.3
		 * @return Array Astra Customizer Configurations with updated configurations.
		 */
		public function register_configuration( $configurations, $wp_customize ) {

			$_configs = array(

				/**
				 * Option: Single Post Content Width
				 */
				array(
					'name'       => ASTRA_THEME_SETTINGS . '[blog-single-width]',
					'type'       => 'control',
					'control'    => 'ast-selector',
					'section'    => 'section-blog-single',
					'default'    => astra_get_option( 'blog-single-width' ),
					'priority'   => 5,
					'title'      => __( 'Content Width', 'astra' ),
					'choices'    => array(
						'default' => __( 'Default', 'astra' ),
						'custom'  => __( 'Custom', 'astra' ),
					),
					'transport'  => 'postMessage',
					'responsive' => false,
					'renderAs'   => 'text',
				),

				/**
				 * Option: Enter Width
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[blog-single-max-width]',
					'type'        => 'control',
					'control'     => 'ast-slider',
					'section'     => 'section-blog-single',
					'transport'   => 'postMessage',
					'default'     => astra_get_option( 'blog-single-max-width' ),
					'context'     => array(
						Astra_Builder_Helper::$general_tab_config,
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[blog-single-width]',
							'operator' => '===',
							'value'    => 'custom',
						),
					),
					'priority'    => 5,
					'title'       => __( 'Custom Width', 'astra' ),
					'suffix'      => 'px',
					'input_attrs' => array(
						'min'  => 768,
						'step' => 1,
						'max'  => 1920,
					),
					'divider'     => array( 'ast_class' => 'ast-bottom-divider' ),
				),

				/**
				 * Header Clone Component Track.
				 */
				array(
					'name'      => ASTRA_THEME_SETTINGS . '[nested-index-clonned-track]',
					'section'   => 'section-blog-single',
					'type'      => 'control',
					'control'   => 'ast-hidden',
					'priority'  => 2,
					'transport' => 'postMessage',
					'partial'   => false,
					'default'   => astra_get_option( 'nested-index-clonned-track', 1 ),
				),

				/**
				 * Option: Display Post Structure
				 */
				array(
					'name'              => ASTRA_THEME_SETTINGS . '[blog-single-post-structure]',
					'type'              => 'control',
					'control'           => 'ast-sortable',
					'sanitize_callback' => array( 'Astra_Customizer_Sanitizes', 'sanitize_multi_choices' ),
					'section'           => 'section-blog-single',
					'default'           => astra_get_option( 'blog-single-post-structure' ),
					'priority'          => 5,
					'title'             => __( 'Structure', 'astra' ),
					'choices'           => array(
						'single-image'      => __( 'Featured Image', 'astra' ),
						'single-title-meta' => __( 'Title & Blog Meta', 'astra' ),
						// 'nested-index' => __( 'Title & Blog Meta', 'astra' ),
						'nested-index' 		=> array(
							'clone' => true,
							'is_parent' => true,
							'clone-counter' => ASTRA_THEME_SETTINGS . '[nested-index-clonned-track]',
							'title' => __( 'Custom Sortable', 'astra' ),
							'fields' => array(
								'dummy-sortable-color-subcontrol-one',
								'dummy-sortable-color-subcontrol-two',
							)
						),
					),
				),

				// Option: Dummy control 1.
				array(
					'name'      => 'dummy-sortable-color-subcontrol-one',
					'parent'    => ASTRA_THEME_SETTINGS . '[blog-single-post-structure]',
					'default'   => astra_get_option( 'dummy-sortable-color-subcontrol-one' ),
					'type'     => 'sub-control',
					'control'  => 'ast-select',
					'section'   => 'section-blog-single',
					'priority' => 10,
					'linked'	=> 'nested-index',
					'title'    => __( 'Select', 'astra' ),
					'choices'  => array(
						'default' => __( 'Default', 'astra' ),
						'opt1'    => __( 'Option 1', 'astra' ),
						'opt2'  => __( 'Option 2', 'astra' ),
						'opt3' => __( 'Option 3', 'astra' ),
					),
				),

				// Option: Dummy control 2.
				array(
					'name'      => 'dummy-sortable-color-subcontrol-two',
					'parent'    => ASTRA_THEME_SETTINGS . '[blog-single-post-structure]',
					'default'   => astra_get_option( 'dummy-sortable-color-subcontrol-two' ),
					'linked'	=> 'nested-index',
					'type'       => 'sub-control',
					'control'    => 'ast-selector',
					'section'    => 'section-blog-single',
					'priority'   => 5,
					'title'      => __( 'Type', 'astra' ),
					'choices'    => array(
						'default' => __( 'Default', 'astra' ),
						'custom'  => __( 'Custom', 'astra' ),
					),
					'transport'  => 'postMessage',
					'responsive' => false,
					'renderAs'   => 'text',
				),
			);

			if ( ! defined( 'ASTRA_EXT_VER' ) ) {
				$_configs[] = array(
					'name'              => ASTRA_THEME_SETTINGS . '[blog-single-meta]',
					'type'              => 'control',
					'control'           => 'ast-sortable',
					'sanitize_callback' => array( 'Astra_Customizer_Sanitizes', 'sanitize_multi_choices' ),
					'default'           => astra_get_option( 'blog-single-meta' ),
					'context'           => array(
						Astra_Builder_Helper::$general_tab_config,
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[blog-single-post-structure]',
							'operator' => 'contains',
							'value'    => 'single-title-meta',
						),
					),
					'divider'           => array( 'ast_class' => 'ast-bottom-divider' ),
					'section'           => 'section-blog-single',
					'priority'          => 5,
					'title'             => __( 'Meta', 'astra' ),
					'choices'           => array(
						'comments' => __( 'Comments', 'astra' ),
						'category' => __( 'Category', 'astra' ),
						'author'   => __( 'Author', 'astra' ),
						'date'     => __( 'Publish Date', 'astra' ),
						'tag'      => __( 'Tag', 'astra' ),
					),
				);
			}

			if ( true === Astra_Builder_Helper::$is_header_footer_builder_active ) {

				$_configs[] = array(
					'name'        => 'section-blog-single-ast-context-tabs',
					'section'     => 'section-blog-single',
					'type'        => 'control',
					'control'     => 'ast-builder-header-control',
					'priority'    => 0,
					'description' => '',
				);

			}

			$configurations = array_merge( $configurations, $_configs );

			return $configurations;

		}
	}
}


new Astra_Blog_Single_Layout_Configs();
