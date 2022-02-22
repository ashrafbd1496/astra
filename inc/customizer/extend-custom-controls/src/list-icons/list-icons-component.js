import PropTypes from 'prop-types';
import {ReactSortable} from "react-sortablejs";
import ItemComponent from './item-component';
import {useEffect, useState} from 'react';

const {__} = wp.i18n;

const ListIconsComponent = props => {

	let value = props.control.setting.get();
	let baseDefault = {
		'items': [
			{
				'id': 'facebook',
				'enabled': true,
				'icon': 'facebook',
				'label': 'Facebook',
			},
			{
				'id': 'twitter',
				'enabled': true,
				'icon': 'twitter',
				'label': 'Twitter',
			}
		],
	};
	let defaultValue = props.control.params.default ? {
		...baseDefault,
		...props.control.params.default
	} : baseDefault;

	value = value ? {
		...defaultValue,
		...value
	} : defaultValue;

	let defaultParams = {
		'group': 'social_item_group',
		'options': [
			{value: 'facebook', label: __('Facebook', 'astra')},
			{value: 'twitter', label: __('Twitter', 'astra')},
			{value: 'instagram', label: __('Instagram', 'astra')},
			{value: 'youtube', label: __('YouTube', 'astra')},
			{value: 'facebook_group', label: __('Facebook Group', 'astra')},
			{value: 'vimeo', label: __('Vimeo', 'astra')},
			{value: 'pinterest', label: __('Pinterest', 'astra')},
			{value: 'linkedin', label: __('Linkedin', 'astra')},
			{value: 'medium', label: __('Medium', 'astra')},
			{value: 'wordpress', label: __('WordPress', 'astra')},
		].sort((a, b) => {
			if (a.value < b.value) {
				return -1;
			}
			if (a.value > b.value) {
				return 1;
			}
			return 0;
		})
	};

	let controlParams = props.control.params.input_attrs ? {
		...defaultParams,
		...props.control.params.input_attrs,
	} : defaultParams;

	let availibleSocialOptions = [];
	controlParams.options.map((option) => {
		if (!value.items.some(obj => obj.id === option.value)) {
			availibleSocialOptions.push(option);
		}
	});

	const [state, setState] = useState({
		value: value,
		isVisible: false,
		control: (undefined !== availibleSocialOptions[0] && undefined !== availibleSocialOptions[0].value ? availibleSocialOptions[0].value : ''),
		icon : ''
	});

	useEffect( () => {
		// If settings are changed externally.
		setState(prevState => ({
			...prevState,
			value: props.control.setting.get()
		}));


	}, [props]);

	const updateValues = (value) => {
		props.control.setting.set({
			...props.control.setting.get(),
			...value,
			flag: !props.control.setting.get().flag
		});
	};

	const onDragStop = () => {
		let dropzones = document.querySelectorAll('.ahfb-builder-area');
		let i;

		for (i = 0; i < dropzones.length; ++i) {
			dropzones[i].classList.remove('ahfb-dragging-dropzones');
		}
	};

	const saveArrayUpdate = (value, index) => {
		let updateState = state.value;
		let items = updateState.items;
		const newItems = items.map((item, thisIndex) => {

			if (index === thisIndex) {
				item = {
					...item,
					...value
				};
			}
			return item;
		});

		updateState.items = newItems;
		setState(prevState => ({
			...prevState,
			value: updateState
		}));
		updateValues(updateState);
	};

	const toggleEnableItem = (value, itemIndex) => {
		saveArrayUpdate({
			enabled: value
		}, itemIndex);
	};

	const onChangeLabel = (value, itemIndex) => {
		saveArrayUpdate({
			label: value
		}, itemIndex);
	};

	const removeItem = (itemIndex) => {

		let updateState = state.value;
		let update = updateState.items;
		let updateItems = [];
		{
			update.length > 0 && update.map((old, index) => {
				if (itemIndex !== index) {
					updateItems.push(old);
				}
			});
		}
		updateState.items = updateItems;
		setState(prevState => ({
			...prevState,
			value: updateState
		}));
		updateValues(updateState);
	};

	const addItem = (item) => {
		setState(prevState => ({
			...prevState,
			isVisible: false
		}));
		let updateState = state.value;
		let update = updateState.items;
		let getMaxId = _.pluck(value['items'], 'id');

		getMaxId = getMaxId.map(x => x.replace('item-', ''));
		getMaxId = getMaxId.sort((a,b)=>a-b).reverse()[0];
		getMaxId = Number(getMaxId) + 1;

		let newItem = {
			'id': 'item-' + getMaxId,
			'enabled': true,
			'icon': item['icon'],
			'label': item['label']
		};
		update.push(newItem);
		updateState.items = update;
		let availibleSocialOptions = [];
		controlParams.options.map(option => {
			if (!update.some(obj => obj.id === option.value)) {
				availibleSocialOptions.push(option);
			}
		});

		setState(prevState => ({
			...prevState,
			control: (undefined !== availibleSocialOptions[0] && undefined !== availibleSocialOptions[0].value ? availibleSocialOptions[0].value : '')
		}));
		setState(prevState => ({
			...prevState,
			value: updateState
		}));

		updateValues(updateState);
	};

	const onDragEnd = (items) => {
		let updateState = state.value;
		let update = updateState.items;
		let updateItems = [];
		{
			items.length > 0 && items.map(item => {
				update.filter(obj => {
					if (obj.id === item.id) {
						updateItems.push(obj);
					}
				});
			});
		}
		;

		if (!arraysEqual(update, updateItems)) {
			update.items = updateItems;
			updateState.items = updateItems;
			setState(prevState => ({
				...prevState,
				value: updateState
			}));
			updateValues(updateState);
		}
	};

	const arraysEqual = (a, b) => {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;
		for (let i = 0; i < a.length; ++i) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	};

	const currentList = typeof state.value != "undefined" && state.value.items != null && state.value.items.length != null && state.value.items.length > 0 ? state.value.items : [];
	let theItems = [];
	{
		currentList.length > 0 && currentList.map(item => {
			theItems.push({
				id: item.id
			});
		});
	}
	;


	const onChangeIcon = ( icon, itemIndex ) => {
		saveArrayUpdate({
			icon: icon
		}, itemIndex);
	};

	return <div className="ahfb-control-field ahfb-sorter-items">
		<div className="ahfb-sorter-row">
			<ReactSortable animation={100} onStart={() => onDragStop()} onEnd={() => onDragStop()}
						   group={controlParams.group}
						   className={`ahfb-sorter-drop ahfb-sorter-sortable-panel ahfb-sorter-drop-${controlParams.group}`}
						   handle={'.ahfb-sorter-item-panel-header'} list={theItems}
						   setList={newState => onDragEnd(newState)}>
				{currentList.length > 0 && currentList.map((item, index) => {
					return <ItemComponent removeItem={remove => removeItem(remove)}
										  toggleEnabled={(enable, itemIndex) => toggleEnableItem(enable, itemIndex)}
										  cloneItem={() => addItem(item)}
										  onChangeLabel={(label, itemIndex) => onChangeLabel(label, itemIndex)}
										  onChangeIcon={( icon, index ) => onChangeIcon( icon, index ) }
										  key={item.id} index={index} item={item} controlParams={controlParams}/>;

				})}
			</ReactSortable>
		</div>
	</div>;

};

ListIconsComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ListIconsComponent;
