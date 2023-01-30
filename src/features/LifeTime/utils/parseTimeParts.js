import { getPluralLocales, getSimpleLocales } from '../../../lib/locales';

const parseTimeParts = (timeParts, locale = 'ru') => {
	const timeAgo = getSimpleLocales('times_ago', locale);
	if (timeParts.years) {
		const yearsStr = `${timeParts.years} ${getPluralLocales(
			'year',
			timeParts.years,
			locale
		)}`;
		const monthsStr = timeParts.months
			? `${timeParts.months} ${getPluralLocales(
					'month',
					timeParts.months,
					locale
			  )}`
			: '';
		return `${yearsStr} ${monthsStr} ${timeAgo}`;
	}
	if (timeParts.months) {
		return `${timeParts.months} ${getPluralLocales(
			'month',
			timeParts.months,
			locale
		)} ${timeAgo}`;
	}
	if (timeParts.days) {
		return `${timeParts.days} ${getPluralLocales(
			'day',
			timeParts.days,
			locale
		)} ${timeAgo}`;
	}
	if (timeParts.hours) {
		return `${timeParts.hours} ${getPluralLocales(
			'hour',
			timeParts.hours,
			locale
		)} ${timeAgo}`;
	}
	if (timeParts.minutes) {
		if (timeParts.minutes > 10) {
			const minutesVal = Math.trunc(timeParts.minutes / 10) * 10;
			return `${minutesVal} ${getPluralLocales(
				'minute',
				minutesVal,
				locale
			)} ${timeAgo}`;
		}
		return `${timeParts.minutes} ${getPluralLocales(
			'minute',
			timeParts.minutes,
			locale
		)} ${timeAgo}`;
	}
	return `${getSimpleLocales('this_moment', 'ru')}`;
};

export default parseTimeParts;
