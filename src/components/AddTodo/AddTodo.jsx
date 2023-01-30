import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useRef } from 'react';
import Context from '../../context/Context';
import { getSimpleLocales } from '../../lib/locales';
import ButtonIcon from '../UI/buttons/ButtonIcon';
import InputTextLight from '../UI/inputs/InputTextLight';
import './AddTodo.css';

const AddTodo = ({ addTodo }) => {
	const newTodoInput = useRef();
	const submitHandler = (e) => {
		e.preventDefault();
		if (newTodoInput.current.value === '') {
			return;
		}
		addTodo(newTodoInput.current.value);
		newTodoInput.current.value = '';
	};
	const { language } = useContext(Context);
	return (
		<form className='add-todo' onSubmit={submitHandler}>
			<h3 className='add-todo__heading'>
				{getSimpleLocales('new_todo', language)}
			</h3>
			<div className='add-todo__edit-field'>
				<InputTextLight
					ref={newTodoInput}
					className='add-todo__input'
				/>
				<ButtonIcon
					type='submit'
					className='add-todo__submit-btn'
					color='blue'
				>
					<FontAwesomeIcon icon={faCaretUp} />
				</ButtonIcon>
			</div>
		</form>
	);
};

export default AddTodo;
