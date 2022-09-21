import React, { Fragment } from "react";
import "../style_components/checkBox.css";

const CheckBox = ({ data, onChange }) => {
	const { id, description, done } = data;
	return (
		<div className="checkBox">
			<label className="checkBox__leable">
				<input
					className="checked"
					name={id}
					type="checkbox"
					defaultChecked={done}
					onChange={onChange}
				/>
				<div className="checkmark"></div>
			</label>
			<div className="todo__text">{description}</div>
		</div>
	);
};

export default CheckBox;
