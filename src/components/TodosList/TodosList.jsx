import React, { useContext } from 'react';
import Context from '../../context/Context';
import { getSimpleLocales } from '../../lib/locales';
import Todo from '../Todo/Todo';
import './TodosList.css';

const TodosList = ({ todosList, removeTodo, setTodoValue, toggleDone }) => {
	const { language } = useContext(Context);
	return (
		<div className='todos-list'>
			{todosList.todos.length ? (
				todosList.todos.map((elem) => (
					<Todo
						key={elem.id}
						toggleDone={toggleDone}
						removeTodo={removeTodo}
						setTodoValue={setTodoValue}
						todoObj={elem}
					/>
				))
			) : (
				<h2 className='todos-list__message'>
					{getSimpleLocales('no_todos_in_cat', language)}
				</h2>
			)}
		</div>
	);
};

export default TodosList;
