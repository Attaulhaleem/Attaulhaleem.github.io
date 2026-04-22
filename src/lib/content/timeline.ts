import type { Locale } from '$lib/i18n/locales';
import type { TimelineEntry } from '$lib/types/content';

const timelineByLocale: Record<Locale, TimelineEntry[]> = {
	en: [
		{
			id: 'ip-paris',
			kind: 'education',
			title: 'Master of Science',
			subtitle:
				'Institut Polytechnique de Paris · Electrical Engineering (Data Analysis and Pattern Classification)',
			period: 'Sep 2025 — present',
			description: [
				'Courses: Computer Science, Probability and Statistics, Optimization Methods, Statistical Data Analysis, Application of Statistical Methods, French, Effective Communication',
				"Activities: Hi! Paris H!ckathon 2025, INNOV'NIGHT 2026"
			]
		},
		{
			id: 'motive',
			kind: 'experience',
			title: 'QA Engineer, Embedded',
			subtitle: 'Motive Technologies Inc.',
			period: 'Jun 2025 — Aug 2025',
			description: [
				'Manually tested Vehicle Gateway (VG) devices and helped automate the QA workflow.',
				'Wrote Python scripts to simulate and automate testing of automotive ECU CAN signals (J1939 & J1979).'
			]
		},
		{
			id: 'software-motion',
			kind: 'experience',
			title: 'Embedded Software Engineer',
			subtitle: 'Software Motion (Suzhou) Engineering Services Co., Ltd.',
			period: 'Oct 2024 — Jun 2025',
			description: [
				'Developed L1-L2 Advanced Driver Assistance Systems (ADAS) for the automotive industry.',
				'Designed a robust FOTA solution for automotive ECUs aligned with ISO-15765 & ISO-14229.',
				'Built C++ state machines for critical ADAS features (Anti-lock Braking System, Lane Departure Warning, Forward Collision Warning).',
				'Implemented and debugged unit tests with the GoogleTest framework.'
			]
		},
		{
			id: 'lums',
			kind: 'experience',
			title: 'Research Associate',
			subtitle: 'Lahore University of Management Sciences (LUMS)',
			period: 'Sep 2023 — Apr 2024',
			description: [
				"NeuBolt: Helped build Pakistan's first swappable-battery 3-wheeler EV — IoT for the swapping mechanism and a custom intra-vehicle communication protocol.",
				'enfo.ai: Smart IoT energy meters and AI-driven analytics to cut electricity use and cost; led hardware and firmware, including FOTA, a web dashboard for configuration, and file transfer over MQTT.'
			]
		},
		{
			id: 'giki',
			kind: 'education',
			title: 'Bachelor of Science',
			subtitle:
				'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) · Electrical Engineering (Electronics)',
			period: 'Aug 2019 — Jul 2023',
			description: [
				'Electives: Embedded Systems, Digital System Design, Introduction to Robotics',
				'Activities: Team Foxtrot (UAVs)'
			]
		}
	],
	fr: [
		{
			id: 'ip-paris',
			kind: 'education',
			title: 'Master of Science',
			subtitle:
				'Institut Polytechnique de Paris · Génie électrique (Analyse de données et reconnaissance de formes)',
			period: 'Sept. 2025 — aujourd’hui',
			description: [
				"Cours : Informatique, Probabilités et statistiques, Méthodes d'optimisation, Analyse statistique de données, Applications des méthodes statistiques, Français, Communication",
				"Activités : Hi! Paris H!ckathon 2025, INNOV'NIGHT 2026"
			]
		},
		{
			id: 'motive',
			kind: 'experience',
			title: 'Ingénieur QA, Embarqué',
			subtitle: 'Motive Technologies Inc.',
			period: 'Juin 2025 — août 2025',
			description: [
				'Tests manuels des dispositifs Vehicle Gateway (VG) et automatisation des flux QA.',
				'Scripts Python pour simuler et automatiser les tests des signaux CAN des ECU automobiles (J1939 & J1979).'
			]
		},
		{
			id: 'software-motion',
			kind: 'experience',
			title: 'Ingénieur logiciel embarqué',
			subtitle: 'Software Motion (Suzhou) Engineering Services Co., Ltd.',
			period: 'Oct. 2024 — juin 2025',
			description: [
				'Développement de systèmes ADAS de niveaux L1-L2 pour le secteur automobile.',
				'Conception d’une solution FOTA robuste pour les ECU automobiles, conforme aux normes ISO-15765 et ISO-14229.',
				'Machines à états en C++ pour des fonctionnalités ADAS critiques (ABS, alerte de franchissement de voie, alerte de collision frontale).',
				'Mise en place et débogage de tests unitaires avec GoogleTest.'
			]
		},
		{
			id: 'lums',
			kind: 'experience',
			title: 'Research Associate',
			subtitle: 'Lahore University of Management Sciences (LUMS)',
			period: 'Sept. 2023 — avril 2024',
			description: [
				'NeuBolt : contribution au premier véhicule électrique à 3 roues à batterie échangeable du Pakistan — IoT pour le mécanisme d’échange et protocole de communication intra-véhicule personnalisé.',
				'enfo.ai : compteurs d’énergie IoT intelligents et analyses assistées par IA pour réduire la consommation et les coûts ; pilotage du hardware et du firmware, dont FOTA, un tableau de bord web de configuration, et le transfert de fichiers via MQTT.'
			]
		},
		{
			id: 'giki',
			kind: 'education',
			title: 'Bachelor of Science',
			subtitle:
				'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) · Génie électrique (Électronique)',
			period: 'Août 2019 — juil. 2023',
			description: [
				'Électifs : systèmes embarqués, conception de systèmes numériques, introduction à la robotique.',
				'Activités : Team Foxtrot (drones).'
			]
		}
	],
	ur: [
		{
			id: 'ip-paris',
			kind: 'education',
			title: 'ماسٹر آف سائنس',
			subtitle:
				'Institut Polytechnique de Paris · برقی ہندسیات (ڈیٹا اینالیسز اور پیٹرن کلاسیفیکیشن)',
			period: 'ستمبر 2025 — ابھی تک',
			description: [
				'کورسز: کمپیوٹر سائنس، امکان و شماریات، آپٹمائزیشن میتھڈز، شماریاتی ڈیٹا اینالیسز، شماریاتی میتھڈز کی ایپلیکیشن، فرانسیسی، مؤثر مواصلات',
				'سرگرمیاں: Hi! Paris H!ckathon 2025، INNOV\'NIGHT 2026'
			]
		},
		{
			id: 'motive',
			kind: 'experience',
			title: 'QA انجینئر، امبیڈڈ',
			subtitle: 'Motive Technologies Inc.',
			period: 'جون 2025 — اگست 2025',
			description: [
				'Vehicle Gateway (VG) ڈیوائسز کا دستی ٹیسٹنگ اور QA ورک فلو میں خودکار کاری میں مدد۔',
				'آٹوموٹو ECU کے CAN سگنلز (J1939 اور J1979) کی سمیلیشن اور خودکار ٹیسٹ کے لیے Python اسکرپٹس۔'
			]
		},
		{
			id: 'software-motion',
			kind: 'experience',
			title: 'امبیڈڈ سافٹ ویئر انجینئر',
			subtitle: 'Software Motion (Suzhou) Engineering Services Co., Ltd.',
			period: 'اکتوبر 2024 — جون 2025',
			description: [
				'آٹوموٹو انڈسٹری کے لیے L1-L2 ایڈوانس ڈرائیور اسسٹنس سسٹمز (ADAS) کی ترقی۔',
				'ISO-15765 اور ISO-14229 کے مطابق آٹوموٹو ECUs کے لیے مضبوط FOTA حل کی ڈیزائن۔',
				'اہم ADAS فیچرز (اینٹی لاک بریکنگ سسٹم، لین ڈیپارچر وارننگ، فارورڈ کولیزن وارننگ) کے لیے C++ اسٹیٹ مشینز۔',
				'GoogleTest فریم ورک کے ساتھ یونٹ ٹیسٹس کی عمل درآمد اور ڈیبگ۔'
			]
		},
		{
			id: 'lums',
			kind: 'experience',
			title: 'ریسرچ ایسوسی ایٹ',
			subtitle: 'Lahore University of Management Sciences (LUMS)',
			period: 'ستمبر 2023 — اپریل 2024',
			description: [
				'NeuBolt: پاکستان کی پہلی تبدیل ہونے والی بیٹری والی 3 پہیے والی EV میں حصہ — سوئپنگ میکانزم کے لیے IoT اور کسٹم انٹرا-ویکل کمیونیکیشن پروٹوکول۔',
				'enfo.ai: اسمارٹ IoT توانائی میٹرز اور AI پر مبنی تجزیہ بجلی کے استعمال اور لاگت میں کمی؛ ہارڈ ویئر اور فرم ویئر کی قیادت، بشمول FOTA، کنفیگریشن کے لیے ویب ڈیش بورڈ، اور MQTT پر فائل ٹرانسفر۔'
			]
		},
		{
			id: 'giki',
			kind: 'education',
			title: 'بیچلر آف سائنس',
			subtitle:
				'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) · برقی ہندسیات (الیکٹرانکس)',
			period: 'اگست 2019 — جولائی 2023',
			description: [
				'اختیاری مضامین: امبیڈڈ سسٹمز، ڈیجیٹل سسٹم ڈیزائن، روبوٹکس کا تعارف',
				'سرگرمیاں: Team Foxtrot (UAVs)'
			]
		}
	]
};

export function getTimeline(locale: Locale): TimelineEntry[] {
	return timelineByLocale[locale];
}
