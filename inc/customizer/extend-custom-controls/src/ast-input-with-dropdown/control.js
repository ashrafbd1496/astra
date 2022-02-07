import InputWithDropdown from './input-with-dropdown-component.js';

export const inputWithDropdown = wp.customize.astraControl.extend( {
	renderContent: function renderContent() {
		let control = this;
		ReactDOM.render( <InputWithDropdown control={ control } />, control.container[0] );
	}
} );