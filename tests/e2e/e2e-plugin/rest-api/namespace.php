<?php
/**
 * Rest routes used for e2e tests.
 *
 * @package Astra.
 */

namespace Astra\E2E\REST;

use WP_Rest_Server;
use WP_Rest_Request;

const REST_NAMESPACE = 'astra/v1';
const REST_BASE      = 'e2e-utils';

/**
 * Bootstrap the plugin.
 *
 * @return void
 */
function bootstrap() : void {
	add_action( 'rest_api_init', __NAMESPACE__ . '\\rest_route' );
}

/**
 * Register rest routes.
 *
 * @return void
 */
function rest_route() : void {
	register_rest_route(
		REST_NAMESPACE,
		REST_BASE . '/reset-site',
		array(
			array(
				'methods'             => WP_Rest_Server::DELETABLE,
				'callback'            => function () {
					delete_option( 'astra-settings' );
					remove_theme_mod( 'custom_logo' );
					delete_option( 'site_title' );
					delete_option( 'site_icon' );
					update_option( 'blogdescription', 'Astra Test Enviornment' );

					$all_users = get_users();
					require_once ABSPATH . 'wp-admin/includes/user.php';
					foreach ( $all_users as $user ) {
						if ( 1 === (int) $user->data->ID ) {
							continue;
						}
						wp_delete_user( $user->data->ID );
					}

					return rest_ensure_response(
						array(
							'success' => true,
						)
					);
				},
				'permission_callback' => '__return_true',
			),
		)
	);

	register_rest_route(
		REST_NAMESPACE,
		REST_BASE . '/set-astra-settings',
		array(
			array(
				'methods'             => WP_Rest_Server::CREATABLE,
				'callback'            => function ( WP_Rest_Request $response ) {
					$current_options = get_option( 'astra-settings', array() );
					update_option( 'astra-settings', array_merge( $current_options, $response['settings'] ) );

					return rest_ensure_response(
						array(
							'success' => true,
						)
					);
				},
				'permission_callback' => '__return_true',
				'args'                => array(
					'settings' => array(
						'default'  => array(),
						'required' => true,
					),
				),
			),
		)
	);

	register_rest_route(
		REST_NAMESPACE,
		REST_BASE . '/get-astra-settings',
		array(
			array(
				'methods'             => WP_Rest_Server::READABLE,
				'callback'            => function ( WP_Rest_Request $response ) {
					return rest_ensure_response(
						array(
							'success'  => true,
							'settings' => astra_get_option( $response['key'] ),
						)
					);
				},
				'permission_callback' => '__return_true',
				'args'                => array(
					'key' => array(
						'default'           => '',
						'required'          => true,
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			),
		)
	);

	register_rest_route(
		REST_NAMESPACE,
		REST_BASE . '/upload-astra-image',
		array(
			array(
				'methods'             => WP_Rest_Server::CREATABLE,
				'callback'            => function ( WP_Rest_Request $response ) {

					$filename = $response['settings']['fileName'];
					$uploaddir = wp_upload_dir();
					$uploadfile = $uploaddir['path'] . '/' . $filename;

					$contents = file_get_contents( $response['settings']['fileURL'] ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
					$savefile = fopen( $uploadfile, 'w' ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fopen
					fwrite( $savefile, $contents ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fwrite
					fclose( $savefile ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fclose

					$wp_filetype = wp_check_filetype( basename( $filename ), null );

					$attachment = array(
						'post_mime_type' => $wp_filetype['type'],
						'post_title'     => $filename,
						'post_content'   => '',
						'post_status'    => 'inherit',
					);

					$attach_id = wp_insert_attachment( $attachment, $uploadfile );

					if ( isset( $response['settings']['returnURL'] ) && true === $response['settings']['returnURL'] ) {
						return rest_ensure_response(
							array(
								'success'       => true,
								'attachedMedia' => wp_get_attachment_image_url( $attach_id ),
							)
						);
					}

					return rest_ensure_response(
						array(
							'success'       => true,
							'attachedMedia' => $attach_id,
						)
					);
				},
				'permission_callback' => '__return_true',
				'args'                => array(
					'settings' => array(
						'default'  => array(),
						'required' => true,
					),
				),
			),
		)
	);

	register_rest_route(
		REST_NAMESPACE,
		REST_BASE . '/set-astra-logo',
		array(
			array(
				'methods'             => WP_Rest_Server::CREATABLE,
				'callback'            => function ( WP_Rest_Request $response ) {

					$current_options = get_option( 'theme_mods_astra', array() );
					$current_options['custom_logo'] = $response['fileId'];
					update_option( 'theme_mods_astra', $current_options );
					return rest_ensure_response(
						array(
							'success' => true,
						)
					);

				},
				'permission_callback' => '__return_true',
				'args'                => array(
					'fileId' => array(
						'default'  => '',
						'required' => true,
					),
				),
			),
		)
	);
}
