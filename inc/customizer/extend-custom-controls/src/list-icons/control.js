import ListIconsComponent from './list-icons-component.js';

export const ListIconsControl = wp.customize.astraControl.extend( {
	renderContent: function renderContent() {
		let control = this;
		ReactDOM.render( <ListIconsComponent control={ control } />, control.container[0] );
	}
} );
