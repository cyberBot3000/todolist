import React, { useContext } from 'react';
import Context from '../../context/Context';
import { getSimpleLocales } from '../../lib/locales';
import RadioButtonsGroup from '../UI/radioGroups/RadioButtonsGroup';
import './FiltersTodo.css';

const FiltersTodo = ({ filter }) => {
	const { language } = useContext(Context);
	const byDoneBtns = [
		{
			id: 'todo-filters-radio-btn_1',
			children: getSimpleLocales('filter_button_all', language),
			onClick: () => {
				filter({ done: () => true });
			},
		},
		{
			children: getSimpleLocales('filter_button_active', language),
			id: 'todo-filters-radio-btn_2',
			onClick: () => {
				filter({ done: (done) => !done });
			},
		},
		{
			children: getSimpleLocales('filter_button_done', language),
			id: 'todo-filters-radio-btn_3',
			onClick: () => {
				filter({ done: (done) => done });
			},
		},
	];
	return (
		<div className='todo-filters'>
			<RadioButtonsGroup
				buttonsPropsArr={byDoneBtns}
				className='todo-filters__radio-group'
				name='filter-todo-by-done'
			/>
		</div>
	);
};

export default FiltersTodo;
