import TextInputComponent from './text-input-component';

export const textInputControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		ReactDOM.render( <TextInputComponent control={ control } />, control.container[0] );
	}
} );
