import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen, faCheck, faMinus} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import ButtonIcon from "../UI/buttons/ButtonIcon";
import "./Todo.css";
import InputTextLight from "../UI/inputs/InputTextLight";

const Todo = ({ todoObj, removeTodo, setTodoValue, makeDone }) => {
	const [isEditting, setIsEditting] = useState(false);
    const editElem = useRef();
    useEffect(() => {
        if(!editElem.current){
            return;
        }
        editElem.current.focus();
        editElem.current.value = todoObj.value;
    }, [isEditting]);
	return (
		<div className="todo">
			{isEditting ? (

				<InputTextLight className="todo__edit-input" ref={editElem}/>
			) : (
				<div className={`todo__value${todoObj.done ? ' todo__value_done' : ''}`}>{todoObj.value}</div>
			)}
			<div className="todo__actions">
				<ButtonIcon
					className="todo__action-button"
					color="red"
					onClick={() => {
						removeTodo(todoObj.id);
					}}
				>
					<FontAwesomeIcon icon={faTrashAlt} />
				</ButtonIcon>
				<ButtonIcon
					className="todo__action-button"
					color="green"
					onClick={() => {
                        if(isEditting){
                            setTodoValue(todoObj.id, editElem.current.value);
                        }
						setIsEditting(!isEditting);
					}}
				>
					<FontAwesomeIcon icon={isEditting ? faCheck : faPen} />
				</ButtonIcon>
                <ButtonIcon className='todo__action-button' color="purple" onClick={()=>{makeDone(todoObj.id)}}>
                    <FontAwesomeIcon icon={faMinus}/>
                </ButtonIcon>
			</div>
		</div>
	);
};

export default Todo;
