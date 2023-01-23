import monthsArrFrom from "./monthsArrFrom";
import { toDays, toHours, toMinutes, toSeconds } from "./timeConvertion";

const getElapsedFullParts = (startFrom, milliseconds) => {
	let totalDays = toDays(milliseconds);
	let daysInMonths = monthsArrFrom(startFrom.getFullYear());
	let currMonth = startFrom.getMonth();
	let currYear = startFrom.getFullYear();
	let daysLeft = 0;
	let fullYears = 0;
	let fullMonths = 0;

	daysInMonths[currMonth] -= startFrom.getDate();

	if (totalDays > daysInMonths[currMonth]) {
		totalDays -= daysInMonths[currMonth];
		daysLeft += daysInMonths[currMonth];
		currMonth++;
	}

	while (totalDays > daysInMonths[currMonth]) {
		totalDays -= daysInMonths[currMonth];
		currMonth++;
		fullMonths++;
		if (currMonth == 12) {
			currYear++;
			daysInMonths = monthsArrFrom(currYear);
			currMonth = 0;
			if (fullMonths >= 12) {
				fullYears++;
			}
		}
	}
	daysLeft += totalDays;

	return {
		years: fullYears,
		months: fullMonths - fullYears * 12,
		days: daysLeft,
		hours: toHours(milliseconds - toDays(milliseconds) * 24 * 60 * 60 * 1000),
		minutes: toMinutes(milliseconds - toHours(milliseconds) * 60 * 60 * 1000),
		seconds: toSeconds(milliseconds - toMinutes(milliseconds) * 60 * 1000),
		milliseconds: milliseconds - toSeconds(milliseconds) * 1000,
	};
};

export default getElapsedFullParts;
