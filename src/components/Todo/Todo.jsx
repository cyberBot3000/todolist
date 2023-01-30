import React, { useContext } from 'react';
import LifeTime from '../../features/LifeTime';
import useInputEdittor from '../../hooks/useInputEdittor';
import Context from '../../context/Context';
import TodoActions from '../TodoActions/TodoActions';
import InputTextLight from '../UI/inputs/InputTextLight';
import './Todo.css';

const Todo = ({ todoObj, removeTodo, setTodoValue, makeDone }) => {
	const { isEditting, editElemRef, editBtnClickHandler } = useInputEdittor(
		todoObj.value,
		() => {
			setTodoValue(todoObj.id, editElemRef.current.value);
		}
	);
	const { language } = useContext(Context);

	return (
		<div className='todo'>
			<main className='todo__main'>
				{isEditting ? (
					<InputTextLight
						ref={editElemRef}
						className='todo__edit-input'
					/>
				) : (
					<div
						className={`todo__value${
							todoObj.done ? ' todo__value_done' : ''
						}`}
					>
						{todoObj.value}
					</div>
				)}
				<TodoActions
					isEditting={isEditting}
					editBtnClickHandler={editBtnClickHandler}
					makeDone={makeDone}
					removeTodo={removeTodo}
				/>
			</main>
			<footer className='todo__footer'>
				<LifeTime
					className='todo__text todo__text_sub'
					createdAt={todoObj.createdAt}
					locale={language}
				/>
			</footer>
		</div>
	);
};

export default Todo;
