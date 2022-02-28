
window.addEventListener( 'load', function(e) {
	astra_onload_function();
});

function astra_onload_function() {

	/* Do things after DOM has fully loaded */

	var astraMetaBox = document.querySelector( '#astra_settings_meta_box' );
	if( astraMetaBox != null ){

			document.querySelector('#site-content-layout').addEventListener('change',function( event ) {

				var bodyClass = document.querySelector('body'),
					contentLayout = document.getElementById('site-content-layout').value;
				switch( contentLayout ) {
					case 'content-boxed-container':
						bodyClass.classList.add('ast-separate-container');
						bodyClass.classList.remove('ast-two-container' , 'ast-page-builder-template' , 'ast-plain-container');
					break;
					case 'boxed-container':
						bodyClass.classList.add('ast-separate-container' , 'ast-two-container');
						bodyClass.classList.remove('ast-page-builder-template' , 'ast-plain-container');
					break;
					case 'page-builder':
						bodyClass.classList.add('ast-page-builder-template');
						bodyClass.classList.remove('ast-two-container' , 'ast-plain-container' , 'ast-separate-container');
					break;
					case 'plain-container':
						bodyClass.classList.add('ast-plain-container');
						bodyClass.classList.remove('ast-two-container' , 'ast-page-builder-template' , 'ast-separate-container');
					break;
				}
			});

		var titleCheckbox = document.getElementById('site-post-title');

		if( null === titleCheckbox ) {
			titleCheckbox = document.querySelector('.site-post-title input');
		}

		if( null !== titleCheckbox ) {
			titleCheckbox.addEventListener('change',function() {
				var titleBlock = document.querySelector('.editor-post-title__block');
				if( null !== titleBlock ) {
					if( titleCheckbox.checked ){
						titleBlock.style.opacity = '0.2';
					} else {
						titleBlock.style.opacity = '1.0';
					}
				}
			});
		}

		// Title visibility with new editor compatibility update.
		var titleVisibilityTrigger = '';
		if( 'disabled' === wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )['site-post-title'] ) {
			titleVisibilityTrigger = '<span class="dashicons dashicons-visibility title-visibility"></span>';
			var titleBlock = document.querySelector( '.edit-post-visual-editor__post-title-wrapper' );
			titleBlock.classList.toggle( 'invisible' );
		} else {
			titleVisibilityTrigger = '<span class="dashicons dashicons-hidden title-visibility"></span>';
		}

		document.querySelector( '.edit-post-visual-editor__post-title-wrapper' ).insertAdjacentHTML( 'beforeend', titleVisibilityTrigger );

		document.querySelector( '.title-visibility' ).addEventListener( 'click',function() {
			var titleBlock = document.querySelector( '.edit-post-visual-editor__post-title-wrapper' );
			titleBlock.classList.toggle( 'invisible' );

			if( this.classList.contains( 'dashicons-visibility' ) ) {
				this.classList.add( 'dashicons-hidden' );
				this.classList.remove( 'dashicons-visibility' );
				wp.data.dispatch( 'core/editor' ).editPost(
					{
						meta: {
							'site-post-title': '',
						}
					}
					);
				} else {
					this.classList.add( 'dashicons-visibility' );
					this.classList.remove( 'dashicons-hidden' );
					wp.data.dispatch( 'core/editor' ).editPost(
						{
							meta: {
							'site-post-title': 'disabled',
						}
					}
				);
			}
		});
	}

	wp.data.subscribe(function () {
		setTimeout( function () {
			/**
			 * In WP-5.9 block editor comes up with color palette showing color-code canvas, but with theme var() CSS its appearing directly as it is. So updated them on wp.data event.
			 */
			const customColorPickerButtons = document.querySelectorAll( '.components-color-palette__custom-color' );

			for ( let btnCount = 0; btnCount < customColorPickerButtons.length; btnCount++ ) {
				const colorCode = customColorPickerButtons[btnCount].innerText;
				if ( colorCode.indexOf( 'var(--ast-global-color' ) > -1 ) {
					customColorPickerButtons[btnCount].innerHTML = '<span class="ast-theme-block-color-name">' + astraColors[ colorCode ] + '</span>';
				}
			}

			var spacerBlocks = document.querySelectorAll( '.wp-block.wp-block-spacer' );

			for ( var item = 0;  item < spacerBlocks.length; item++ ) {

				var block = spacerBlocks[item];

				let style = getComputedStyle(block),
					height = parseInt(style.height) || 0;

				block.querySelector( '.components-resizable-box__container' ).setAttribute( 'data-spaceheight', height + 'px' );
			}
		}, 1 );
	});
}
