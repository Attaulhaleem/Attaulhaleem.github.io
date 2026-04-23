import type { Locale } from '$lib/i18n/locales';

/** About page copy — keep out of components for easy edits / CMS migration. */
type AboutContent = {
	title: string;
	description: string;
	paragraphs: readonly string[];
};

const aboutByLocale: Record<Locale, AboutContent> = {
	en: {
		title: 'About',
		description: 'Bio, timeline, and tools I work with.',
		paragraphs: [
			"Hi, I'm Atta. I currently reside in Paris, France.",
			"I'm a graduate student at Institut Polytechnique de Paris studying Electrical Engineering. My major is in Data Analytics and Pattern Recognition.",
			"I love tinkering with hardware and am obsessed with writing clean code. I'm interested in a wide range of topics, including embedded systems, game design, AI/ML, and AR/VR.",
			"When I'm not working, you can usually find me lost in a great film, planning my next travel adventure, or enjoying a quiet game of chess."
		]
	},
	fr: {
		title: 'À propos',
		description: 'Biographie, parcours et outils que j’utilise au quotidien.',
		paragraphs: [
			"Salut, je m'appelle Atta. Je vis actuellement à Paris, en France.",
			"Je suis étudiant en master à l'Institut Polytechnique de Paris, en génie électrique. Ma spécialité est l'analyse de données et la reconnaissance de formes.",
			"J'adore bricoler du matériel et je suis obsédé par l'écriture de code propre. Je m'intéresse à de nombreux sujets : systèmes embarqués, game design, IA/ML et AR/VR.",
			"Quand je ne travaille pas, on me trouve souvent plongé dans un bon film, en train de planifier mon prochain voyage, ou autour d'une partie d'échecs tranquille."
		]
	},
	ur: {
		title: 'میرا تعارف',
		description: 'تعارف، وقت کی لکیر، اور وہ ٹولز جن کے ساتھ میں کام کرتا ہوں۔',
		paragraphs: [
			'السلام علیکم، میرا نام عطاء ہے۔ آج کل میں پیرس، فرانس میں رہتا ہوں۔',
			'میں انسٹی ٹیوٹ پولی ٹیکنیک ڈی پیرس میں الیکٹریکل انجنیرنگ کا طالب علم ہوں۔ میرا تخصص ڈیٹا اینالیٹکس اور پیٹرن ریکگنیشن ہے۔',
			'مجھے ہارڈ ویئر کے ساتھ تجربے کرنا پسند ہے اور صاف کوڈ لکھنے کا شوق ہے۔ امبیڈڈ سسٹمز، گیم ڈیزائن، AI/ML، اور AR/VR جیسے موضوعات میں دلچسپی ہے۔',
			'جب میں کام نہیں کر رہا ہوتا، اکثر کوئی فلم دیکھ رہا ہوتا ہوں، اگلے سفر کی منصوبہ بندی کر رہا ہوتا ہوں، یا شطرنج کی پرسکون بازی سے لطف اندوز ہو رہا ہوتا ہوں۔'
		]
	}
};

export function getAbout(locale: Locale): AboutContent {
	return aboutByLocale[locale];
}
