import React, { useState } from "react";
import ButtonTextRounded from "../UI/buttons/ButtonTextRounded";
import "./FiltersTodo.css";

const FiltersTodo = ({ filter }) => {
	const [filtersByDone, setFiltersByDone] = useState([
		{
			name: "all",
			id: "filterByDone_1",
			active: true,
			filterVal: {
				done: () => {
					return true;
				},
			},
		},
		{
			name: "active",
			id: "filterByDone_2",
			active: false,
			filterVal: {
				done: currVal => {
					return currVal === false;
				},
			},
		},
		{
			name: "done",
			id: "filterByDone_3",
			active: false,
			filterVal: {
				done: currVal => {
					return currVal === true;
				},
			},
		},
	]);
	const filterByDoneClickHandler = e => {
		const clickedId = e.target.id;
		setFiltersByDone(
			filtersByDone.map(currFilter => {
				if (currFilter.id !== clickedId) {
					return { ...currFilter, active: false };
				}
				filter(currFilter.filterVal);
				return { ...currFilter, active: true };
			})
		);
	};
	return (
		<div className="todo-filters">
			{filtersByDone.map(currFilter => {
				return (
					<ButtonTextRounded
						className={`todo-filters__btn${
							currFilter.active ? " todo-filters__btn_active" : ""
						}`}
						id={currFilter.id}
						onClick={filterByDoneClickHandler}
						key={currFilter.id}
					>
						{currFilter.name}
					</ButtonTextRounded>
				);
			})}
		</div>
	);
};

export default FiltersTodo;
