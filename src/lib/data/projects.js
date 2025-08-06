// src/lib/data/projects.js
export const projects = [
	{
		title: 'Iranian Bomb',
		year: 2025,
		type: ['Illustration'],
		slug: 'iranian-bomb',
		description: `Amid escalating tensions and recent strikes on Iranian nuclear sites, this article examines how close Iran might be to producing a functional atomic weapon. The story is supported by classic static infographics that explain two core aspects: the internal structure of an implosion-type bomb and the multi-stage process of uranium enrichment. \n\n Simple schematic illustrations and charts clarify the relationship between enrichment levels, technical effort, and weapons-grade material. All graphics are designed for seamless integration into web layouts and optimized for mobile screens, with clear labeling, reduced complexity, and strong visual hierarchy for maximum clarity on all devices.`,
		cooperation: 'Jonas Oesch, Joana Kelén, Leonid Leiva Ariosa',
		article:
			'https://www.nzz.ch/wissenschaft/iran-und-die-atombombe-wie-realistisch-ist-der-bau-heute-ld.1891834',
		teaserImage: '/projects/nuclear-bomb/iranian-nuclear-program-1.png',
		media: [
			{ type: 'vimeo', id: '1107567027', span: 2 },
			{
				type: 'image',
				src: '/projects/nuclear-bomb/iranian-nuclear-program-1.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/nuclear-bomb/iranian-nuclear-program-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/nuclear-bomb/iranian-nuclear-program-3.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/nuclear-bomb/iranian-nuclear-program-4.png',
				span: 1
			}
		]
	},
	{
		title: 'Rubaya Mine',
		year: 2025,
		type: ['Data Visualization', '3D Animation', 'Mapping'],
		slug: 'rubaya-mine',
		description: `This visual story traces the journey to one of the world’s largest coltan mines, now controlled by the M23 rebel group. A 3D flyover reveals a rust-red scar carved into the lush green hills near Rubaya, Congo’s so-called ›little Switzerland‹. The perspective then zooms out to an animated map showing rebel-controlled territory in eastern Congo. \n\n Static infographics visualize coltan production volumes, trade flows and the rise in Rwanda’s exports, raising questions about smuggling and conflict financing. The piece connects local exploitation to global consumption, linking miners in Rubaya to electronics in Europe.`,
		cooperation: 'Adina Renner, Samuel Misteli, Arlette Bashizi',
		article:
			'https://www.nzz.ch/english/from-congos-rebel-held-mine-to-the-wests-phones-ld.1881059',
		teaserImage: '/projects/rubaya-mine/rubaya-mine-teaser.png',
		media: [
			{ type: 'vimeo', id: '1106734298', span: 2 },
			{
				type: 'image',
				src: '/projects/rubaya-mine/rubaya-mine-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/rubaya-mine/rubaya-mine-3.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/rubaya-mine/rubaya-mine-4.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/rubaya-mine/rubaya-mine-5.png',
				span: 1
			}
		]
	},
	{
		title: 'Greenland Deal',
		year: 2025,
		type: ['Data Visualization', 'Mapping'],
		slug: 'greenland-deal',
		description: `This article explores why the United States under Donald Trump renewed its interest in Greenland — not only for strategic defense but also as a symbol of power. A series of static editorial maps form the visual backbone of the story. One map shows Greenland’s location between Russia and North America and explains its importance for missile defense and Arctic shipping lanes. Another highlights the long-standing US military presence and key infrastructure like the Pituffik Space Base and undersea data cables. A third map focuses on mineral deposits such as rare earths and oil fields, pointing to Greenland’s economic potential. The maps rely on reduced design, clear structure and consistent visual language to turn complex geopolitical relationships into accessible visual explanations.`,
		cooperation: 'Andreas Rüesch',
		article:
			'https://www.nzz.ch/international/trump-und-groenland-strategische-rolle-aber-auch-prestigeprojekt-ld.1876958',
		teaserImage: '/projects/greenland-deal/greenland-deal-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/greenland-deal/greenland-deal-1.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/greenland-deal/greenland-deal-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/greenland-deal/greenland-deal-3.png',
				span: 1
			}
		]
	},
	{
		title: 'Moon Objects',
		year: 2024,
		type: ['Data Visualization', '3D Animation', 'Mapping'],
		slug: 'moon-objects',
		description: `This visual story explores the objects humans have left behind on the Moon. From golf balls and rovers to scientific instruments and waste bags, each item tells part of space history. The centerpiece is a 3D Moon model used in the digital version as an animated scrollytelling element. As users scroll, landings and artifacts are revealed with smooth transitions and clear labels. For print, the same model was adapted into a large double-page spread.`,
		cooperation: 'Pauline Martinet (Illustration), Martin Amrein (Text)',
		article:
			'https://www.nzz.ch/english/part1-tomorrows-conflicts-may-rise-from-todays-forgotten-wars-ld.1777074',
		teaserImage: '/projects/moon-objects/moon-objects-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/moon-objects/moon-objects-teaser.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/moon-objects/moon-objects-1.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/moon-objects/moon-objects-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/moon-objects/moon-objects-3.png',
				span: 1
			}
		]
	},
	{
		title: 'Forgotten Wars',
		year: 2024,
		type: ['Data Visualization', '3D Animation', 'Mapping'],
		slug: 'forgotten-wars',
		description:
			'As part of a NZZ data investigation, this story highlights how overlooked civil wars shape today’s geopolitical tensions. The centerpiece is an animated 3D globe that visualizes ACLED conflict data as bars rising from locations of political violence. \n\n The visualization is embedded as a video and contrasts linear and logarithmic scales to reveal both large-scale wars and lesser-known unrest. Through this spatial and temporal rendering, the design allows for intuitive comparison of global conflict intensity while integrating seamlessly into the article’s narrative flow.',
		cooperation: 'Georg Häsler',
		article:
			'https://www.nzz.ch/english/part1-tomorrows-conflicts-may-rise-from-todays-forgotten-wars-ld.1777074',
		teaserImage: '/projects/forgotten-wars/forgotten-wars-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/forgotten-wars/en_fw@3x.png',
				span: 2
			},
			{ type: 'vimeo', id: '1106428773', span: 2 }
		]
	},
	{
		title: 'Switzerland 2075',
		year: 2024,
		type: ['Data Visualization'],
		slug: 'schweiz-2075',
		description:
			'How will climate change alter Switzerland’s landscape? In this immersive article, the reader travels along the Aare River in the year 2075 to explore how rising temperatures affect water supply and demand. \n\n A 3D map guides the journey, with satellite imagery altered based on scientific data to show how the landscape might look 50 years from now. At two locations—one in the Alps and one in a forest—the reader dives down to ground level: they peer into a new lake where a glacier once stood and walk along the ridge of a transformed forest. Data visualizations and geographic overlays on the map provide scientific context to the journey. The article reveals how much might change—and how early adaptation and decisive action could still make our future livable.',
		cooperation: 'Adina Renner, Sven Titz, Michel Graustück, Tom Vaillant, John Cors',
		article:
			'https://www.nzz.ch/english/switzerland-in-2075-a-climate-change-visualization-ld.1855325',
		teaserImage: '/projects/schweiz-2075/ch-2075-2.png',
		media: [
			{
				type: 'image',
				src: '/projects/schweiz-2075/ch-2075-1.png',
				span: 2
			},
			{ type: 'vimeo', id: '1106720209', span: 2 },
			{
				type: 'image',
				src: '/projects/schweiz-2075/ch-2075-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/schweiz-2075/ch-2075-3.png',
				span: 1
			}
		]
	},
	{
		title: 'Bahnhofstrasse',
		year: 2024,
		type: ['Data Visualization', '3D Animation'],
		slug: 'bahnhofstrasse',
		description: `This data-driven visual story traces the transformation of Zurich’s Bahnhofstrasse since 1990. At its core is a custom-built 3D model of the entire street, created using official city data. Users can scroll through the decades to explore how traditional shops disappeared and global luxury brands took over. \n\n Interactive filters and animated highlights reveal changes by industry and building. The project translates complex urban and economic developments into a form that is visually engaging and easy to explore.`,
		cooperation: 'Simon Huwyler (Code)',
		article:
			'https://www.nzz.ch/zuerich/gold-gucci-und-gabbana-dieses-3-d-modell-zeigt-wie-die-zuercher-bahnhofstrasse-ein-ort-fuer-reiche-wurde-ld.1839429',
		teaserImage: '/projects/bahnhofstrasse/bahnhofstrasse-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/bahnhofstrasse/bahnhofstrasse-1.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/bahnhofstrasse/bahnhofstrasse-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/bahnhofstrasse/bahnhofstrasse-3.png',
				span: 1
			}
		]
	},
	{
		title: 'Microchips',
		year: 2023,
		type: ['Data Visualization', 'Illustration'],
		slug: 'microchips',
		description: `This longform story traces the origins of the microchip from postwar California to the global tech race of today. Visually it draws from early computing design with a retro look inspired by the ›Commodore 64‹. The interface features a dark background, glowing colors and pixel-style animations. \n\n Data visualizations and technical diagrams are integrated into the flow as illustrative elements that feel playful and tactile. Animated images and scrolling effects guide the reader through milestones in chip history. The design creates a distinctive visual narrative that connects the past and present of digital technology.`,
		cooperation: 'Roland Shaw, Kaspar Manz',
		teaserImage: '/projects/microchips/microchips-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/microchips/microchips-1.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/microchips/microchips-teaser.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/microchips/microchips-2.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/microchips/microchips-3.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/microchips/microchips-4.png',
				span: 1
			}
		]
	},
	{
		title: 'Densification',
		year: 2022,
		type: ['Data Visualization', 'Illustration'],
		slug: 'densification',
		description: `This visual explainer uses playful, illustrative data storytelling to highlight the growing mismatch between housing supply and spatial demand in Switzerland. Inspired by the metaphor of corn kernels turning into popcorn, the project combines animated graphics, hand-drawn illustrations and data visualizations to explain complex urban planning challenges in an engaging way. \n\n Charts on household size, building types and land use are embedded within a light visual narrative. Motion and metaphor work together to make the issue of spatial inefficiency feel tangible and accessible to a wide audience.`,
		cooperation: 'Giorgio Scherrer (Text)',
		teaserImage: '/projects/densification/verdichtung-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/densification/verdichtung-teaser.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/densification/verdichtung-1.png',
				span: 1
			}
		]
	},
	{
		title: 'Nespresso',
		year: 2021,
		type: ['Data Visualization', 'Illustration'],
		slug: 'nespresso',
		description: `This multimedia story examines Nestlé’s climate strategy through one of its flagship products: the Nespresso capsule. It opens with an animated teaser showing capsules falling, using physics-based animation. \n\n Visualizations and maps trace the full lifecycle of a single capsule – from coffee farming and factory production to consumer use and recycling. Each step illustrates its climate footprint and the challenges of reaching net zero.`,
		cooperation: 'Martin Beglinger, Matthias Benz (Text)',
		teaserImage: '/projects/nespresso-sustainability/nespresso-1.png',
		media: [
			{ type: 'vimeo', id: '1107480358', span: 2 },
			{
				type: 'image',
				src: '/projects/nespresso-sustainability/nespresso-1.png',
				span: 1
			},
			{
				type: 'image',
				src: '/projects/nespresso-sustainability/nespresso-3.png',
				span: 1
			}
		]
	},
	{
		title: 'WindDisplay',
		year: 2021,
		type: ['Generative Tool'],
		slug: 'wind-display',
		description: `›WindDisplay‹ is an online tool that shows the current wind conditions worldwide. The typography is influenced by real-time data, such as wind strength and wind direction. It should show experimentally how data could be visualized in other ways and how typography can communicate information only through visual appearance. The tool can be individualized by different sliders to change the location or the style of visualization.`,
		mentors: 'Ted Davies',
		cooperation: 'Alick Rodinova',

		teaserImage: '/projects/wind-display/wind-display-teaser.png',
		media: [
			{ type: 'vimeo', id: '538419044', span: 2 },
			{
				type: 'image',
				src: '/projects/wind-display/wind-display-teaser.png',
				span: 2
			}
		]
	},
	{
		title: 'Suffocating Waters',
		year: 2020,
		type: ['Data Visualization', 'Print'],
		slug: 'suffocating-waters',
		description: `Fertilizer run-off from industrial agriculture is choking the planet’s oceans, rivers and lakes. Nitrogen and phosphorus pollution feed explosive algal blooms that suck the oxygen from the water as they grow. These algal blooms result in dead zones that pose an ever-increasing threat to marine life as their habitats disappear. The publication ›Suffocating Waters‹ aims to draw the reader's attention to this issue through tailored infographics and map materials. The specially developed imagery shows the processes on a narrative level and supports the text. The maps provide quantitative information and are intended to encourage readers to conduct their investigations into the correlations between nitrate levels and declining oxygen levels.`,
		mentors: 'Prof. Marion Fink',
		cooperation: 'Laura Quade',

		teaserImage: '/projects/suffocating-waters/teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/suffocating-waters/dsc00501-min-1200x.png',
				span: 2
			},
			{ type: 'vimeo', id: '512526817', span: 2 },
			{
				type: 'image',
				src: '/projects/suffocating-waters/dsc00492-min-1200x.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/suffocating-waters/dsc00523-min-1200x.png',
				span: 2
			}
		]
	},
	{
		title: 'Poster Slam 16',
		year: 2019,
		type: ['Poster', 'Motion'],
		slug: 'poster-slam-16',
		description: `The ›Posterslam‹ is a platform to experiment with poster design on a given theme and discuss the result over a beer. The topic of the 16th ›Posterslam‹ dealt with the organic architecture of the US-American architect Frank Lloyd Wright. The poster references the ›Solomon R. Guggenheim Museum‹ in New York City. The 3D rendering and typographic composition create a contrast between the organic and the spatial.`,

		teaserImage: '/projects/poster-slam-16/posterslam-16-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/poster-slam-16/dsc00659-min-1200x.png',
				span: 2
			}
		]
	},
	{
		title: 'Disappearing Places',
		year: 2020,
		type: ['Mapping', 'Print'],
		slug: 'disappearing-places',
		description: `Once the fourth largest lake in the world, the Aral Sea now covers only about 10% of its original area. The consequences for local communities, who traditionally lived from fishing, are severe. Former coastal zones have turned into pesticide-contaminated salt deserts, leading to widespread respiratory health issues. \n\n Three articles from different time periods form a chronological text layer, revealing that awareness of the issue existed as early as the 1980s — when the crisis was still widely downplayed or ignored. The amount of text per page gradually decreases throughout the publication, mirroring the shrinking of the lake. Readers must increasingly exert effort to access the content, just as fishermen once had to travel farther to reach the receding shoreline. The text is supplemented by cartographic elements and photography.`,
		teaserImage: '/projects/disappearing-places/dsc00558-min.png',
		media: [
			{
				type: 'image',
				src: '/projects/disappearing-places/dsc00546-min.png',
				span: 2
			},
			{
				type: 'vimeo',
				id: '512519533',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/disappearing-places/dsc00558-min.png',
				span: 2
			},
			{
				type: 'image',
				src: '/projects/disappearing-places/dsc00563-min.jpg',
				span: 2
			}
		]
	},
	{
		title: 'Gässli Film Festival',
		year: 2018,
		type: ['Poster', 'Motion'],
		slug: 'gaessli-film-festival',
		description: `The ›Gässli Film Festival‹ is a short film festival held annually in the ›Gerbergässlein‹ in Basel. As a non-profit event in the Basel region, it conveys cinematic fascination and backgrounds on filmmaking. \n\n The Festival should be communicated through a keyvisual, which works as a poster and as moving media in the form of a teaser. The keyvisual is based on typographic experiments with a tube screen in 4:3 format. This resulted in moving typographic compositions, which should remind the viewer of the nostalgia in the filmmaking of the 80s.`,
		mentors: 'Prof Marion Fink, Dirk Koy, Fabian Kempter',
		cooperation: 'Salome Habersatter',

		teaserImage: '/projects/gässli-film-festival/gaessli-film-festival-teaser.png',
		media: [
			{
				type: 'image',
				src: '/projects/gässli-film-festival/dsc00604-min-1200x.png',
				span: 2
			},
			{ type: 'vimeo', id: '343040619', span: 2 }
		]
	}
	// Weitere Projekte...
];
