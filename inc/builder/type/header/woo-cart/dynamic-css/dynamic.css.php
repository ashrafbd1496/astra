<?php
/**
 * WooCommerce Cart - Dynamic CSS
 *
 * @package Astra
 * @since 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
* Search
*/
add_filter( 'astra_dynamic_theme_css', 'astra_hb_woo_cart_dynamic_css' );

/**
 * Dynamic CSS
 *
 * @param  string $dynamic_css          Astra Dynamic CSS.
 * @param  string $dynamic_css_filtered Astra Dynamic CSS Filters.
 * @return String Generated dynamic CSS for Search.
 *
 * @since 3.0.0
 */
function astra_hb_woo_cart_dynamic_css( $dynamic_css, $dynamic_css_filtered = '' ) {

	if ( ! Astra_Builder_Helper::is_component_loaded( 'woo-cart', 'header' ) ) {
		return $dynamic_css;
	}

	$selector              = '.ast-site-header-cart';
	$trans_header_selector = '.ast-theme-transparent-header .ast-site-header-cart';
	$theme_color           = astra_get_option( 'theme-color' );
	$icon_color            = esc_attr( astra_get_option( 'header-woo-cart-icon-color', $theme_color ) );
	$icon_hover_color      = esc_attr( astra_get_option( 'header-woo-cart-icon-hover-color', $theme_color ) ); // icon cart hover color.

	$header_cart_icon_radius = astra_get_option( 'woo-header-cart-icon-radius' );
	$cart_h_color            = astra_get_foreground_color( $icon_color );
	$header_cart_icon_style  = astra_get_option( 'woo-header-cart-icon-style' );
	$theme_h_color           = astra_get_foreground_color( $theme_color );

	$transparent_header_icon_color   = esc_attr( astra_get_option( 'transparent-header-woo-cart-icon-color', $icon_color ) );
	$transparent_header_cart_h_color = astra_get_foreground_color( $transparent_header_icon_color );

	if ( 'none' === $header_cart_icon_style ) {
		$icon_color                    = $theme_color;
		$transparent_header_icon_color = $theme_color;
	}

	/**
	* - WooCommerce cart styles.
	*/
	$cart_text_color        = astra_get_option( 'header-woo-cart-text-color' );
	$cart_link_color        = astra_get_option( 'header-woo-cart-link-color' );
	$cart_bg_color          = astra_get_option( 'header-woo-cart-background-color' );
	$cart_h_bg_color        = astra_get_option( 'header-woo-cart-background-hover-color' );
	$cart_separator_color   = astra_get_option( 'header-woo-cart-separator-color' );
	$cart_h_link_color      = astra_get_option( 'header-woo-cart-link-hover-color' );
	$cart_button_text_color = astra_get_option( 'header-woo-cart-btn-text-color' );
	$cart_icon_size         = astra_get_option( 'header-woo-cart-icon-size' );

	$cart_button_bg_color     = astra_get_option( 'header-woo-cart-btn-background-color' );
	$cart_button_text_h_color = astra_get_option( 'header-woo-cart-btn-text-hover-color' );
	$cart_button_bg_h_color   = astra_get_option( 'header-woo-cart-btn-bg-hover-color' );

	$checkout_button_text_color   = astra_get_option( 'header-woo-checkout-btn-text-color' );
	$checkout_button_bg_color     = astra_get_option( 'header-woo-checkout-btn-background-color' );
	$checkout_button_text_h_color = astra_get_option( 'header-woo-checkout-btn-text-hover-color' );
	$checkout_button_bg_h_color   = astra_get_option( 'header-woo-checkout-btn-bg-hover-color' );
	$cart_total_label_position    = astra_get_option( 'woo-header-cart-icon-total-label-position' );

	$header_cart_icon = '';

	$cart_text_color_desktop = ( ! empty( $cart_text_color['desktop'] ) ) ? $cart_text_color['desktop'] : '';
	$cart_text_color_mobile  = ( ! empty( $cart_text_color['mobile'] ) ) ? $cart_text_color['mobile'] : '';
	$cart_text_color_tablet  = ( ! empty( $cart_text_color['tablet'] ) ) ? $cart_text_color['tablet'] : '';

	$cart_bg_color_desktop = ( ! empty( $cart_bg_color['desktop'] ) ) ? $cart_bg_color['desktop'] : '';
	$cart_bg_color_mobile  = ( ! empty( $cart_bg_color['mobile'] ) ) ? $cart_bg_color['mobile'] : '';
	$cart_bg_color_tablet  = ( ! empty( $cart_bg_color['tablet'] ) ) ? $cart_bg_color['tablet'] : '';

	$cart_h_bg_color_desktop = ( ! empty( $cart_h_bg_color['desktop'] ) ) ? $cart_h_bg_color['desktop'] : '';
	$cart_h_bg_color_mobile  = ( ! empty( $cart_h_bg_color['mobile'] ) ) ? $cart_h_bg_color['mobile'] : '';
	$cart_h_bg_color_tablet  = ( ! empty( $cart_h_bg_color['tablet'] ) ) ? $cart_h_bg_color['tablet'] : '';

	$cart_link_color_desktop = ( ! empty( $cart_link_color['desktop'] ) ) ? $cart_link_color['desktop'] : '';
	$cart_link_color_mobile  = ( ! empty( $cart_link_color['mobile'] ) ) ? $cart_link_color['mobile'] : '';
	$cart_link_color_tablet  = ( ! empty( $cart_link_color['tablet'] ) ) ? $cart_link_color['tablet'] : '';

	$cart_separator_color_desktop = ( ! empty( $cart_separator_color['desktop'] ) ) ? $cart_separator_color['desktop'] : '';
	$cart_separator_color_mobile  = ( ! empty( $cart_separator_color['mobile'] ) ) ? $cart_separator_color['mobile'] : '';
	$cart_separator_color_tablet  = ( ! empty( $cart_separator_color['tablet'] ) ) ? $cart_separator_color['tablet'] : '';

	$cart_h_link_color_desktop = ( ! empty( $cart_h_link_color['desktop'] ) ) ? $cart_h_link_color['desktop'] : '';
	$cart_h_link_color_mobile  = ( ! empty( $cart_h_link_color['mobile'] ) ) ? $cart_h_link_color['mobile'] : '';
	$cart_h_link_color_tablet  = ( ! empty( $cart_h_link_color['tablet'] ) ) ? $cart_h_link_color['tablet'] : '';

	$checkout_button_text_color_desktop = ( ! empty( $checkout_button_text_color['desktop'] ) ) ? $checkout_button_text_color['desktop'] : '';
	$checkout_button_text_color_mobile  = ( ! empty( $checkout_button_text_color['mobile'] ) ) ? $checkout_button_text_color['mobile'] : '';
	$checkout_button_text_color_tablet  = ( ! empty( $checkout_button_text_color['tablet'] ) ) ? $checkout_button_text_color['tablet'] : '';

	$checkout_button_bg_color_desktop = ( ! empty( $checkout_button_bg_color['desktop'] ) ) ? $checkout_button_bg_color['desktop'] : '';
	$checkout_button_bg_color_mobile  = ( ! empty( $checkout_button_bg_color['mobile'] ) ) ? $checkout_button_bg_color['mobile'] : '';
	$checkout_button_bg_color_tablet  = ( ! empty( $checkout_button_bg_color['tablet'] ) ) ? $checkout_button_bg_color['tablet'] : '';

	$checkout_button_text_h_color_desktop = ( ! empty( $checkout_button_text_h_color['desktop'] ) ) ? $checkout_button_text_h_color['desktop'] : '';
	$checkout_button_text_h_color_mobile  = ( ! empty( $checkout_button_text_h_color['mobile'] ) ) ? $checkout_button_text_h_color['mobile'] : '';
	$checkout_button_text_h_color_tablet  = ( ! empty( $checkout_button_text_h_color['tablet'] ) ) ? $checkout_button_text_h_color['tablet'] : '';

	$checkout_button_bg_h_color_desktop = ( ! empty( $checkout_button_bg_h_color['desktop'] ) ) ? $checkout_button_bg_h_color['desktop'] : '';
	$checkout_button_bg_h_color_mobile  = ( ! empty( $checkout_button_bg_h_color['mobile'] ) ) ? $checkout_button_bg_h_color['mobile'] : '';
	$checkout_button_bg_h_color_tablet  = ( ! empty( $checkout_button_bg_h_color['tablet'] ) ) ? $checkout_button_bg_h_color['tablet'] : '';

	$cart_button_text_color_desktop = ( ! empty( $cart_button_text_color['desktop'] ) ) ? $cart_button_text_color['desktop'] : '';
	$cart_button_text_color_mobile  = ( ! empty( $cart_button_text_color['mobile'] ) ) ? $cart_button_text_color['mobile'] : '';
	$cart_button_text_color_tablet  = ( ! empty( $cart_button_text_color['tablet'] ) ) ? $cart_button_text_color['tablet'] : '';

	$cart_button_bg_color_desktop = ( ! empty( $cart_button_bg_color['desktop'] ) ) ? $cart_button_bg_color['desktop'] : '';
	$cart_button_bg_color_mobile  = ( ! empty( $cart_button_bg_color['mobile'] ) ) ? $cart_button_bg_color['mobile'] : '';
	$cart_button_bg_color_tablet  = ( ! empty( $cart_button_bg_color['tablet'] ) ) ? $cart_button_bg_color['tablet'] : '';

	$cart_button_text_h_color_desktop = ( ! empty( $cart_button_text_h_color['desktop'] ) ) ? $cart_button_text_h_color['desktop'] : '';
	$cart_button_text_h_color_mobile  = ( ! empty( $cart_button_text_h_color['mobile'] ) ) ? $cart_button_text_h_color['mobile'] : '';
	$cart_button_text_h_color_tablet  = ( ! empty( $cart_button_text_h_color['tablet'] ) ) ? $cart_button_text_h_color['tablet'] : '';

	$cart_button_bg_h_color_desktop = ( ! empty( $cart_button_bg_h_color['desktop'] ) ) ? $cart_button_bg_h_color['desktop'] : '';
	$cart_button_bg_h_color_mobile  = ( ! empty( $cart_button_bg_h_color['mobile'] ) ) ? $cart_button_bg_h_color['mobile'] : '';
	$cart_button_bg_h_color_tablet  = ( ! empty( $cart_button_bg_h_color['tablet'] ) ) ? $cart_button_bg_h_color['tablet'] : '';

	$cart_label_position_desktop = ( ! empty( $cart_total_label_position['desktop'] ) ) ? $cart_total_label_position['desktop'] : '';
	$cart_label_position_mobile  = ( ! empty( $cart_total_label_position['mobile'] ) ) ? $cart_total_label_position['mobile'] : '';
	$cart_label_position_tablet  = ( ! empty( $cart_total_label_position['tablet'] ) ) ? $cart_total_label_position['tablet'] : '';

	$cart_icon_size_desktop = ( isset( $cart_icon_size ) && isset( $cart_icon_size['desktop'] ) && ! empty( $cart_icon_size['desktop'] ) ) ? $cart_icon_size['desktop'] : '';

	$cart_icon_size_tablet = ( isset( $cart_icon_size ) && isset( $cart_icon_size['tablet'] ) && ! empty( $cart_icon_size['tablet'] ) ) ? $cart_icon_size['tablet'] : '';

	$cart_icon_size_mobile = ( isset( $cart_icon_size ) && isset( $cart_icon_size['mobile'] ) && ! empty( $cart_icon_size['mobile'] ) ) ? $cart_icon_size['mobile'] : '';

	/**
	* Woo Cart CSS.
	*/
	$css_output_desktop = array(

		$selector . ' .ast-cart-menu-wrap, ' . $selector . ' .ast-addon-cart-wrap' => array(
			'color' => $icon_color,
		),
		$selector . ' .ast-cart-menu-wrap .count, ' . $selector . ' .ast-cart-menu-wrap .count:after, ' . $selector . ' .ast-addon-cart-wrap .count, ' . $selector . ' .ast-addon-cart-wrap .ast-icon-shopping-cart:after' => array(
			'color'        => $icon_color,
			'border-color' => $icon_color,
		),
		$selector . ' .ast-addon-cart-wrap .ast-icon-shopping-cart:after' => array(
			'color'            => esc_attr( $theme_h_color ),
			'background-color' => esc_attr( $icon_color ),
		),
		$selector . ' .ast-woo-header-cart-info-wrap' => array(
			'color' => esc_attr( $icon_color ),
		),
		$selector . ' .ast-addon-cart-wrap i.astra-icon:after' => array(
			'color'            => esc_attr( $theme_h_color ),
			'background-color' => esc_attr( $icon_color ),
		),
		'.ast-icon-shopping-bag .ast-icon svg, .ast-icon-shopping-cart .ast-icon svg, .ast-icon-shopping-basket .ast-icon svg' => array(
			'height' => astra_get_css_value( $cart_icon_size_desktop, 'px' ),
			'width'  => astra_get_css_value( $cart_icon_size_desktop, 'px' ),
		),
		'.ast-cart-menu-wrap'                         => array(
			'font-size' => astra_get_css_value( $cart_icon_size_desktop, 'px' ),
		),
		$selector . ' a.cart-container *'             => array(
			'transition' => 'none',
		),
		$selector . ' .ast-site-header-cart-li:hover .ast-addon-cart-wrap i.astra-icon:after' => array(
			'color'            => esc_attr( $theme_h_color ),
			'background-color' => $icon_hover_color,
		),

		/**
		* Transparent Header - Woo Cart icon color.
		*/
		$trans_header_selector . ' .ast-cart-menu-wrap, ' . $trans_header_selector . ' .ast-addon-cart-wrap' => array(
			'color' => $transparent_header_icon_color,
		),
		$trans_header_selector . ' .ast-cart-menu-wrap .count, ' . $trans_header_selector . ' .ast-cart-menu-wrap .count:after, ' . $trans_header_selector . ' .ast-addon-cart-wrap .count, ' . $trans_header_selector . ' .ast-addon-cart-wrap .ast-icon-shopping-cart:after' => array(
			'color'        => $transparent_header_icon_color,
			'border-color' => $transparent_header_icon_color,
		),
		$trans_header_selector . ' .ast-addon-cart-wrap .ast-icon-shopping-cart:after' => array(
			'color'            => esc_attr( $theme_h_color ),
			'background-color' => esc_attr( $transparent_header_icon_color ),
		),
		$trans_header_selector . ' .ast-woo-header-cart-info-wrap' => array(
			'color' => esc_attr( $transparent_header_icon_color ),
		),
		$trans_header_selector . ' .ast-addon-cart-wrap i.astra-icon:after' => array(
			'color'            => esc_attr( $theme_h_color ),
			'background-color' => esc_attr( $transparent_header_icon_color ),
		),
		/**
		 * General Woo Cart tray color for widget
		 */
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a:not(.button), .astra-cart-drawer .widget_shopping_cart_content a:not(.button)' => array(
			'color' => esc_attr( $cart_link_color_desktop ),
		),
		'.ast-site-header-cart-data span, .ast-site-header-cart-data strong, .ast-site-header-cart-data .woocommerce-mini-cart__empty-message, .ast-site-header-cart-data .total .woocommerce-Price-amount, .ast-site-header-cart-data .total .woocommerce-Price-amount .woocommerce-Price-currencySymbol, .ast-header-woo-cart .ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove' => array(
			'color' => esc_attr( $cart_text_color_desktop ),
		),
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a:not(.button):hover, .astra-cart-drawer .widget_shopping_cart_content a:not(.button):hover' => array(
			'color' => esc_attr( $cart_h_link_color_desktop ),
		),
		'#ast-site-header-cart .widget_shopping_cart, .astra-cart-drawer' => array(
			'background-color' => esc_attr( $cart_bg_color_desktop ),
			'border-color'     => esc_attr( $cart_bg_color_desktop ),
		),
		'#ast-site-header-cart .widget_shopping_cart:hover, .astra-cart-drawer:hover' => array(
			'background-color' => esc_attr( $cart_h_bg_color_desktop ),
			'border-color'     => esc_attr( $cart_h_bg_color_desktop ),
		),
		'#ast-site-header-cart .widget_shopping_cart .woocommerce-mini-cart__total, .astra-cart-drawer .astra-cart-drawer-header' => array(
			'border-top-color'    => esc_attr( $cart_separator_color_desktop ),
			'border-bottom-color' => esc_attr( $cart_separator_color_desktop ),
		),
		'#ast-site-header-cart .widget_shopping_cart .mini_cart_item' => array(
			'border-bottom-color' => astra_hex_to_rgba( $cart_separator_color_desktop ),
		),
		'#ast-site-header-cart .widget_shopping_cart:before, #ast-site-header-cart .widget_shopping_cart:after, .open-preview-woocommerce-cart #ast-site-header-cart .widget_shopping_cart:before' => array(
			'border-bottom-color' => esc_attr( $cart_bg_color_desktop ),
		),
		'#ast-site-header-cart:hover .widget_shopping_cart:hover:before, #ast-site-header-cart:hover .widget_shopping_cart:hover:after, .open-preview-woocommerce-cart #ast-site-header-cart .widget_shopping_cart:hover:before' => array(
			'border-bottom-color' => esc_attr( $cart_h_bg_color_desktop ),
		),
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove' => array(
			'border-color' => esc_attr( $cart_text_color_desktop ),
		),
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove:hover, .ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item:hover > a.remove' => array(
			'color'            => esc_attr( $cart_h_link_color_desktop ),
			'border-color'     => esc_attr( $cart_h_link_color_desktop ),
			'background-color' => esc_attr( $cart_h_bg_color_desktop ),
		),

		/**
		 * Cart button color for widget
		 */
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a.button.wc-forward:not(.checkout), .astra-cart-drawer .widget_shopping_cart_content a.button.wc-forward:not(.checkout)' => array(
			'color'            => esc_attr( $cart_button_text_color_desktop ),
			'background-color' => esc_attr( $cart_button_bg_color_desktop ),
		),
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover, .astra-cart-drawer .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover' => array(
			'color'            => esc_attr( $cart_button_text_h_color_desktop ),
			'background-color' => esc_attr( $cart_button_bg_h_color_desktop ),
		),

		/**
		 * Checkout button color for widget
		 */
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward, .astra-cart-drawer .widget_shopping_cart_content a.button.checkout.wc-forward' => array(
			'color'            => esc_attr( $checkout_button_text_color_desktop ),
			'border-color'     => esc_attr( $checkout_button_bg_color_desktop ),
			'background-color' => esc_attr( $checkout_button_bg_color_desktop ),
		),
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward:hover, .astra-cart-drawer .widget_shopping_cart_content a.button.checkout.wc-forward:hover' => array(
			'color'            => esc_attr( $checkout_button_text_h_color_desktop ),
			'background-color' => esc_attr( $checkout_button_bg_h_color_desktop ),
		),
	);

	// Desktop offcanvas cart.
	if ( 'flyout' === astra_get_option( 'woo-header-cart-click-action' ) || is_customize_preview() ) {

		$desktop_flyout_cart_width     = astra_get_option( 'woo-desktop-cart-flyout-width' );
		$desktop_flyout_cart_direction = astra_get_option( 'woo-desktop-cart-flyout-direction' );
		$css_output_desktop['.ast-desktop-cart-flyout.ast-site-header-cart:focus .widget_shopping_cart, .ast-desktop-cart-flyout.ast-site-header-cart:hover .widget_shopping_cart'] = array(
			'opacity'    => '0',
			'visibility' => 'hidden',
		);
		$css_output_desktop['.ast-desktop .astra-cart-drawer.open-right'] = array(
			'width' => astra_get_css_value( $desktop_flyout_cart_width, '%' ),
		);
		if ( 'left' === $desktop_flyout_cart_direction ) {
			$css_output_desktop['.ast-desktop .astra-cart-drawer.open-right']        = array(
				'width' => astra_get_css_value( $desktop_flyout_cart_width, '%' ),
				'left'  => '-' . astra_get_css_value( $desktop_flyout_cart_width, '%' ),
			);
			$css_output_desktop['.ast-desktop .astra-cart-drawer.open-right.active'] = array(
				'left' => astra_get_css_value( $desktop_flyout_cart_width, '%' ),
			);
		}
	} else {
		if ( is_rtl() ) {
			$css_output_desktop['.woocommerce .widget_shopping_cart .woocommerce-mini-cart__buttons a'] = array(
				'display'     => 'inline-block',
				'width'       => 'calc( 50% - 5px)',
				'margin-left' => '5px',
				'text-align'  => 'center',
			);
		} else {
			$css_output_desktop['.woocommerce .widget_shopping_cart .woocommerce-mini-cart__buttons a'] = array(
				'display'      => 'inline-block',
				'width'        => 'calc( 50% - 5px)',
				'margin-right' => '5px',
				'text-align'   => 'center',
			);
		}
	}

	/* Parse CSS from array() */
	$css_output          = astra_parse_css( $css_output_desktop );
	$responsive_selector = '.astra-cart-drawer';

	$css_output_mobile = array(
		$responsive_selector . ' .astra-cart-drawer-title, ' . $responsive_selector . ' .widget_shopping_cart_content span, ' . $responsive_selector . ' .widget_shopping_cart_content strong,' . $responsive_selector . ' .woocommerce-mini-cart__empty-message, .astra-cart-drawer .woocommerce-mini-cart *' => array(
			'color' => esc_attr( $cart_text_color_mobile ),
		),
		$responsive_selector . ' .widget_shopping_cart .mini_cart_item a.remove' => array(
			'border-color' => esc_attr( $cart_text_color_mobile ),
		),
		$responsive_selector . '#astra-mobile-cart-drawer' => array(
			'background-color' => esc_attr( $cart_bg_color_mobile ),
			'border-color'     => esc_attr( $cart_bg_color_mobile ),
		),
		$responsive_selector . '#astra-mobile-cart-drawer:hover' => array(
			'background-color' => esc_attr( $cart_h_bg_color_mobile ),
			'border-color'     => esc_attr( $cart_h_bg_color_mobile ),
		),
		'#astra-mobile-cart-drawer:hover .widget_shopping_cart:before, #astra-mobile-cart-drawer:hover .widget_shopping_cart:after, .open-preview-woocommerce-cart #astra-mobile-cart-drawer .widget_shopping_cart:before' => array(
			'border-bottom-color' => esc_attr( $cart_bg_color_mobile ),
		),
		$responsive_selector . ' .widget_shopping_cart .mini_cart_item a.remove:hover,' . $responsive_selector . ' .widget_shopping_cart .mini_cart_item:hover > a.remove' => array(
			'color'            => esc_attr( $cart_h_link_color_mobile ),
			'border-color'     => esc_attr( $cart_h_link_color_mobile ),
			'background-color' => esc_attr( $cart_bg_color_mobile ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a:not(.button)' => array(
			'color' => esc_attr( $cart_link_color_mobile ),
		),
		'#astra-mobile-cart-drawer .widget_shopping_cart .woocommerce-mini-cart__total, .astra-cart-drawer .astra-cart-drawer-header' => array(
			'border-top-color'    => esc_attr( $cart_separator_color_mobile ),
			'border-bottom-color' => esc_attr( $cart_separator_color_mobile ),
		),
		'#astra-mobile-cart-drawer .widget_shopping_cart .mini_cart_item' => array(
			'border-bottom-color' => astra_hex_to_rgba( $cart_separator_color_mobile ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a:not(.button):hover' => array(
			'color' => esc_attr( $cart_h_link_color_mobile ),
		),
		$responsive_selector . '.ast-icon-shopping-bag .ast-icon svg, .ast-icon-shopping-cart .ast-icon svg, .ast-icon-shopping-basket .ast-icon svg' => array(
			'height' => astra_get_css_value( $cart_icon_size_mobile, 'px' ),
			'width'  => astra_get_css_value( $cart_icon_size_mobile, 'px' ),
		),
		'.ast-header-break-point.ast-hfb-header .ast-cart-menu-wrap' => array(
			'font-size' => astra_get_css_value( $cart_icon_size_mobile, 'px' ),
		),

		/**
		* Checkout button color for widget
		*/
		$responsive_selector . ' .widget_shopping_cart_content a.button.checkout.wc-forward' => array(
			'color'            => esc_attr( $checkout_button_text_color_mobile ),
			'border-color'     => esc_attr( $checkout_button_bg_color_mobile ),
			'background-color' => esc_attr( $checkout_button_bg_color_mobile ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a.button.checkout.wc-forward:hover' => array(
			'color'            => esc_attr( $checkout_button_text_h_color_mobile ),
			'background-color' => esc_attr( $checkout_button_bg_h_color_mobile ),
		),

		/**
		* Cart button color for widget
		*/
		$responsive_selector . ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout)' => array(
			'color'            => esc_attr( $cart_button_text_color_mobile ),
			'background-color' => esc_attr( $cart_button_bg_color_mobile ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover' => array(
			'color'            => esc_attr( $cart_button_text_h_color_mobile ),
			'background-color' => esc_attr( $cart_button_bg_h_color_mobile ),
		),

	);
	$css_output_tablet = array(
		$responsive_selector . ' .astra-cart-drawer-title, ' . $responsive_selector . ' .widget_shopping_cart_content span, ' . $responsive_selector . ' .widget_shopping_cart_content strong,' . $responsive_selector . ' .woocommerce-mini-cart__empty-message, .astra-cart-drawer .woocommerce-mini-cart *' => array(
			'color' => esc_attr( $cart_text_color_tablet ),
		),
		$responsive_selector . ' .widget_shopping_cart .mini_cart_item a.remove' => array(
			'border-color' => esc_attr( $cart_text_color_tablet ),
		),
		$responsive_selector . '#astra-mobile-cart-drawer' => array(
			'background-color' => esc_attr( $cart_bg_color_tablet ),
			'border-color'     => esc_attr( $cart_bg_color_tablet ),
		),
		$responsive_selector . '#astra-mobile-cart-drawer:hover' => array(
			'background-color' => esc_attr( $cart_h_bg_color_tablet ),
			'border-color'     => esc_attr( $cart_h_bg_color_tablet ),
		),
		'#astra-mobile-cart-drawer:hover .widget_shopping_cart:before, #astra-mobile-cart-drawer:hover .widget_shopping_cart:after, .open-preview-woocommerce-cart #astra-mobile-cart-drawer .widget_shopping_cart:before' => array(
			'border-bottom-color' => esc_attr( $cart_bg_color_tablet ),
		),
		$responsive_selector . ' .widget_shopping_cart .mini_cart_item a.remove:hover,' . $responsive_selector . ' .widget_shopping_cart .mini_cart_item:hover > a.remove' => array(
			'color'            => esc_attr( $cart_h_link_color_tablet ),
			'border-color'     => esc_attr( $cart_h_link_color_tablet ),
			'background-color' => esc_attr( $cart_bg_color_tablet ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a:not(.button)' => array(
			'color' => esc_attr( $cart_link_color_tablet ),
		),
		'#astra-mobile-cart-drawer .widget_shopping_cart .woocommerce-mini-cart__total, .astra-cart-drawer .astra-cart-drawer-header' => array(
			'border-top-color'    => esc_attr( $cart_separator_color_tablet ),
			'border-bottom-color' => esc_attr( $cart_separator_color_tablet ),
		),
		'#astra-mobile-cart-drawer .widget_shopping_cart .mini_cart_item' => array(
			'border-bottom-color' => astra_hex_to_rgba( $cart_separator_color_tablet ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a:not(.button):hover' => array(
			'color' => esc_attr( $cart_h_link_color_tablet ),
		),
		$responsive_selector . '.ast-icon-shopping-bag .ast-icon svg, .ast-icon-shopping-cart .ast-icon svg, .ast-icon-shopping-basket .ast-icon svg' => array(
			'height' => astra_get_css_value( $cart_icon_size_tablet, 'px' ),
			'width'  => astra_get_css_value( $cart_icon_size_tablet, 'px' ),
		),
		'.ast-header-break-point.ast-hfb-header .ast-cart-menu-wrap' => array(
			'font-size' => astra_get_css_value( $cart_icon_size_tablet, 'px' ),
		),
		/**
		* Checkout button color for widget
		*/
		$responsive_selector . ' .widget_shopping_cart_content a.button.checkout.wc-forward' => array(
			'color'            => esc_attr( $checkout_button_text_color_tablet ),
			'border-color'     => esc_attr( $checkout_button_bg_color_tablet ),
			'background-color' => esc_attr( $checkout_button_bg_color_tablet ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a.button.checkout.wc-forward:hover' => array(
			'color'            => esc_attr( $checkout_button_text_h_color_tablet ),
			'background-color' => esc_attr( $checkout_button_bg_h_color_tablet ),
		),

		/**
		* Cart button color for widget
		*/
		$responsive_selector . ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout)' => array(
			'color'            => esc_attr( $cart_button_text_color_tablet ),
			'background-color' => esc_attr( $cart_button_bg_color_tablet ),
		),
		$responsive_selector . ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover' => array(
			'color'            => esc_attr( $cart_button_text_h_color_tablet ),
			'background-color' => esc_attr( $cart_button_bg_h_color_tablet ),
		),

	);

	$css_output .= astra_parse_css( $css_output_tablet, '', astra_get_tablet_breakpoint() );
	$css_output .= astra_parse_css( $css_output_mobile, '', astra_get_mobile_breakpoint() );

	if ( 'none' !== $header_cart_icon_style ) {

		$header_cart_icon = array(

			$selector . ' .ast-cart-menu-wrap, ' . $selector . ' .ast-addon-cart-wrap'       => array(
				'color' => $icon_color,
			),
			// Outline icon hover colors.
			'.ast-site-header-cart .ast-cart-menu-wrap:hover .count, .ast-site-header-cart .ast-addon-cart-wrap:hover .count' => array(
				'color'            => esc_attr( $cart_h_color ),
				'background-color' => esc_attr( $icon_color ),
			),

			// Label/Fill icon hover Color.
			'.ast-menu-cart-outline .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count, .ast-site-header-cart-li:hover .ast-woo-header-cart-info-wrap,' . $selector . ' .ast-site-header-cart-li:hover .ast-addon-cart-wrap, .ast-menu-cart-outline .ast-site-header-cart-li:hover .ast-addon-cart-wrap .astra-icon' => array(
				'color' => $icon_hover_color,
			),

			// Outline icon hover Color.
			$selector . ' .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count, .ast-menu-cart-outline .ast-site-header-cart-li:hover .ast-addon-cart-wrap' => array(
				'border-color' => $icon_hover_color,
			),

			$selector . ' .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count:after, ' . $selector . ' .ast-site-header-cart-li:hover .ast-addon-cart-wrap .count' => array(
				'color'        => $icon_hover_color,
				'border-color' => $icon_hover_color,
			),

			// Outline icon colors.
			'.ast-menu-cart-outline .ast-cart-menu-wrap .count, .ast-menu-cart-outline .ast-addon-cart-wrap' => array(
				'color' => esc_attr( $icon_color ),
			),

			// Outline Info colors.
			$selector . ' .ast-menu-cart-outline .ast-woo-header-cart-info-wrap' => array(
				'color' => esc_attr( $icon_color ),
			),

			// Fill icon Color.
			'.ast-menu-cart-fill .ast-cart-menu-wrap .count, .ast-menu-cart-fill .ast-cart-menu-wrap, .ast-menu-cart-fill .ast-addon-cart-wrap .ast-woo-header-cart-info-wrap, .ast-menu-cart-fill .ast-addon-cart-wrap' => array(
				'background-color' => esc_attr( $icon_color ),
				'color'            => esc_attr( $cart_h_color ),
			),

			// Fill icon hover Color.
			'.ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-cart-menu-wrap, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap .ast-woo-header-cart-info-wrap, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap i.astra-icon:after' => array(
				'background-color' => $icon_hover_color,
				'color'            => esc_attr( $cart_h_color ),
			),

			// Transparent Header - Cart Icon color.
			$trans_header_selector . ' .ast-cart-menu-wrap, ' . $trans_header_selector . ' .ast-addon-cart-wrap'       => array(
				'color' => $transparent_header_icon_color,
			),
			// Outline icon hover colors.
			'.ast-theme-transparent-header .ast-site-header-cart .ast-cart-menu-wrap:hover .count, .ast-theme-transparent-header .ast-site-header-cart .ast-addon-cart-wrap:hover .count' => array(
				'color'            => esc_attr( $transparent_header_cart_h_color ),
				'background-color' => esc_attr( $transparent_header_icon_color ),
			),
			// Outline icon colors.
			'.ast-theme-transparent-header .ast-menu-cart-outline .ast-cart-menu-wrap .count, .ast-theme-transparent-header .ast-menu-cart-outline .ast-addon-cart-wrap' => array(
				'color' => esc_attr( $transparent_header_icon_color ),
			),
			// Outline Info colors.
			$trans_header_selector . ' .ast-menu-cart-outline .ast-woo-header-cart-info-wrap' => array(
				'color' => esc_attr( $transparent_header_icon_color ),
			),

			// Fill icon Color.
			'.ast-theme-transparent-header .ast-menu-cart-fill .ast-cart-menu-wrap .count, .ast-theme-transparent-header .ast-menu-cart-fill .ast-cart-menu-wrap, .ast-theme-transparent-header .ast-menu-cart-fill .ast-addon-cart-wrap .ast-woo-header-cart-info-wrap, .ast-theme-transparent-header .ast-menu-cart-fill .ast-addon-cart-wrap' => array(
				'background-color' => esc_attr( $transparent_header_icon_color ),
				'color'            => esc_attr( $transparent_header_cart_h_color ),
			),

			// Border radius.
			'.ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap, .ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap .count, .ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap .count, .ast-site-header-cart.ast-menu-cart-outline .ast-addon-cart-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-addon-cart-wrap, .ast-site-header-cart.ast-menu-cart-outline .ast-woo-header-cart-info-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-woo-header-cart-info-wrap' => array(
				'border-radius' => astra_get_css_value( $header_cart_icon_radius, 'px' ),
			),
		);

		// We adding this conditional CSS only to maintain backwards. Remove this condition after 2-3 updates of add-on.
		if ( defined( 'ASTRA_EXT_VER' ) && version_compare( ASTRA_EXT_VER, '3.4.2', '<' ) ) {
			// Outline cart style border.
			$header_cart_icon['.ast-menu-cart-outline .ast-cart-menu-wrap .count, .ast-menu-cart-outline .ast-addon-cart-wrap'] = array(
				'border' => '2px solid ' . $icon_color,
				'color'  => esc_attr( $icon_color ),
			);
			// Transparent Header outline cart style border.
			$header_cart_icon['.ast-theme-transparent-header .ast-menu-cart-outline .ast-cart-menu-wrap .count, .ast-theme-transparent-header .ast-menu-cart-outline .ast-addon-cart-wrap'] = array(
				'border' => '2px solid ' . $transparent_header_icon_color,
				'color'  => esc_attr( $transparent_header_icon_color ),
			);
		}

		$css_output .= astra_parse_css( $header_cart_icon );
	}

	/**
	 * Added for the Cart total label badge position
	 */
	
	$css_total_position_common_selector = array(
		'.cart-container, .ast-addon-cart-wrap' => array(
			'display'     => 'flex',
			'align-items' => 'center',
		),
		'.astra-icon'                           => array(
			'line-height' => 0.1,
		),
	);
	$css_output                        .= astra_parse_css( $css_total_position_common_selector );

	/**
	 * Position markup
	 *
	 * @since x.x.x
	 * @param  string $postion  Position.
	 * @param  string $device Device type.
	 * @return array
	 */
	function astra_cart_position( $postion, $device ) {
		switch ( $postion ) {
			case 'bottom':
				$css_total_position_output_bottom = array(
					'.ast-cart-' . $device . '-position-bottom' => array(
						'flex-direction' => 'column',
						'padding-top'    => '7px', 
						'padding-bottom' => '5px',
					),
					
					'.ast-cart-' . $device . '-position-bottom .ast-woo-header-cart-info-wrap' => array(
						'order'       => 2,
						'line-height' => 1,
						'margin-top'  => '0.5em',
					),
					
				);
				return $css_total_position_output_bottom;
			case 'right':
				$css_total_position_output_right = array(
					'.ast-cart-' . $device . '-position-right .ast-woo-header-cart-info-wrap' => array(
						'order'       => 2,
						'margin-left' => '0.7em',
					),
				);
				return $css_total_position_output_right;
			case 'left':
				$css_total_position_output_left = array(    
					'.ast-cart-' . $device . '-position-left .ast-woo-header-cart-info-wrap' => array(
						'margin-right' => '0.5em',
					),
				);
				return $css_total_position_output_left; 
			default:
				break;
		}
	}
	$cart_l_p_mobile = '';
	$cart_l_p_tablet = '';
	if ( $cart_label_position_desktop ) {
		$cart_l_p_desktop = astra_cart_position( $cart_label_position_desktop, 'desktop' );
		/** @psalm-suppress InvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
		$css_output .= astra_parse_css( $cart_l_p_desktop, astra_get_tablet_breakpoint( '', '1' ) );
	}
	if ( $cart_label_position_mobile ) {
		$cart_l_p_mobile = astra_cart_position( $cart_label_position_mobile, 'mobile' );
	}
	if ( $cart_label_position_tablet ) {
		$cart_l_p_tablet = astra_cart_position( $cart_label_position_tablet, 'tablet' );
	}
	/** @psalm-suppress InvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
	$css_output .= astra_parse_css( $cart_l_p_tablet, astra_get_mobile_breakpoint( '', '1' ), astra_get_tablet_breakpoint() );
	/** @psalm-suppress InvalidArgument */ // phpcs:ignore Generic.Commenting.DocComment.MissingShort
	$css_output .= astra_parse_css( $cart_l_p_mobile, '', astra_get_mobile_breakpoint( '', '1' ) );


	$angle_transition = array(
		'#ast-site-header-cart .widget_shopping_cart:before, #ast-site-header-cart .widget_shopping_cart:after' => array(
			'transition'  => 'all 0.3s ease',
			'margin-left' => 0.5 . 'em',
		),
	);
	$css_output      .= astra_parse_css( $angle_transition );


	$css_output .= Astra_Builder_Base_Dynamic_CSS::prepare_advanced_margin_padding_css( 'section-header-woo-cart', '.woocommerce .ast-header-woo-cart .ast-site-header-cart, .ast-header-woo-cart .ast-site-header-cart' );
	$css_output .= Astra_Builder_Base_Dynamic_CSS::prepare_visibility_css( 'section-header-woo-cart', '.ast-header-woo-cart' );

	$dynamic_css .= $css_output;

	return $dynamic_css;
}
