import { LOCALE_TEXT_DIRECTION } from '$lib/i18n/locales';
import type { Locale } from '$lib/i18n/locales';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return { locale: params.lang as Locale };
};
