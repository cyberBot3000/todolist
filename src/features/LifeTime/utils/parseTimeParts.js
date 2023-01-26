import { getSimpleLocales } from '../../../lib/locales';
import getTimePartName from './getTimePartName';

const parseTimeParts = (timeParts, locale = 'ru') => {
	const timeAgo = getSimpleLocales('times_ago', locale);
	if (timeParts.years) {
		const yearsStr = `${timeParts.years} ${getTimePartName(
			'year',
			timeParts.years,
			locale
		)}`;
		const monthsStr = timeParts.months
			? `${timeParts.months} ${getTimePartName(
					'month',
					timeParts.months,
					locale
			  )}`
			: '';
		return `${yearsStr} ${monthsStr} ${timeAgo}`;
	}
	if (timeParts.months) {
		return `${timeParts.months} ${getTimePartName(
			'month',
			timeParts.months,
			locale
		)} ${timeAgo}`;
	}
	if (timeParts.days) {
		return `${timeParts.days} ${getTimePartName(
			'day',
			timeParts.days,
			locale
		)} ${timeAgo}`;
	}
	if (timeParts.hours) {
		return `${timeParts.hours} ${getTimePartName(
			'hour',
			timeParts.hours,
			locale
		)} ${timeAgo}`;
	}
	if (timeParts.minutes) {
		if (timeParts.minutes > 10) {
			const minutesVal = Math.trunc(timeParts.minutes / 10) * 10;
			return `${minutesVal} ${getTimePartName(
				'minute',
				minutesVal,
				locale
			)} ${timeAgo}`;
		}
		return `${timeParts.minutes} ${getTimePartName(
			'minute',
			timeParts.minutes,
			locale
		)} ${timeAgo}`;
	}
	return `${getSimpleLocales('this_moment', 'ru')}`;
};

export default parseTimeParts;
