import React from "react";
import Todo from "../Todo/Todo";
import "./TodosList.css";
const TodosList = ({ todosList, removeTodo, setTodoValue, makeDone }) => {
	return (
		<div className="todos-list">
			{todosList.todos.length ? (
				todosList.todos.map(elem => (
					<Todo
						key={elem.id}
						todoObj={elem}
						setTodoValue={setTodoValue}
						removeTodo={removeTodo}
						makeDone={makeDone}
					/>
				))
			) : (
				<h2 className="todos-list__message">you have no todos in this category</h2>
			)}
		</div>
	);
};

export default TodosList;
