const useSearch = (filterFn) => {
	const search = (by, from) => {
		filterFn({
			[by]: (val) => val.toString().toUpperCase().includes(from.toString().toUpperCase()),
		});
	};
	return search;
};

export default useSearch;
