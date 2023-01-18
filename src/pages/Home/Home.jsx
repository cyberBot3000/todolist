import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/layouts/Container/Container";
import "./Home.css";
import useTodos from "../../hooks/useTodos";
import TodosList from "../../components/TodosList/TodosList";
import AddTodo from "../../components/AddTodo/AddTodo";
import Search from "../../components/Search/Search";
import useSelection from "../../hooks/useSelection";

const Home = () => {
	const { todosList, addTodo, makeDone, removeTodo, setTodoValue } = useTodos();
	const searchElem = useRef(null);
	const {resultArr, searchStr, filter} = useSelection(todosList.todos);
	const searchHandler = () => {
		searchStr('value', searchElem.current.value);
	};
	useEffect(() => {
		searchStr('value', searchElem.current.value);
		filter({});
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
				<Search
					className={"home__search"}
					ref={searchElem}
					onInput={() => {
						searchHandler();
					}}
				/>
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
