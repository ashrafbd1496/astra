import PropTypes from 'prop-types';

const SortableComponent = props => {

	let labelHtml = null,
		descriptionHtml = null;

	const {
		label,
		description,
		value,
		choices,
		inputAttrs
	} = props.control.params;

	if (label) {
		labelHtml = <span className="customize-control-title">{label}</span>;
	}

	if (description) {
		descriptionHtml = <span className="description customize-control-description">{description}</span>;
	}

	let visibleMetaHtml = Object.values(value).map(choiceID => {
		let html = '',
			title = typeof choices[choiceID] == 'string' ? choices[choiceID] : choices[choiceID].title;

		if (choices[choiceID]) {
			html = <>
				<div {...inputAttrs} key={choiceID} className='ast-sortable-item' data-value={choiceID}>
					{ title }
					<i className="dashicons dashicons-visibility visibility"></i>
					{ ( 'object' == typeof choices[choiceID] && choices[choiceID].clone ) && <i className="dashicons dashicons-admin-page"></i> }
					{ ( 'object' == typeof choices[choiceID] && choices[choiceID].is_parent ) &&
						<>
							<i className="dashicons dashicons-arrow-down-alt2 ast-option ast-accordion"></i>
							<div className="ast-sortable-subcontrols" data-index={choiceID}></div>
						</>
					}
				</div>
			</>;
		}
		return html;
	});

	let invisibleMetaHtml = Object.keys(choices).map(choiceID => {
		let html = '',
			title = typeof choices[choiceID] == 'string' ? choices[choiceID] : choices[choiceID].title;
		if (Array.isArray(value) && -1 === value.indexOf(choiceID)) {
			html = <div {...inputAttrs} key={choiceID} className='ast-sortable-item invisible' data-value={choiceID}>
				{ title }
				<i className="dashicons dashicons-visibility visibility"></i>
			</div>;
		}
		return html;
	});

	return <label className='ast-sortable'>
		{labelHtml}
		{descriptionHtml}
		<div className="sortable">
			{visibleMetaHtml}
			{invisibleMetaHtml}
		</div>
	</label>;

};

SortableComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default React.memo( SortableComponent );
