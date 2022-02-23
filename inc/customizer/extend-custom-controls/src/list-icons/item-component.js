import { useState , useEffect } from 'react';

const { __ } = wp.i18n;
const {Dashicon, Tooltip, TextControl, Button } = wp.components;
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import astIcons from "../../../../../assets/svg/ast-social-icons"
import renderSVG from "../../../../assets/js/ast-render-svg"


let svg_icons = Object.keys( astIcons )

const ItemComponent = props => {

	const Icons = window.svgIcons;

	const [state, setState] = useState({
		open: false,
	});

	const[ selectedIcon , setSelectedIcon ] = useState(
		props.item.icon
	)

	useEffect(() => {
		setSelectedIcon( Icons[props.item.icon] );
	}, []);

	return <div className="ahfb-sorter-item" data-id={props.item.id} key={props.item.id}>
		<div className="ahfb-sorter-item-panel-header" onClick={e => {
			e.stopPropagation();
			setState((prevState => ({
				...prevState,
				open: state.open ? false : true
			})))
		}}>
			<Tooltip text={__('Toggle Item Visiblity', 'astra')}>
				<Button className="ahfb-sorter-visiblity">
					<span dangerouslySetInnerHTML={{
						__html: selectedIcon
					}}/>
				</Button>
			</Tooltip>
			<span className="ahfb-sorter-title">{ __('Feature Item', 'astra') }</span>
			<Button className={`ast-sorter-item-expand ${props.item.enabled ? 'item-is-visible' : 'item-is-hidden'}`}
					onClick={e => {
						e.stopPropagation();
						props.cloneItem(props.item);

						let featuredItems = jQuery( e.target ).closest( '.ahfb-sorter-drop-social_item_group' ).find( '.ahfb-sorter-item' );
						featuredItems.find( '.ahfb-sorter-item-remove.hide' ).toggleClass( 'hide' );
					}}>
				<Dashicon icon="admin-page"/>
			</Button>
			<Button className={`ahfb-sorter-item-remove ${props.item.enabled ? 'item-is-visible' : 'item-is-hidden'}`} isDestructive onClick={e => {
				e.stopPropagation();
				props.removeItem(props.index);

				let featuredItems = jQuery( e.target ).closest( '.ahfb-sorter-drop-social_item_group' ).find( '.ahfb-sorter-item' );
				if( ( parseInt( featuredItems.length ) - 1 ) == 1 ) {
					featuredItems.find( '.ahfb-sorter-item-remove' ).toggleClass( 'hide' );
				}
			}}>
				<Dashicon icon="no-alt"/>
			</Button>
			<Button className={`ahfb-sorter-item-expand visibility-item ${props.item.enabled ? 'item-is-visible' : 'item-is-hidden'}`}
					onClick={e => {
						e.stopPropagation();
						props.toggleEnabled(props.item.enabled ? false : true, props.index);
					}}>
				<Dashicon icon="visibility"/>
			</Button>
		</div>
		{ state.open && <div className="ahfb-sorter-item-panel-content">
			<TextControl label={__('Text', 'astra')} value={props.item.label ? props.item.label : ''}
						 onChange={value => {
							 props.onChangeLabel(value, props.index);
						 }}/>
			<p className="ast-social-icon-picker-label">{ __( "Icon" ) }</p>
			<FontIconPicker
				icons={svg_icons}
				renderFunc= {renderSVG}
				theme="default"
				value={props.item.icon}
				onChange={ value => {
					props.onChangeIcon(value, props.index);
					setSelectedIcon( Icons[value] );
				} }
				isMulti={false}
				noSelectedPlaceholder= { __( 'Select Icon', 'astra' ) }
			/>
		</div>}
	</div>;
};
export default ItemComponent;
