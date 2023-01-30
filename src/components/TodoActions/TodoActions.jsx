import {
	faCheck,
	faMinus,
	faPen,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonIcon from '../UI/buttons/ButtonIcon';

const TodoActions = ({
	todoId,
	removeTodo,
	toggleDone,
	isEditting,
	editBtnClickHandler,
}) => (
	<div className='todo__actions'>
		<ButtonIcon
			className='todo__action-button'
			color='red'
			onClick={() => {
				removeTodo(todoId);
			}}
		>
			<FontAwesomeIcon icon={faTrashAlt} />
		</ButtonIcon>
		<ButtonIcon
			className='todo__action-button'
			color='green'
			onClick={editBtnClickHandler}
		>
			<FontAwesomeIcon icon={isEditting ? faCheck : faPen} />
		</ButtonIcon>
		<ButtonIcon
			className='todo__action-button'
			color='purple'
			onClick={() => {
				toggleDone(todoId);
			}}
		>
			<FontAwesomeIcon icon={faMinus} />
		</ButtonIcon>
	</div>
);

export default TodoActions;
