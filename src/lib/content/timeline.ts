import type { TimelineEntry } from '$lib/types/content';

export const timeline: TimelineEntry[] = [
	{
		id: 'ip-paris',
		kind: 'education',
		title: 'Master of Science',
		subtitle: 'Institut Polytechnique de Paris · Electrical Engineering',
		period: 'Sep 2025 — present',
		description: 'Major: Data Analysis and Pattern Classification'
	},
	{
		id: 'motive',
		kind: 'experience',
		title: 'QA Engineer, Embedded',
		subtitle: 'Motive',
		period: 'Jun 2025 — Aug 2025',
		description:
			'At Motive, I worked on manually testing the Vehicle Gateway (VG) devices as well as automating the QA process. In particular, I wrote Python scripts to simulate and automate testing of automotive ECU CAN signals (J1939 & J1979).'
	},
	{
		id: 'software-motion',
		kind: 'experience',
		title: 'Embedded Software Engineer',
		subtitle: 'Software Motion',
		period: 'Oct 2024 — Jun 2025',
		description:
			'At Software Motion, we developed L1-L2 Advanced Driver Assistance Systems (ADAS) for the automotive industry. My main contribution was designing a robust FOTA solution for automotive ECUs adhering to ISO-15765 & ISO-14229 standards. I also engineered C++ state machines for critical ADAS functions (Anti-lock Braking System, Lane Departure Warning, Forward Collision Warning), and implemented and debugged unit tests using GoogleTest framework.'
	},
	{
		id: 'lums',
		kind: 'experience',
		title: 'Research Associate',
		subtitle: 'Lahore University of Management Sciences',
		period: 'Sep 2023 — Apr 2024',
		description:
			'At LUMS, I worked as an R&D engineer at two startups: NeuBolt & enfo.ai. NeuBolt: We developed the first swappable-battery 3-wheeler EV in Pakistan. I worked on the IoT device which enabled the swapping mechanism, and was also involved in the development of a custom intra-vehicle communication protocol. enfo.ai: We leveraged Smart IoT Energy Meters and AI-enabled data analytics to reduce electricity usage and costs. I took charge of the hardware and firmware design of the meters; most notably, I introduced features like FOTA, web dashboard for device configuration, and file transfer over MQTT.'
	},
	{
		id: 'pel',
		kind: 'experience',
		title: 'Intern',
		subtitle: 'Pak Elektron Limited',
		period: 'Jun 2022 — Aug 2022',
		description:
			'At PEL, I gained my first exposure to an assembly line environment. I learned about various types and classes of energy meters, as well as the processes of fabrication and QA. Capstone Project: An Arduino-based adjustable timer for automating DC motor control.'
	},
	{
		id: 'giki',
		kind: 'education',
		title: 'Bachelor of Science',
		subtitle: 'Ghulam Ishaq Khan Institute · Electrical Engineering (Electronics)',
		period: 'Aug 2019 — Jul 2023',
		description:
			'Grade: 3.24/4.00 Activities and societies: Team Foxtrot (worked on UAVs) Electives: Embedded Systems, Digital System Design, Introduction to Robotics'
	}
];
