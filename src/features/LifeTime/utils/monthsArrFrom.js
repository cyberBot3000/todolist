const monthsArrFrom = (fullYear) => {
	const daysInMonths = [];
	for (let i = 0; i < 12; i += 1) {
		daysInMonths.push(new Date(fullYear, i + 1, 0).getDate());
	}
	return daysInMonths;
};

export default monthsArrFrom;
