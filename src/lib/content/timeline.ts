import type { TimelineEntry } from '$lib/types/content';

export const timeline: TimelineEntry[] = [
	{
		id: 'ip-paris',
		kind: 'education',
		title: 'Master of Science',
		subtitle:
			'Institut Polytechnique de Paris · Electrical Engineering (Data Analysis and Pattern Classification)',
		period: 'Sep 2025 — present',
		description: [
			// 'Grade: 15.4/20.0',
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
	// {
	// 	id: 'pel',
	// 	kind: 'experience',
	// 	title: 'Intern',
	// 	subtitle: 'Pak Elektron Limited (PEL)',
	// 	period: 'Jun 2022 — Aug 2022',
	// 	description: [
	// 		'First exposure to assembly-line work: energy meter types/classes, fabrication, and QA.',
	// 		'Capstone: Arduino-based adjustable timer for automating DC motor control.'
	// 	]
	// },
	{
		id: 'giki',
		kind: 'education',
		title: 'Bachelor of Science',
		subtitle:
			'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) · Electrical Engineering (Electronics)',
		period: 'Aug 2019 — Jul 2023',
		description: [
			// 'Grade: 3.24 / 4.00',
			'Electives: Embedded Systems, Digital System Design, Introduction to Robotics',
			'Activities: Team Foxtrot (UAVs)'
		]
	}
];
