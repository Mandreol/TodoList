import React, { Fragment } from "react";
import "../style_components/checkBox.css";

const CheckBox = ({ data, onChange }) => {
	const { id, description, done } = data;
	return (
		<Fragment>
			<label className="checkBox">
				<input
					className="checked"
					name={id}
					type="checkbox"
					defaultChecked={done}
					onChange={onChange}
				/>
				<div class="checkmark"></div>
				<div className="todo__text">{description}</div>
			</label>
		</Fragment>
	);
};

export default CheckBox;
