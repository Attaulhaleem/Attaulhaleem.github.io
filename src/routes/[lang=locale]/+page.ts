import { LOCALES } from '$lib/i18n/locales';

export const entries = () => {
	return LOCALES.map((locale) => ({ lang: locale }));
};
