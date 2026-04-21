import cLogo from '$lib/assets/logos/c_logo.svg';
import cppLogo from '$lib/assets/logos/cplusplus_logo.svg';
import godotLogo from '$lib/assets/logos/godot_logo.svg';
import pythonLogo from '$lib/assets/logos/python_logo.svg';
import svelteLogo from '$lib/assets/logos/svelte_logo.svg';
import tailwindLogo from '$lib/assets/logos/tailwindcss_logo.svg';
import typescriptLogo from '$lib/assets/logos/typescript_logo.svg';
import type { Skill } from '$lib/types/content';

export const skills: Skill[] = [
	{ id: 'c', label: 'C', iconSrc: cLogo },
	{ id: 'c++', label: 'C++', iconSrc: cppLogo },
	{ id: 'python', label: 'Python', iconSrc: pythonLogo },
	{ id: 'godot', label: 'Godot', iconSrc: godotLogo },
	{ id: 'svelte', label: 'Svelte', iconSrc: svelteLogo },
	{ id: 'typescript', label: 'TypeScript', iconSrc: typescriptLogo },
	{ id: 'tailwind', label: 'Tailwind CSS', iconSrc: tailwindLogo }
];
