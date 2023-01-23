import React from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import FiltersTodo from "../../components/FiltersTodo/FiltersTodo";
import Container from "../../components/layouts/Container/Container";
import Search from "../../components/Search/Search";
import TodosList from "../../components/TodosList/TodosList";
import LifeTime from "../../features/LifeTime";
import useFilter from "../../hooks/useFilter";
import useTodos from "../../hooks/useTodos";
import "./Home.css";

const Home = () => {
	const { todosList, addTodo, makeDone, removeTodo, setTodoValue } = useTodos();
	const { resultArr, filter } = useFilter(todosList.todos);

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
						inArr={todosList.todos}
						filterFn={filter}
					/>
					<FiltersTodo filter={filter}/>
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
