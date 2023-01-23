import { getPluralLocales } from "../../../lib/locales";

const getTimePartName = (type, value, locale) => {
	return getPluralLocales(
		type,
		(new Intl.PluralRules(locale)).select(value),
		locale
	);
};

export default getTimePartName;
