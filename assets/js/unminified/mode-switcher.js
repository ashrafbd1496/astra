/**
 * File mode-switcher.js
 *
 * JS for Mode switcher feature frontend rendering.
 *
 * @package Astra
 * @since x.x.x
 */

// Update mode switcher atts.
astraUpdateSwitcherAtts = function ( switchedTo ) {
	// Update aria-label attr.
	var modeSwticherTrigger =  document.querySelectorAll( '.ast-mode-switcher-trigger' );
	for ( var count = 0; count < modeSwticherTrigger.length; count++ ) {
		if( 'dark' === switchedTo ) {
			modeSwticherTrigger[ count ].setAttribute( 'aria-label', astraModeSwitcher.switchToLightMode );
		} else {
			modeSwticherTrigger[ count ].setAttribute( 'aria-label', astraModeSwitcher.switchToDarkMode );
		}
	}

	// Update title attr.
	var modeSwticherIconButtons =  document.querySelectorAll( '.ast-mode-switcher-icon-button, .ast-mode-switcher-icon-toggle' );
	for ( var count = 0; count < modeSwticherIconButtons.length; count++ ) {
		if( 'dark' === switchedTo ) {
			modeSwticherIconButtons[ count ].setAttribute( 'title', astraModeSwitcher.switchToLightMode );
		} else {
			modeSwticherIconButtons[ count ].setAttribute( 'title', astraModeSwitcher.switchToDarkMode );
		}
	}
}

// Frontend dark mode switcher toggle.
astraDarkModeSwitcher = function () {

	var modeSwticherTrigger =  document.querySelectorAll( '.ast-mode-switcher-trigger' );

	if ( modeSwticherTrigger.length > 0 ) {

		// Check if 'astra-color-mode' local storage is already set.
		var siteView = localStorage.getItem( 'astra-color-mode' );

		if ( siteView && '' !== siteView ) {
			astraUpdateSwitcherAtts( siteView );
			if ( 'dark' === siteView && ! document.documentElement.classList.contains( 'ast-dark-mode' ) ) {
				document.documentElement.classList.add( 'ast-dark-mode' );
			} else if ( 'light' === siteView && document.documentElement.classList.contains( 'ast-dark-mode' ) ) {
				document.documentElement.classList.remove( 'ast-dark-mode' );
			}
		} else if( '1' === astraModeSwitcher.carryOsPalette ) {
			// Logic for OS Aware option to showcase site on load with their set system scheme.
			var hasDarkSchemeSupport = window.matchMedia( "(prefers-color-scheme: dark)" );
			if ( hasDarkSchemeSupport.matches ) {
				astraUpdateSwitcherAtts( 'dark' );
			} else {
				astraUpdateSwitcherAtts( 'light' );
			}
		}

		// Click event for switcher.
		for ( var count = 0; count < modeSwticherTrigger.length; count++ ) {
			modeSwticherTrigger[count].onclick = function(event) {
				event.preventDefault();
				event.stopPropagation();

				if ( document.documentElement.classList.contains( 'ast-dark-mode' ) ) {
					astraUpdateSwitcherAtts( 'light' );
					document.documentElement.classList.remove( 'ast-dark-mode' );
					localStorage.setItem( 'astra-color-mode', 'light' );
				} else {
					astraUpdateSwitcherAtts( 'dark' );
					document.documentElement.classList.add( 'ast-dark-mode' );
					localStorage.setItem( 'astra-color-mode', 'dark' );
				}
			}
		}
	}
}

window.addEventListener( 'load', function () {
	astraDarkModeSwitcher();
});
