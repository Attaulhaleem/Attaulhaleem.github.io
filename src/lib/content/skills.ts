import cLogo from '$lib/assets/icons/c_logo.svg';
import cppLogo from '$lib/assets/icons/cplusplus_logo.svg';
import godotLogo from '$lib/assets/icons/godot_logo.svg';
import pythonLogo from '$lib/assets/icons/python_logo.svg';
import svelteLogo from '$lib/assets/icons/svelte_logo.svg';

export type Skill = {
	label: string;
	iconSrc?: string;
};

export const skills = {
	c: { label: 'C', iconSrc: cLogo },
	'c++': { label: 'C++', iconSrc: cppLogo },
	python: { label: 'Python', iconSrc: pythonLogo },
	godot: { label: 'Godot', iconSrc: godotLogo },
	svelte: { label: 'Svelte', iconSrc: svelteLogo },
	arduino: { label: 'Arduino' },
	'raspberry-pi': { label: 'Raspberry Pi' }
} as const satisfies Record<string, Skill>;

export type SkillId = keyof typeof skills;

/** About page tech stack — same order as keys in `skills`. */
export const allSkills: readonly Skill[] = Object.values(skills);

export function resolveSkills(ids: readonly SkillId[]): Skill[] {
	return ids.map((id) => skills[id]);
}
