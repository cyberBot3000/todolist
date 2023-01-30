import { useEffect, useState } from 'react';
import TodoMaker from '../utils/todoMaker';

const useTodos = () => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || []
	);

	const [todosList, setTodosList] = useState({
		todos: [],
		totalCount: 0,
		doneCount: 0,
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	useEffect(() => {
		setTodosList({
			todos,
			totalCount: todos.length,
			doneCount: todos.filter((elem) => elem.done).length,
		});
	}, [todos]);

	const todoFabrick = new TodoMaker();

	const addTodo = (value) => {
		setTodos([...todos, todoFabrick.make(value)]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((elem) => elem.id !== id));
	};

	const setTodoValue = (id, value) => {
		setTodos(
			todos.map((elem) => {
				if (elem.id !== id) {
					return elem;
				}
				return { ...elem, value };
			})
		);
	};

	const toggleDone = (id) => {
		setTodos(
			todos.map((elem) => {
				if (elem.id !== id) {
					return elem;
				}
				return { ...elem, done: !elem.done };
			})
		);
	};
	return {
		todosList,
		addTodo,
		removeTodo,
		setTodoValue,
		toggleDone,
	};
};
export default useTodos;
