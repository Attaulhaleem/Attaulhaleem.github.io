import { getSortedPostsMeta } from '$lib/content/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return { posts: getSortedPostsMeta() };
};
