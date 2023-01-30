const locales = {
	simple: {},
	plurals: {},
};

const getSimpleLocales = (key, locale = 'ru') => locales.simple[key][locale];
const getPluralLocales = (key, count, locale = 'ru') =>
	locales.plurals[key][locale][new Intl.PluralRules(locale).select(count)];

const addLocale = (localeName, type, valuesObj) => {
	Object.keys(valuesObj).forEach((key) => {
		if (locales[type][key] === undefined) {
			locales[type][key] = { [localeName]: valuesObj[key] };
			return;
		}
		locales[type][key] = {
			...locales[type][key],
			[localeName]: valuesObj[key],
		};
	});
};

export { getPluralLocales, getSimpleLocales, addLocale };
