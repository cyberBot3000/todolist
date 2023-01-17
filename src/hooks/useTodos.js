import { useEffect, useState } from "react";
import TodoMaker from "../utils/todoMaker";

const useTodos = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const todosList = {
        todos: todos,
        totalCount: todos.length,
        doneCount: todos.filter(elem => elem.done).length,
    }
	const todoFabrick = new TodoMaker();

	const addTodo = value => {
		setTodos([...todos, todoFabrick.make(value)]);
	};

	const removeTodo = id => {
		setTodos(todos.filter(elem => elem.id !== id));
	};

	const setTodoValue = (id, value) => {
		setTodos(
			todos.map(elem => {
				if (elem.id !== id) {
					return elem;
				}
				return { ...elem, value: value };
			})
		);
	};

	const makeDone = id => {
		setTodos(
			todos.map(elem => {
				if (elem.id !== id) {
					return elem;
				}
				return { ...elem, done: true };
			})
		);
	};
    return {todosList, addTodo, removeTodo, setTodoValue, makeDone};
};
export default useTodos;