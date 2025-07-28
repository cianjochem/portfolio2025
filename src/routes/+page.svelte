<script>
	import { projects as rawProjects } from '$lib/data/projects.js';
	import AboutSection from '$lib/components/AboutSection.svelte';

	let showAbout = false;

	function shuffle(array) {
		const arr = [...array];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	const projects = shuffle(rawProjects);
</script>

<div class="page-wrapper">
	<!-- About Section -->
	{#if showAbout}
		<AboutSection />
	{/if}

	<!-- Cards nur wenn About nicht aktiv -->
	{#if !showAbout}
		<div class="projects-grid">
			{#each projects as project}
				<a
					href={`/projects/${project.slug}`}
					class="project-card"
					aria-label={`View project: ${project.title}`}
				>
					<img src={project.teaserImage || '/default.jpg'} alt={project.title} />
					<div class="project-info-wrapper">
						<p class="project-tag">
							{#each project.type as tag, i}
								#{tag}{i < project.type.length - 1 ? ' ' : ''}
							{/each}
						</p>
						<h2>{project.title}</h2>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.page-wrapper {
		width: 80vw;
		margin: 0 auto;
		padding-bottom: 2rem;
		position: relative;
	}

	.projects-grid {
		column-count: 3;
		column-gap: 15px;
		padding-top: 1rem;
	}

	.project-card {
		display: inline-block;
		width: 100%;
		margin-bottom: 1.5rem;
		break-inside: avoid;
	}

	.project-card img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 8px;
		margin-bottom: 5px;
		filter: grayscale(100%);
		transition: filter 0.4s ease;
	}

	.project-card:hover {
		transform: scale(1.02);
	}

	.project-card:hover img {
		filter: grayscale(0%);
	}

	.project-info-wrapper {
		background: #fff;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.project-tag {
		color: #555;
		text-transform: lowercase;
	}

	@media (max-width: 1024px) {
		.page-wrapper {
			width: 90vw;
		}
		.projects-grid {
			column-count: 2;
			column-gap: 15px;
		}
	}

	@media (max-width: 640px) {
		.page-wrapper {
			width: 92vw;
		}
		.projects-grid {
			column-count: 1;
		}
	}
</style>
