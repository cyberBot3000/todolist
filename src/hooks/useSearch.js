import { debounce } from 'lodash';

const useSearch = (filterFn) => {
	const search = debounce((by, from) => {
		filterFn({
			[by]: (val) =>
				val
					.toString()
					.toUpperCase()
					.includes(from.toString().toUpperCase()),
		});
	}, 500);
	return search;
};

export default useSearch;
