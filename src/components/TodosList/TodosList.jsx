import React from 'react';
import Todo from '../Todo/Todo';
import './TodosList.css';

const TodosList = ({
	todosList, removeTodo, setTodoValue, makeDone,
}) => (
	<div className="todos-list">
		{todosList.todos.length ? (
			todosList.todos.map((elem) => (
				<Todo
					key={elem.id}
					makeDone={makeDone}
					removeTodo={removeTodo}
					setTodoValue={setTodoValue}
					todoObj={elem}
				/>
			))
		) : (
			<h2 className="todos-list__message">you have no todos in this category</h2>
		)}
	</div>
);

export default TodosList;
