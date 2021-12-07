/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra
 * @since x.x.x
 */

(function ($) {

	var selector = '.ast-site-header-cart';
	var responsive_selector = '.astra-cart-drawer';


	// Icon Color.
	astra_css(
		'astra-settings[header-woo-cart-icon-color]',
		'color',
		selector + ' .ast-cart-menu-wrap .count, ' + selector + ' .ast-cart-menu-wrap .count:after,' + selector + ' .ast-woo-header-cart-info-wrap,' + selector + ' .ast-site-header-cart .ast-addon-cart-wrap'
	);

	// Icon Color.
	astra_css(
		'astra-settings[header-woo-cart-icon-color]',
		'border-color',
		selector + ' .ast-cart-menu-wrap .count, ' + selector + ' .ast-cart-menu-wrap .count:after'
	);

	// Icon Hover Color.
	astra_css(
		'astra-settings[header-woo-cart-icon-hover-color]',
		'border-color',
		selector + ' .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count, ' + selector + ' .ast-site-header-cart-li:hover .ast-addon-cart-wrap, ' + selector + ' .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count:after'
	);

	// Icon Color.
	astra_css(
		'astra-settings[header-woo-cart-icon-hover-color]',
		'color',
		'.ast-menu-cart-outline .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count, .ast-site-header-cart-li:hover .ast-woo-header-cart-info-wrap, .ast-menu-cart-outline .ast-site-header-cart-li:hover .ast-addon-cart-wrap i.astra-icon'
	);

	// Icon BG Color.
	astra_css(
		'astra-settings[header-woo-cart-icon-color]',
		'border-color',
		'.ast-menu-cart-fill .ast-cart-menu-wrap .count, .ast-menu-cart-fill .ast-cart-menu-wrap'
	);

	// Icon BG hover Color.
	astra_css(
		'astra-settings[header-woo-cart-icon-hover-color]',
		'background-color',
		'.ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap .ast-woo-header-cart-info-wrap, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count, .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-cart-menu-wrap, '+ selector + ' .ast-site-header-cart-li:hover .ast-addon-cart-wrap i.astra-icon:after'
	);


	// WooCommerce Cart Colors.

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-text-color]',
		'color',
		'.astra-cart-drawer-title, .ast-site-header-cart-data span, .ast-site-header-cart-data strong, .ast-site-header-cart-data .woocommerce-mini-cart__empty-message, .ast-site-header-cart-data .total .woocommerce-Price-amount, .ast-site-header-cart-data .total .woocommerce-Price-amount .woocommerce-Price-currencySymbol, .ast-header-woo-cart .ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove,' + responsive_selector + ' .widget_shopping_cart_content span, ' + responsive_selector + ' .widget_shopping_cart_content strong,' + responsive_selector + ' .woocommerce-mini-cart__empty-message, .astra-cart-drawer .woocommerce-mini-cart *, ' + responsive_selector + ' .astra-cart-drawer-title'
	);

	astra_color_responsive_css(
		'woo-cart-border-color',
		'astra-settings[header-woo-cart-text-color]',
		'border-color',
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove, ' + responsive_selector + ' .widget_shopping_cart .mini_cart_item a.remove'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-link-color]',
		'color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a:not(.button),' + responsive_selector + ' .widget_shopping_cart_content a:not(.button)'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-background-color]',
		'background-color',
		'#ast-site-header-cart .widget_shopping_cart, .astra-cart-drawer'
	);

	astra_color_responsive_css(
		'woo-cart-border-color',
		'astra-settings[header-woo-cart-background-color]',
		'border-color',
		'#ast-site-header-cart .widget_shopping_cart, .astra-cart-drawer'
	);

	astra_color_responsive_css(
		'woo-cart-border-bottom-color',
		'astra-settings[header-woo-cart-background-color]',
		'border-bottom-color',
		'#ast-site-header-cart .widget_shopping_cart:before, #ast-site-header-cart .widget_shopping_cart:after, .open-preview-woocommerce-cart #ast-site-header-cart .widget_shopping_cart:before, #astra-mobile-cart-drawer, .astra-cart-drawer'
	);

	// Added Background Color Hover
	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-background-hover-color]',
		'background-color',
		'#ast-site-header-cart .widget_shopping_cart:hover, #astra-mobile-cart-drawer:hover'
	);

	astra_color_responsive_css(
		'woo-cart-border-color',
		'astra-settings[header-woo-cart-background-hover-color]',
		'border-color',
		'#ast-site-header-cart .widget_shopping_cart:hover, #astra-mobile-cart-drawer:hover'
	);

	astra_color_responsive_css(
		'woo-cart-border-bottom-color',
		'astra-settings[header-woo-cart-background-hover-color]',
		'border-bottom-color',
		'#ast-site-header-cart .widget_shopping_cart:hover,site-header-cart .widget_shopping_cart:hover:after, #astra-mobile-cart-drawer:hover,#ast-site-header-cart:hover .widget_shopping_cart:hover:before, #ast-site-header-cart:hover .widget_shopping_cart:hover:after, .open-preview-woocommerce-cart #ast-site-header-cart .widget_shopping_cart:hover:before'
	);
	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-separator-color]',
		'border-top-color',
		'#ast-site-header-cart .widget_shopping_cart .woocommerce-mini-cart__total, #astra-mobile-cart-drawer .widget_shopping_cart .woocommerce-mini-cart__total, .astra-cart-drawer .astra-cart-drawer-header'
	);

	astra_color_responsive_css(
		'woo-cart-border-bottom-colors',
		'astra-settings[header-woo-cart-separator-color]',
		'border-bottom-color',
		'#ast-site-header-cart .widget_shopping_cart .woocommerce-mini-cart__total, #astra-mobile-cart-drawer .widget_shopping_cart .woocommerce-mini-cart__total, .astra-cart-drawer .astra-cart-drawer-header, #ast-site-header-cart .widget_shopping_cart .mini_cart_item, #astra-mobile-cart-drawer .widget_shopping_cart .mini_cart_item'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-link-hover-color]',
		'color',
		'.ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart_content a:not(.button):hover, .ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove:hover, .ast-site-header-cart .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item:hover > a.remove,' + responsive_selector + ' .widget_shopping_cart_content a:not(.button):hover,' + responsive_selector + ' .widget_shopping_cart .mini_cart_item a.remove:hover,' + responsive_selector + ' .widget_shopping_cart .mini_cart_item:hover > a.remove'
	);

	astra_color_responsive_css(
		'woo-cart-border-colors',
		'astra-settings[header-woo-cart-link-hover-color]',
		'border-color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item a.remove:hover,' + selector + ' .ast-site-header-cart-data .widget_shopping_cart .mini_cart_item:hover > a.remove,' + responsive_selector + ' .widget_shopping_cart .mini_cart_item a.remove:hover,' + responsive_selector + ' .widget_shopping_cart .mini_cart_item:hover > a.remove'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-btn-text-color]',
		'color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.wc-forward:not(.checkout),' + responsive_selector + ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout)'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-btn-background-color]',
		'background-color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.wc-forward:not(.checkout),' + responsive_selector + ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout)'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-btn-text-hover-color]',
		'color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover,' + responsive_selector + ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-cart-btn-bg-hover-color]',
		'background-color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover,' + responsive_selector + ' .widget_shopping_cart_content a.button.wc-forward:not(.checkout):hover'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-checkout-btn-text-color]',
		'color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward,' + responsive_selector + ' .widget_shopping_cart_content a.button.checkout.wc-forward'
	);

	astra_color_responsive_css(
		'woo-cart-colors',
		'astra-settings[header-woo-checkout-btn-background-color]',
		'border-color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward,' + responsive_selector + ' .widget_shopping_cart_content a.button.checkout.wc-forward'
	);

	astra_color_responsive_css(
		'woo-cart-background-color',
		'astra-settings[header-woo-checkout-btn-background-color]',
		'background-color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward,' + responsive_selector + ' .widget_shopping_cart_content a.button.checkout.wc-forward'
	);

	astra_color_responsive_css(
		'woo-cart-background-color',
		'astra-settings[header-woo-checkout-btn-text-hover-color]',
		'color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward:hover,' + responsive_selector + ' .widget_shopping_cart_content a.button.checkout.wc-forward:hover'
	);

	astra_color_responsive_css(
		'woo-cart-background-color',
		'astra-settings[header-woo-checkout-btn-bg-hover-color]',
		'background-color',
		selector + ' .ast-site-header-cart-data .widget_shopping_cart_content a.button.checkout.wc-forward:hover,' + responsive_selector + ' .widget_shopping_cart_content a.button.checkout.wc-forward:hover'
	);

	/**
	 * Cart icon style
	 */
	wp.customize('astra-settings[woo-header-cart-icon-style]', function (setting) {
		setting.bind(function (icon_style) {

			var buttons = $(document).find('.ast-site-header-cart');
			buttons.removeClass('ast-menu-cart-fill ast-menu-cart-outline ast-menu-cart-none');
			buttons.addClass('ast-menu-cart-' + icon_style);
			var dynamicStyle = '.ast-site-header-cart a, .ast-site-header-cart a *{ transition: all 0s; } ';
			astra_add_dynamic_css('woo-header-cart-icon-style', dynamicStyle);
			wp.customize.preview.send('refresh');
		});
	});

	/**
	 * Desktop cart offcanvas width.
	 */
	 wp.customize( 'astra-settings[woo-desktop-cart-flyout-width]', function( setting ) {
		setting.bind( function( width ) {
			var offcanvasPosition = wp.customize( 'astra-settings[woo-desktop-cart-flyout-direction]' ).get();

			if( 'left' == offcanvasPosition ) {
				var dynamicStyle = '.ast-desktop .astra-cart-drawer.open-right { width: ' + width + '%; left: -' + width + '%; } ';
					dynamicStyle += '.ast-desktop .astra-cart-drawer.open-right.active { left: ' + width + '%; } ';
			} else {
				var dynamicStyle = '.ast-desktop .astra-cart-drawer.open-right { width: ' + width + '%; left: 100%; } ';
			}

			astra_add_dynamic_css( 'woo-desktop-cart-flyout-width', dynamicStyle );
		} );
	} );

	/**
	 * Cart icon style
	 */
	wp.customize('astra-settings[header-woo-cart-icon-color]', function (setting) {
		setting.bind(function (color) {
			var dynamicStyle = '.ast-menu-cart-fill .ast-cart-menu-wrap .count, .ast-menu-cart-fill .ast-cart-menu-wrap { background-color: ' + color + '; } ';
			astra_add_dynamic_css('header-woo-cart-icon-color', dynamicStyle);
			wp.customize.preview.send('refresh');
		});
	});

	/**
	 * Cart Border Radius
	 */
	wp.customize('astra-settings[woo-header-cart-icon-radius]', function (setting) {
		setting.bind(function (radius) {
			var dynamicStyle = '.ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap, .ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap .count, .ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap .count, .ast-site-header-cart.ast-menu-cart-outline .ast-addon-cart-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-addon-cart-wrap { border-radius: ' + radius + 'px; } ';
			astra_add_dynamic_css('woo-header-cart-icon-radius', dynamicStyle);
		});
	});

	/**
	 * Transparent Header WOO-Cart color options - Customizer preview CSS.
	 */
	wp.customize('astra-settings[transparent-header-woo-cart-icon-color]', function (setting) {
		setting.bind(function (cart_icon_color) {
			wp.customize.preview.send('refresh');
		});
	});

	/**
     * Cart total label position.
     */
	 wp.customize('astra-settings[woo-header-cart-icon-total-label-position]', function (setting) {
		setting.bind(function (position) {
			var defaultCart = $(document).find('.cart-container');
			defaultPositionSelector = 'ast-cart-desktop-position-left ast-cart-desktop-position-right ast-cart-desktop-position-bottom ast-cart-mobile-position-left ast-cart-mobile-position-right ast-cart-mobile-position-bottom ast-cart-tablet-position-left ast-cart-tablet-position-right ast-cart-tablet-position-bottom';
			if($(selector).find('.ast-addon-cart-wrap').length){
				let iconCart = $(document).find('.ast-addon-cart-wrap');
				iconCart.removeClass(defaultPositionSelector);
				defaultCart.removeClass(defaultPositionSelector);
				iconCart.addClass('ast-cart-desktop-position-' + position.desktop);	
				iconCart.addClass('ast-cart-mobile-position-' + position.mobile);	
				iconCart.addClass('ast-cart-tablet-position-' + position.tablet);	
			}
			else {
				defaultCart.removeClass(defaultPositionSelector);
				defaultCart.addClass('ast-cart-desktop-position-' + position.desktop);
				defaultCart.addClass('ast-cart-mobile-position-' + position.mobile);
				defaultCart.addClass('ast-cart-tablet-position-' + position.tablet);
			}

			// var position_selector = '#ast-desktop-header';
			// var position_responsive_selector = '#ast-mobile-header ';

			var dynamicStyle = '.cart-container, .ast-addon-cart-wrap {display : flex; align-items : center; padding-top: 7px; padding-bottom: 5px;} ';
				dynamicStyle += '.astra-icon {line-height : 0.1;} ';
				var tablet_break_point = astraBuilderPreview.tablet_break_point || 768,
				mobile_break_point = astraBuilderPreview.mobile_break_point || 544;
				if( position.desktop ){
					dynamicStyle += '@media (min-width: ' + tablet_break_point + 'px) {';
					dynamicStyle += cartPosition(position.desktop,'desktop');
					dynamicStyle += '} ';
				}
				if( position.tablet ){
					dynamicMobileStyle = cartPosition(position.tablet,'tablet');
					dynamicStyle += '@media (max-width: ' + tablet_break_point + 'px ) and ( min-width: ' + mobile_break_point + 'px) {';
					dynamicStyle += dynamicMobileStyle;
					dynamicStyle += '} ';
				}
				if( position.mobile ){
					dynamictabletStyle = cartPosition(position.mobile,'mobile');
					dynamicStyle += '@media (max-width: ' + mobile_break_point + 'px) {';
					dynamicStyle += dynamictabletStyle;
					dynamicStyle += '} ';
				}
					
				function cartPosition(position,device) {
				switch(position){
					case "bottom":
					 	var dynamicStylePosition = '.ast-cart-'+ device +'-position-bottom { flex-direction : column;} ';
						dynamicStylePosition += '.ast-cart-'+ device +'-position-bottom .ast-woo-header-cart-info-wrap { order : 2; line-height : 1; margin-top  : 0.5em; } ';
						return dynamicStylePosition;
					case "right":
						dynamicStylePosition = '.ast-cart-'+ device +'-position-right .ast-woo-header-cart-info-wrap { order :  2; margin-left : 0.7em;} ';
						return dynamicStylePosition;
					case "left":
						dynamicStylePosition = '.ast-cart-'+ device +'-position-left .ast-woo-header-cart-info-wrap { margin-right : 0.5em;} ';
						return dynamicStylePosition;
					default:
					break;
				}
			}
			astra_add_dynamic_css( 'woo-desktop-cart-flyout-width', dynamicStyle );
		});
	});

	// Advanced CSS Generation for cart padding and margin.
	astra_builder_advanced_css( 'section-header-woo-cart', '.woocommerce .ast-header-woo-cart .ast-site-header-cart, .ast-header-woo-cart .ast-site-header-cart' );

	// Advanced Visibility CSS Generation.
	astra_builder_visibility_css('section-header-woo-cart', '.ast-header-woo-cart');

})(jQuery);
