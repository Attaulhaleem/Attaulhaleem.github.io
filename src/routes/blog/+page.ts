import { getSortedPosts } from '$lib/content/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return { posts: getSortedPosts() };
};
