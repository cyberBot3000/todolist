import React, { useRef, useState } from "react";
import Container from "../../components/layouts/Container/Container";
import Todo from "../../components/Todo/Todo";
import ButtonIcon from "../../components/UI/buttons/ButtonIcon";
import InputTextLight from "../../components/UI/inputs/InputTextLight";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import TodoMaker from "../../utils/todoMaker";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	const [todos, setTodos] = useState([]);
	const todosCount = todos.length;
	const todosDoneCount = todos.filter(elem => elem.done).length;
	const todoFabrick = new TodoMaker();

	const newTodoInput = useRef();

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

	return (
		<div className="home">
			<Container>
				<div className="home__heading">
					<h1>Todo List</h1>
					<div className="home__general-info">
						{`${todosCount} todos, ${todosDoneCount} done`}
					</div>
				</div>
				<div className="home__todo-list">
					{todos.map(elem => (
						<Todo
							todoObj={{...elem, value: elem.value}}
							setTodoValue={setTodoValue}
							removeTodo={removeTodo}
							makeDone={makeDone}
						/>
					))}
				</div>
				<div className="home__add-todo">
					<h3 className="home__add-todo-heading">new todo:</h3>
					<div className="home__add-todo-edit-field">
						<InputTextLight
							ref={newTodoInput}
							className="home__add-todo-input"
						/>
						<ButtonIcon
							className="home__add-todo-submit-btn"
							color="blue"
							onClick={() => {
								addTodo(newTodoInput.current.value);
								newTodoInput.current.value = "";
							}}
						>
							<FontAwesomeIcon icon={faCaretUp} />
						</ButtonIcon>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
