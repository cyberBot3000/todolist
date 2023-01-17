import React from "react";
import Todo from "../Todo/Todo";
import "./TodosList.css";
const TodosList = ({ todosList, removeTodo, setTodoValue, makeDone }) => {
	return (
		<div className="todos-list">
			{todosList.totalCount ? (
				todosList.todos.map(elem => (
					<Todo
						todoObj={elem}
						setTodoValue={setTodoValue}
						removeTodo={removeTodo}
						makeDone={makeDone}
					/>
				))
			) : (
				<h2 className="todos-list__message">you have no todos</h2>
			)}
		</div>
	);
};

export default TodosList;
