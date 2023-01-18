import { useEffect, useRef, useState } from "react";
import deepIncludes from "../utils/deepIncludes";

const useSelection = fromArr => {
	const [resultArr, setResultArr] = useState(fromArr);
	const [filteredArr, setFilteredArr] = useState(fromArr);
	const [searchedArr, setSearchedArr] = useState(fromArr);

	const checkValidProp = (obj, prop) => {
		if (obj.hasOwnProperty(prop) === false) {
			throw new TypeError("object has no such property to search by");
		}
		return true;
	};

	const searchStr = (by, valueToSearch) => {
		setSearchedArr(
			fromArr.filter(elem => {
				checkValidProp(elem, by);
				return elem[by].toString().toUpperCase().includes(valueToSearch.toString().toUpperCase());
			})
		);
	};
	const filter = queryObj => {
		setFilteredArr(
			fromArr.filter(elem => {
				for (let key in queryObj) {
					checkValidProp(elem, key);
					return queryObj[key](elem[key]);
				}
				return true;
			})
		);
	};
	useEffect(() => {
		console.log(searchedArr, filteredArr);
		setResultArr(filteredArr.filter(elem => deepIncludes(searchedArr, elem)));
	}, [filteredArr, searchedArr]);

	return { resultArr, searchStr, filter };
};

export default useSelection;
