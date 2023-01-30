import { useEffect, useState } from 'react';

const useFilter = (fromArr) => {
	const [resultArr, setResultArr] = useState(fromArr);
	const [allFilters, setAllFilters] = useState({});

	const checkValidProp = (obj, prop) => {
		if (obj.hasOwnProperty(prop) === false) {
			throw new TypeError('object has no such property to search by');
		}
		return true;
	};

	useEffect(() => {
		setResultArr(
			fromArr.filter((elem) => {
				let result = true;
				Object.keys(allFilters).forEach((key) => {
					checkValidProp(elem, key);
					const filterFunc = allFilters[key];
					result = result && filterFunc(elem[key]);
				});
				return result;
			})
		);
	}, [fromArr, allFilters]);

	const filter = (queryObj) => {
		setAllFilters({ ...allFilters, ...queryObj });
	};

	return { resultArr, filter };
};

export default useFilter;
