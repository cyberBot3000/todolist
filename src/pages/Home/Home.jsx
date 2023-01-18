import React, { useEffect, useRef } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import Container from "../../components/layouts/Container/Container";
import Search from "../../components/Search/Search";
import TodosList from "../../components/TodosList/TodosList";
import useSelection from "../../hooks/useSelection";
import useTodos from "../../hooks/useTodos";
import "./Home.css";

const Home = () => {
	const { todosList, addTodo, makeDone, removeTodo, setTodoValue } = useTodos();
	const searchTodoElem = useRef(null);
	const { resultArr, filter } = useSelection(todosList.todos);

	const search = () => {
		filter({
			value: todoVal => {
				return todoVal
					.toUpperCase()
					.includes(searchTodoElem.current.value.toUpperCase());
			},
		});
	};
	useEffect(() => {
		search();
	}, [todosList]);

	return (
		<div className="home">
			<Container>
				<div className="home__heading">
					<h1>Todo List</h1>
					<div className="home__general-info">
						{`${todosList.totalCount} todos, ${todosList.doneCount} done`}
					</div>
				</div>
				<div className="home__todos-select">
					<Search
						className={"home__search"}
						ref={searchTodoElem}
						onInput={search}
					/>
				</div>
				<TodosList
					todosList={{ ...todosList, todos: resultArr }}
					makeDone={makeDone}
					removeTodo={removeTodo}
					setTodoValue={setTodoValue}
				/>
				<AddTodo addTodo={addTodo} />
			</Container>
		</div>
	);
};

export default Home;
