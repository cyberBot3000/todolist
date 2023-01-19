import { useEffect, useState } from "react";

const useSelection = fromArr => {
	const [resultArr, setResultArr] = useState(fromArr);
	const [allFilters, setAllFilters] = useState({});

	useEffect(() => {
		setResultArr(
			fromArr.filter(elem => {
				let result = true;
				for (let key in allFilters) {
					checkValidProp(elem, key);
					const filterFunc = allFilters[key];
					result = result && filterFunc(elem[key]);
				}
				return result;
			})
		);
	}, [allFilters]);

	const checkValidProp = (obj, prop) => {
		if (obj.hasOwnProperty(prop) === false) {
			throw new TypeError("object has no such property to search by");
		}
		return true;
	};
	const filter = queryObj => {
		setAllFilters({...allFilters, ...queryObj});
	};

	return { resultArr, filter };
};

export default useSelection;
