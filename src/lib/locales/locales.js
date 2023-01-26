const locales = {
	simple: {
	},
	plurals: {
	},
};

const getSimpleLocales = (key, locale = 'ru') => locales.simple[key][locale];
const getPluralLocales = (key, type, locale = 'ru') => locales.plurals[key][locale][type];

const addLocale = (localeName, type, valuesObj) => {
	Object.keys(valuesObj).forEach((key) => {
		if (!locales[type][key]) {
			locales[type][key] = { [localeName]: valuesObj[key] };
			return;
		}
		Object.assign(locales[type][key], { [localeName]: valuesObj[key] });
	});
};

export { getPluralLocales, getSimpleLocales, addLocale };
