import React from "react";
import { useState } from "react";
import "../style_components/button.css";
import "../style_components/inputForm.css";
const InputForm = ({ handleAddItem }) => {
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddItem({
			done: false,
			id: (+new Date()).toString(),
			description,
		});
		setDescription("");
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>{" "}
			<label className="user-label">Task</label>
			<button className="button" disabled={description ? "" : "disabled"}>
				Add
			</button>
		</form>
	);
};

export default InputForm;
