import { addLocale } from './locales';

addLocale('ru', 'simple', {
	times_ago: 'назад',
	this_moment: 'только что',
});
addLocale('ru', 'plurals', {
	hour: {
		zero: 'часов',
		one: 'час',
		two: 'часа',
		few: 'часа',
		many: 'часов',
		other: 'часов',
	},
	minute: {
		zero: 'минут',
		one: 'минута',
		two: 'минуты',
		few: 'минуты',
		many: 'минут',
		other: 'минут',
	},
	second: {
		zero: 'секунд',
		one: 'секунда',
		two: 'секунды',
		few: 'секунды',
		many: 'секунд',
		other: 'секунд',
	},
	milliseconds: {
		zero: 'милисекунд',
		one: 'милисекунда',
		two: 'милисекунды',
		few: 'милисекунды',
		many: 'милисекунд',
		other: 'милисекунд',
	},
	day: {
		zero: 'дней',
		one: 'день',
		two: 'дня',
		few: 'дня',
		many: 'дней',
		other: 'дней',
	},
	month: {
		zero: 'месяцев',
		one: 'месяц',
		two: 'месяца',
		few: 'месяца',
		many: 'месяцев',
		other: 'месяцев',
	},
	year: {
		zero: 'лет',
		one: 'год',
		two: 'года',
		few: 'года',
		many: 'лет',
		other: 'лет',
	},

});
