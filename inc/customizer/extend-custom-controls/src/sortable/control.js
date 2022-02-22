import SortableComponent from './sortable.js';
import BorderComponent from '../border/border-component';
import ResponsiveComponent from '../responsive/responsive-component';
import ResponsiveSliderComponent from '../responsive-slider/responsive-slider-component';
import ResponsiveSpacingComponent from '../responsive-spacing/responsive-spacing-component';
import SliderComponent from '../slider/slider-component';
import Background from '../background/background';
import ResponsiveBackground from '../responsive-background/responsive-background';
import ColorComponent from '../color/color-component';
import ResponsiveColorComponent from '../responsive-color/responsive-color-component';
import SelectComponent from '../select/select-component';
import DividerComponent from '../divider/divider-component';
import BoxShadowComponent from '../box-shadow/box-shadow-component.js';
import SelectorComponent from '../selector/selector-component';
import ToggleControl from '../toggle-control/toggle-control-component';
import TextInputControl from '../text-input/text-input-component';
import ListIconsControl from '../list-icons/list-icons-component';

import {
	astraGetBackground,
	astraGetColor,
	astraGetResponsiveBgJs,
	astraGetResponsiveColorJs,
	astraGetResponsiveJs,
	astraGetResponsiveSliderJs,
	astraGetResponsiveSpacingJs
} from '../common/responsive-helper';

export const sortableControl = wp.customize.astraControl.extend( {
	renderContent: function renderContent() {
		let control = this;
	ReactDOM.render( <SortableComponent control={ control } />, control.container[0] );
	},
	ready: function() {

		'use strict';

		let control = this;

		// Set the sortable container.
		control.sortableContainer = control.container.find( '.sortable' ).first();

		// Init sortable.
		control.sortableContainer.sortable({

			// Update value when we stop sorting.
			stop: function() {
				control.updateValue();
			}
		}).disableSelection().find( '.ast-sortable-item' ).each( function() {

				// Enable/disable options when we click on the eye of Thundera.
				jQuery( this ).find( 'i.visibility' ).click( function() {
					jQuery( this ).toggleClass( 'dashicons-visibility-faint' ).parents( 'div:eq(0)' ).toggleClass( 'invisible' );
				});

				jQuery( this ).on( 'click', 'i.ast-accordion', function( e ) {
					e.preventDefault();
					e.stopPropagation();

					control.expandSortableAccorditem( this, control );
				});

				jQuery( this ).on( 'click', 'i.dashicons-admin-page', function( e ) {

					e.preventDefault();
					e.stopPropagation();

					control.cloneSortableItem( this, control );
				});

				jQuery( this ).on( 'click', 'i.remove-sortable-item', function( e ) {

					e.preventDefault();
					e.stopPropagation();

					control.removeSortableItem( this, control );
				});

		}).click( function() {

			// Update value on click.
			control.updateValue();
		});
	},

	expandSortableAccorditem: function( instance, control ) {
		var parent_wrap = jQuery( instance ).closest( '.ast-sortable-item' ),
			option = parent_wrap.data( 'value' ),
			is_loaded = parent_wrap.find( '.ast-sortable-subcontrols' ).data('loaded'),
			parent_section = parent_wrap.parents('.control-section');

		if( is_loaded ) {
			parent_wrap.find( '.ast-sortable-subfields-wrap' ).show();
		} else {
			/* Close popup when another popup is clicked to open */
			var get_opened_subcontrol = parent_section.find('.ast-sortable-item.show');
			if( get_opened_subcontrol.length > 0 ) {
				get_opened_subcontrol.toggleClass( 'show' );
			}

			var nestedControls = [];
			Object.entries( control.params.ast_fields ).map( ( [ key, value ] ) => {
				if( value.linked && option == value.linked ) {
					nestedControls[ key ] = value;
				}
			});

			if( nestedControls ) {
				var modal_wrap = jQuery( astra.customizer.sortable_modal_tmpl );

				parent_wrap.find( '.ast-sortable-subcontrols' ).append( modal_wrap );
				parent_wrap.find( '.ast-fields-wrap' ).attr( 'data-control', control.name );
				control.ast_render_field( parent_wrap, nestedControls, control );

				parent_wrap.find( '.ast-sortable-subfields-wrap' ).show();
			}
		}

		jQuery( instance ).toggleClass( 'dashicons-arrow-up-alt2' ).closest( '.ast-sortable-item' ).toggleClass( 'show' );

		control.updateValue();
	},

	cloneSortableItem: function( instance, control ) {

		var parent_wrap = jQuery( instance ).closest( '.ast-sortable-item' ),
			option = parent_wrap.data( 'value' ),
			originalItem = parent_wrap.data( 'index' ),
			parentSection = parent_wrap.parents('.control-section'),
			clonnedSortableItem = parentSection.find('.ast-sortable-item[data-clonned-item]'),
			toBeClonedCounter = 1;

		if( clonnedSortableItem.length > 0 ) {
			toBeClonedCounter = clonnedSortableItem.length + 1;
		}

		var lastChar = parseInt( originalItem.slice(-1) ),
			indexValue = originalItem;
		if( lastChar ) {
			indexValue = originalItem.slice(0, -2);
		}

		control.addSortableVisibleInstance( option, toBeClonedCounter, control, indexValue );
		control.addListeners( control );

		control.updateValue();
	},

	removeSortableItem: function( instance, control ) {

		var parent_wrap = jQuery( instance ).closest( '.ast-sortable-item' ),
			originalItem = parent_wrap.data( 'index' );

		var mainIndexClonner = control.sortableContainer.find( '.ast-sortable-item[data-value="' + originalItem + '"]' ).find( '.dashicons-admin-page' );

		if( mainIndexClonner.length ) {
			mainIndexClonner.show();
		} else {
			control.sortableContainer.find( '.ast-sortable-item[data-value="' + originalItem + '"]' ).find( '.dashicons-visibility' ).after( '<i class="dashicons dashicons-admin-page" style="font-size: 16px"></i>' );
		}

		var sortableItems = control.sortableContainer.find( '.ast-sortable-item[data-index="' + originalItem + '"]' );
		if( sortableItems.length && 1 < sortableItems.length ) {
			parent_wrap.remove();
		}

		control.addListeners( control );

		control.updateValue();
	},

	addListeners: function( control ) {
		let removeTriggers = document.getElementsByClassName( 'remove-sortable-item' ),
			accordionTriggers = document.getElementsByClassName( 'clonned-sortable-accordion' ),
			visibilityTriggers = document.getElementsByClassName( 'clonned-sortable-visibility' );

		for( var i=0; i < removeTriggers.length; i++ ) {
			removeTriggers[i].onclick = function() {
				control.removeSortableItem( this, control );
			}
		}

		for( var i=0; i < accordionTriggers.length; i++ ) {
			accordionTriggers[i].onclick = function() {
				control.expandSortableAccorditem( this, control );
			}
		}

		for( var i=0; i < visibilityTriggers.length; i++ ) {
			visibilityTriggers[i].onclick = function() {
				jQuery( this ).toggleClass( 'dashicons-visibility-faint' ).parents( 'div:eq(0)' ).toggleClass( 'invisible' );
			}
		}
	},

	addClonedControl: function( option, control ) {

		const nestedControls = [];

		Object.entries( control.params.ast_fields ).map( ( [ key, value ] ) => {
			if( value.linked && option == value.linked ) {
				nestedControls[ key ] = value;
			}
		});
	},

	addSortableVisibleInstance: function( key, toBeClonedCounter, control, originalItem ) {
		var clonnedFrom = jQuery( '.ast-sortable-item[data-value="' + key + '"]' ),
			title = clonnedFrom.data( 'title' ),
			sortableNewID = '',
			newChoiceID = originalItem + '-' + toBeClonedCounter,
			limit = control.params.choices[ originalItem ].clone_limit;

		sortableNewID = '<div class="ast-sortable-item ui-sortable-handle" data-index="' + originalItem + '" data-clonned-item="' + toBeClonedCounter + '" data-value="' + newChoiceID + '" data-title="' + title + '"> ' + title + ' <i class="dashicons dashicons-visibility visibility clonned-sortable-visibility"></i>';
		sortableNewID += '<i class="dashicons dashicons-remove remove-sortable-item"></i>';
		sortableNewID += '<i class="dashicons clonned-sortable-accordion dashicons-arrow-down-alt2 ast-option ast-accordion"></i> <div class="ast-sortable-subcontrols" data-index="' + newChoiceID + '"></div';

		clonnedFrom.after( sortableNewID );

		var clonedSortableSameItems = control.sortableContainer.find( '.ast-sortable-item[data-index="' + originalItem + '"]' );
		if( clonedSortableSameItems.length ) {
			if( limit === clonedSortableSameItems.length ) {
				clonedSortableSameItems.each( function() {
					jQuery( this ).find( '.dashicons-admin-page' ).hide();
				});
			} else {
				clonedSortableSameItems.each( function() {
					jQuery( this ).find( '.dashicons-admin-page' ).show();
				});
			}
		}
	},

	isJsonString: function( str ) {

		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	},

	ast_render_field: function( wrap, fields, control_elem ) {

		var control = this,
			ast_field_wrap = wrap.find( '.ast-fields-wrap' ),
			fields_html = '',
			control_types = [],
			field_values = control.isJsonString( control_elem.params.value ) ? JSON.parse( control_elem.params.value ) : {},
			result = control.generateFieldHtml( fields, field_values );

		fields_html += result.html;

		_.each( result.controls, function (control_value, control_key) {
			control_types.push({
				key: control_value.key,
				value: control_value.value,
				name: control_value.name
			});
		});

		ast_field_wrap.html( fields_html );

		control.renderReactControl( fields, control );

		_.each( control_types, function( control_type, index ) {
			switch( control_type.key ) {
				case "ast-color":
					astraGetColor( "#customize-control-" + control_type.name )
					break;
				case "ast-background":
					astraGetBackground( "#customize-control-" + control_type.name )
					break;
				case "ast-responsive-background":
					astraGetResponsiveBgJs( control, "#customize-control-" + control_type.name )
					break;
				case "ast-responsive-color":
					astraGetResponsiveColorJs( control, "#customize-control-" + control_type.name )
					break;
				case "ast-responsive":
					astraGetResponsiveJs( control )
					break;
				case "ast-responsive-slider":
					astraGetResponsiveSliderJs( control )
					break;
				case "ast-responsive-spacing":
					astraGetResponsiveSpacingJs( control )
					break;
				case "ast-font":

					var googleFontsString = astra.customizer.settings.google_fonts;
					control.container.find( '.ast-font-family' ).html( googleFontsString );

					control.container.find( '.ast-font-family' ).each( function() {
						var selectedValue = jQuery(this).data('value');
						jQuery(this).val( selectedValue );

						var optionName = jQuery(this).data('name');

						// Set inherit option text defined in control parameters.
						jQuery("select[data-name='" + optionName + "'] option[value='inherit']").text( jQuery(this).data('inherit') );

						var fontWeightContainer = jQuery(".ast-font-weight[data-connected-control='" + optionName + "']");
						var weightObject = AstTypography._getWeightObject( AstTypography._cleanGoogleFonts( selectedValue ) );

						control.generateDropdownHtml( weightObject, fontWeightContainer );
						fontWeightContainer.val( fontWeightContainer.data('value') );
					});

					control.container.find( '.ast-font-family' ).selectWoo();
					control.container.find( '.ast-font-family' ).on( 'select2:select', function() {

						var value = jQuery(this).val();
						var weightObject = AstTypography._getWeightObject( AstTypography._cleanGoogleFonts( value ) );
						var optionName = jQuery(this).data( 'name' );
						var fontWeightContainer = jQuery(".ast-font-weight[data-connected-control='" + optionName + "']");

						control.generateDropdownHtml( weightObject, fontWeightContainer );

						var font_control = jQuery(this).parents( '.customize-control' ).attr( 'id' );
						font_control = font_control.replace( 'customize-control-', '' );

						control.container.trigger( 'ast_settings_changed', [ control, jQuery(this), value, font_control ] );

						var font_weight_control = fontWeightContainer.parents( '.customize-control' ).attr( 'id' );
						font_weight_control = font_weight_control.replace( 'customize-control-', '' );

						control.container.trigger( 'ast_settings_changed', [ control, fontWeightContainer, fontWeightContainer.val(), font_weight_control ] );

					});

					control.container.find( '.ast-font-weight' ).on( 'change', function() {

						var value = jQuery(this).val();

						name = jQuery(this).parents( '.customize-control' ).attr( 'id' );
						name = name.replace( 'customize-control-', '' );

						control.container.trigger( 'ast_settings_changed', [ control, jQuery(this), value, name ] );
					});

				break;
			}
		});

		wrap.find( '.ast-sortable-subcontrols' ).data( 'loaded', true );
	},

	generateDropdownHtml: function( weightObject, element ) {

		var currentWeightTitle  = element.data( 'inherit' ),
			weightOptions       = '',
			inheritWeightObject = [ 'inherit' ],
			weightObject        = jQuery.merge( inheritWeightObject, weightObject ),
			weightValue         = element.val() || '400',
			selected = '';

		astraTypo[ 'inherit' ] = currentWeightTitle;

		for ( var counter = 0; counter < weightObject.length; counter++ ) {

			if ( 0 === counter && -1 === jQuery.inArray( weightValue, weightObject ) ) {
				weightValue = weightObject[ 0 ];
				selected 	= ' selected="selected"';
			} else {
				selected = weightObject[ counter ] == weightValue ? ' selected="selected"' : '';
			}
			if( ! weightObject[ counter ].includes( "italic" ) ){
				weightOptions += '<option value="' + weightObject[ counter ] + '"' + selected + '>' + astraTypo[ weightObject[ counter ] ] + '</option>';
			}
		}

		element.html( weightOptions );
	},

	generateFieldHtml: function ( fields_data, field_values ) {

		var fields_html = '';
		var control_types = [];

		_.each(fields_data, function (attr, index) {
			if( undefined != attr ) {
				var new_value = ( wp.customize.control( attr.name ) ? wp.customize.control( attr.name ).setting.get() : '' ),
					control = attr.control,
					template_id = "customize-control-" + control + "-content",
					template = wp.template( template_id );

				var value = new_value || attr.default,
					dataAtts = '',
					input_attrs = '';

				attr.value = value;
				attr.label = attr.title;

				// Data attributes.
				_.each( attr.data_attrs, function( value, name ) {
					dataAtts += " data-" + name + " ='" + value + "'";
				});

				// Input attributes
				_.each( attr.input_attrs, function ( value, name ) {
					input_attrs += name + '="' + value + '" ';
				});

				attr.dataAttrs = dataAtts;
				attr.inputAttrs = input_attrs;

				control_types.push({
					key: control,
					value: value,
					name: attr.name
				});

				if ('ast-responsive' == control) {
					var is_responsive = 'undefined' == typeof attr.responsive ? true : attr.responsive;
					attr.responsive = is_responsive;
				}

				var control_full_name = attr.name.replace('[', '-');
				control_full_name = control_full_name.replace(']', '');

				fields_html += "<li id='customize-control-" + control_full_name + "' class='customize-control customize-control-" + attr.control + "' >";

				if( jQuery( '#tmpl-' + template_id ).length ) {
					fields_html += template(attr);
				}

				fields_html += '</li>';
			}
		});

		var result = new Object();

		result.controls = control_types;
		result.html     = fields_html;

		return result;
	},

	renderReactControl: function( fields, control ) {

		const reactControls = {
			'ast-background' : Background,
			'ast-responsive-background' : ResponsiveBackground,
			'ast-responsive-color' : ResponsiveColorComponent,
			'ast-color' : ColorComponent,
			'ast-border' : BorderComponent,
			'ast-responsive' : ResponsiveComponent,
			'ast-responsive-slider' : ResponsiveSliderComponent,
			'ast-slider' : SliderComponent,
			'ast-responsive-spacing' : ResponsiveSpacingComponent,
			'ast-select' : SelectComponent,
			'ast-divider' : DividerComponent,
			'ast-selector' : SelectorComponent,
			'ast-toggle': ToggleControl,
			'ast-text-input': TextInputControl,
			'ast-list-icons': ListIconsControl
		};

		if( astra.customizer.is_pro ) {
			reactControls['ast-box-shadow'] = BoxShadowComponent;
		}

		_.each(fields, function (attr, index) {
			if ( undefined != attr && 'ast-font' !== attr.control ) {
				var control_clean_name = attr.name.replace('[', '-');
				control_clean_name = control_clean_name.replace(']', '');
				var selector = '#customize-control-' + control_clean_name;

				var controlObject = wp.customize.control( 'astra-settings['+attr.name+']' );
				controlObject = control.getFinalControlObject( attr, controlObject );
				const ComponentName = reactControls[ attr.control ];

				ReactDOM.render(
					<ComponentName control={controlObject} customizer={ wp.customize }/>,
					jQuery( selector )[0]
				);
			}
		});
	},

	getFinalControlObject: function ( attr, controlObject ) {

		if ( undefined !== attr.choices && undefined === controlObject.params['choices'] ) {
			controlObject.params['choices'] = attr.choices;
		}
		if ( undefined !== attr.inputAttrs && undefined === controlObject.params['inputAttrs'] ) {
			controlObject.params['inputAttrs'] = attr.inputAttrs;
		}
		if ( undefined !== attr.link && undefined === controlObject.params['link'] ) {
			controlObject.params['link'] = attr.link;
		}
		if ( undefined !== attr.units && undefined === controlObject.params['units'] ) {
			controlObject.params['units'] = attr.units;
		}
		if ( undefined !== attr.linked_choices && undefined === controlObject.params['linked_choices'] ) {
			controlObject.params['linked_choices'] = attr.linked_choices;
		}
		if ( undefined !== attr.title && ( undefined === controlObject.params['label'] || '' === controlObject.params['label'] || null === controlObject.params['label'] ) ) {
			controlObject.params['label'] = attr.title;
		}
		if ( undefined !== attr.responsive && ( undefined === controlObject.params['responsive'] || '' === controlObject.params['responsive'] || null === controlObject.params['responsive'] ) ) {
			controlObject.params['responsive'] = attr.responsive;
		}
		if ( undefined !== attr.renderAs && ( undefined === controlObject.params['renderAs'] || '' === controlObject.params['renderAs'] || null === controlObject.params['renderAs'] ) ) {
			controlObject.params['renderAs'] = attr.renderAs;
		}

		return controlObject;
	},

	/**
	 * Updates the sorting list
	 */
	updateValue: function() {

		'use strict';

		let control = this,
		newValue = [];

		this.sortableContainer.find( '.ast-sortable-item:not(.invisible)' ).each( function() {
			newValue.push( jQuery( this ).data( 'value' ) );
		});

		newValue = [ ...new Set( newValue ) ];

		this.sortableContainer.find( '.ast-sortable-item[data-clone_tracker]' ).each( function() {
			var astraCloneOptionTracker = jQuery( this ).data( 'clone_tracker' ),
				indexKey = jQuery( this ).data( 'index' );
			if( '' != astraCloneOptionTracker ) {
				var clonedSortableSameItems = control.sortableContainer.find( '.ast-sortable-item[data-index="' + indexKey + '"]' );
				wp.customize.control( astraCloneOptionTracker ).setting.set( clonedSortableSameItems.length );
			}
		});

		control.setting.set( newValue );
	}
} );
