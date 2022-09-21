import React from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import { useState } from "react";
const Container = () => {
	const [list, setList] = useState([]);
	const handleAddItem = (addItem) => {
		setList([...list, addItem]);
	};
	return (
		<div className="container">
			<InputForm handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Container;
