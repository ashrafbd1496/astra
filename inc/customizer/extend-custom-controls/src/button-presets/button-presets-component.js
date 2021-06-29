import PropTypes from "prop-types";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";

const ButtonPresetsComponent = (props) => {
	const { title, options } = props.control.params;
	const defaultValue = props.control.params.default;
	let value = props.control.setting.get();
	const option = props.control.params.name;

	const [state, setState] = value ? useState(value) : useState( defaultValue );

	const onChangePreset = (presetKey) => {
		let borderRadius = options[presetKey]["border-radius"];
		let btnBackgroundColor = options[presetKey]["button-bg-color"];
		let btnColor = options[presetKey]["button-color"];
		let borderWidth = options[presetKey]["border-size"];
		let padding = options[presetKey]["button-padding"];
		let borderColor = options[presetKey]["border-color"];

		/// Padding
		props.customizer
			.control("astra-settings[theme-button-padding]")
			.setting.set(padding);

		props.customizer
			.control("astra-settings[theme-button-padding]")
			.renderContent();

		// Border Radius.
		props.customizer
			.control("astra-settings[button-radius]")
			.setting.set(borderRadius);

		// Border size.
		props.customizer
			.control("astra-settings[theme-button-border-group-border-size]")
			.setting.set(borderWidth);

		// Button Background color
		props.customizer
			.control("astra-settings[button-bg-color]")
			.setting.set(btnBackgroundColor);

		props.customizer
			.control("astra-settings[button-color]")
			.setting.set(btnColor);

		props.customizer.control( "astra-settings[theme-button-border-group-border-color]" ).setting.set( borderColor );

		setState( presetKey );
		props.control.setting.set( presetKey );

		var event = new CustomEvent("AstRemoteUpdateState", {
			detail: "btn-preset",
		});
		document.dispatchEvent(event);
	};

	const renderBtnPresetHtml = () => {
		let htmlContent = Object.entries(options).map(([key, presetData]) => {
			return (
				<div
					className={
						"ast-btn-style-item " + (state === key ? "active" : "")
					}
					dangerouslySetInnerHTML={{
						__html: window.svgIcons[presetData.src],
					}}
					key={key}
					onClick={() => onChangePreset(key)}
				></div>
			);
		});

		return htmlContent;
	};

	return (
		<>
			<label>
				<span className="customize-control-title">{title}</span>
			</label>
			<div className="ast-btn-preset-wrap">{renderBtnPresetHtml()}</div>
		</>
	);
};

ButtonPresetsComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default React.memo(ButtonPresetsComponent);