import React from "react";
import Container from "../../components/layouts/Container/Container";
import "./Home.css";
import useTodos from "../../hooks/useTodos";
import TodosList from "../../components/TodosList/TodosList";
import AddTodo from "../../components/AddTodo/AddTodo";

const Home = () => {
	const { todosList, addTodo, makeDone, removeTodo, setTodoValue } = useTodos();

	return (
		<div className="home">
			<Container>
				<div className="home__heading">
					<h1>Todo List</h1>
					<div className="home__general-info">
						{`${todosList.totalCount} todos, ${todosList.doneCount} done`}
					</div>
				</div>
				<TodosList
					todosList={todosList}
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
