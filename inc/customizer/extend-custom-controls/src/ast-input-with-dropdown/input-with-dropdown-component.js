import PropTypes from 'prop-types';
import { DropdownMenu, TextControl } from '@wordpress/components';
import { plus } from '@wordpress/icons';
import { useState } from '@wordpress/element';

const InputWithDropdown = props => {

	const [propValue, setPropValue] = useState( props.control.setting.get() );

	const {
		label,
		choices
	} = props.control.params;

	const onInputChange = ( value ) => {
		setPropValue( value );
		props.control.setting.set( value );
	}

	const onDropDownSelect = (value) => {
		setPropValue( propValue + value );
		props.control.setting.set( propValue + value );
	}

	let htmlLabel = null;

	if (label) {
		htmlLabel = <span className="customize-control-title">{label}</span>;
	}

	let dropDownControlOptions = {};
	dropDownControlOptions = Object.keys( choices ).map(key =>
		dropDownControlOptions[key] = {
			title: choices[key],
			onClick: () => onDropDownSelect( key )
		}
	)

	return <>
		{htmlLabel}
		<div className="ast-input-with-dropdown-wrapper">
			<TextControl type="text" value={ propValue } onChange={ onInputChange } />
			<DropdownMenu
				icon={ plus }
				label="Select Shortcodes"
				controls={ [dropDownControlOptions] }
			/>
		</div>
	</>;

};

InputWithDropdown.propTypes = {
	control: PropTypes.object.isRequired
};

export default React.memo( InputWithDropdown );
