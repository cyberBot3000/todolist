import React, { useContext } from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import FiltersTodo from '../../components/FiltersTodo/FiltersTodo';
import Container from '../../components/layouts/Container/Container';
import Search from '../../components/Search/Search';
import TodosList from '../../components/TodosList/TodosList';
import Context from '../../context/Context';
import useFilter from '../../hooks/useFilter';
import useTodos from '../../hooks/useTodos';
import { getPluralLocales, getSimpleLocales } from '../../lib/locales';
import './Home.css';

const Home = () => {
	const { todosList, addTodo, removeTodo, setTodoValue, toggleDone } =
		useTodos();
	const { resultArr, filter } = useFilter(todosList.todos);
	const { language } = useContext(Context);
	return (
		<div className='home'>
			<Container>
				<header className='home__header'>
					<div className='home__todos-select'>
						<Search
							className='home__search'
							filterFn={filter}
							inArr={todosList.todos}
						/>
						<FiltersTodo filter={filter} />
					</div>
					<div className='home__sub-heading'>
						{`${todosList.totalCount} ${getPluralLocales(
							'todo',
							todosList.totalCount,
							language
						)}, ${todosList.doneCount} ${getSimpleLocales(
							'done',
							language
						)}`}
					</div>
				</header>

				<TodosList
					toggleDone={toggleDone}
					removeTodo={removeTodo}
					setTodoValue={setTodoValue}
					todosList={{ ...todosList, todos: resultArr }}
				/>
				<AddTodo addTodo={addTodo} />
			</Container>
		</div>
	);
};

export default Home;
