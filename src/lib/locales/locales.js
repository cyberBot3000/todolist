const locales = {
	simple: {
	},
	plurals: {
	},
};

const getSimpleLocales = (key, locale = "ru") => {
	return locales.simple[key][locale];
};
const getPluralLocales = (key, type, locale = "ru") => {
	return locales.plurals[key][locale][type];
};



const addLocale = (localeName, type, valuesObj) => {
	for (let key in valuesObj) {
		if (!locales[type][key]) {
			locales[type][key] = { [localeName]: valuesObj[key] };
			continue;
		}
		Object.assign(locales[type][key], { [localeName]: valuesObj[key] });
	}
};

export { getPluralLocales, getSimpleLocales, addLocale };
