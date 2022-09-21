import React from "react";
import CheckBox from "./CheckBox";

const TaskList = ({ list, setList }) => {
	const onChangeStatus = (e) => {
		const { name, checked } = e.target;
		const updateList = list.map((task) => ({
			...task,
			done: task.id === name ? checked : task.done,
		}));
		setList(updateList);
	};

	const onClickRemoveItem = (e) => {
		const updateList = list.filter((task) => !task.done);
		setList(updateList);
	};
	const tasks = list.map((item) => (
		<CheckBox key={item.id} data={item} onChange={onChangeStatus} />
	));

	return (
		<div className="todo-list">
			{list.length ? tasks : "No tasks"}
			{list.length ? (
				<button className="button checkBox-bottom" onClick={onClickRemoveItem}>
					Delete all done
				</button>
			) : null}
		</div>
	);
};

export default TaskList;
