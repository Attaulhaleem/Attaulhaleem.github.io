import cLogo from '$lib/assets/logos/c.svg';
import cppLogo from '$lib/assets/logos/cplusplus.svg';
import godotLogo from '$lib/assets/logos/godotengine.svg';
import pythonLogo from '$lib/assets/logos/python.svg';
import svelteLogo from '$lib/assets/logos/svelte.svg';
import arduinoLogo from '$lib/assets/logos/arduino.svg';
import raspberryPiLogo from '$lib/assets/logos/raspberrypi.svg';
import appleLogo from '$lib/assets/logos/apple.svg';
import cursorLogo from '$lib/assets/logos/cursor.svg';
import vimLogo from '$lib/assets/logos/vim.svg';
import latexLogo from '$lib/assets/logos/latex.svg';

export type Skill = {
	label: string;
	iconSrc?: string;
};

export const skills = {
	apple: { label: 'macOS', iconSrc: appleLogo },
	cursor: { label: 'Cursor', iconSrc: cursorLogo },
	vim: { label: 'Vim', iconSrc: vimLogo },
	latex: { label: 'LaTeX', iconSrc: latexLogo },
	c: { label: 'C', iconSrc: cLogo },
	'c++': { label: 'C++', iconSrc: cppLogo },
	python: { label: 'Python', iconSrc: pythonLogo },
	godot: { label: 'Godot', iconSrc: godotLogo },
	svelte: { label: 'Svelte', iconSrc: svelteLogo },
	arduino: { label: 'Arduino', iconSrc: arduinoLogo },
	'raspberry-pi': { label: 'Raspberry Pi', iconSrc: raspberryPiLogo }
} as const satisfies Record<string, Skill>;

export type SkillId = keyof typeof skills;

/** About page tech stack — same order as keys in `skills`. */
export const allSkills: readonly Skill[] = Object.values(skills);

export function resolveSkills(ids: readonly SkillId[]): Skill[] {
	return ids.map((id) => skills[id]);
}
