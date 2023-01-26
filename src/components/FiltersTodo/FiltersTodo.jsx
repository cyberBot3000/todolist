import React from 'react';
import RadioButtonsGroup from '../UI/radioGroups/RadioButtonsGroup';
import './FiltersTodo.css';

const FiltersTodo = ({ filter }) => {
	const byDoneBtns = [
		{
			id: 'todo-filters-radio-btn_1',
			children: 'all',
			onClick: () => {
				filter({ done: () => true });
			},
		},
		{
			children: 'active',
			id: 'todo-filters-radio-btn_2',
			onClick: () => {
				filter({ done: (done) => !done });
			},
		},
		{
			children: 'done',
			id: 'todo-filters-radio-btn_3',
			onClick: () => {
				filter({ done: (done) => done });
			},
		},

	];
	return (
		<div className="todo-filters">
			<RadioButtonsGroup
				buttonsPropsArr={byDoneBtns}
				className="todo-filters__radio-group"
				name="filter-todo-by-done"
			/>
		</div>
	);
};

export default FiltersTodo;
