import PropTypes from 'prop-types';
import { useState } from 'react';

const TextInputComponent = props => {
	const getText = ( '' === props.control.setting.get() ) ? '' : props.control.setting.get();
	const [ textState, setTextState ] = useState( getText );
	let htmlLabel = null;

	if ( props.control.params.label ) {
		htmlLabel = <span className="customize-control-title">{props.control.params.label}</span>;
	}

	const handleChange = event => {
		props.control.setting.set(event.target.value);
		setTextState( event.target.value );
	};

	return <label className='customizer-text'>
		{ htmlLabel }
		<input
			type="text"
			value={ textState }
			onChange={ handleChange }
		/>
	</label>;
};
TextInputComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default React.memo( TextInputComponent );
