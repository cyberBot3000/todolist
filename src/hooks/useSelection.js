import { useState } from "react";

const useSelection = fromArr => {
	const [resultArr, setResultArr] = useState(fromArr);

	const checkValidProp = (obj, prop) => {
		if (obj.hasOwnProperty(prop) === false) {
			throw new TypeError("object has no such property to search by");
		}
		return true;
	};
	const filter = queryObj => {
		setResultArr(
			fromArr.filter(elem => {
				for (let key in queryObj) {
					checkValidProp(elem, key);
					return queryObj[key](elem[key]);
				}
				return true;
			})
		);
	};

	return { resultArr, filter };
};

export default useSelection;
