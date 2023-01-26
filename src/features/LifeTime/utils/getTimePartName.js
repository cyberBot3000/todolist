import { getPluralLocales } from '../../../lib/locales';

const getTimePartName = (type, value, locale) => getPluralLocales(
	type,
	(new Intl.PluralRules(locale)).select(value),
	locale,
);

export default getTimePartName;
