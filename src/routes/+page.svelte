<script>
	import { projects as rawProjects } from '$lib/data/projects.js';
	import { inView } from '$lib/utils/inView.js';
	import { writable } from 'svelte/store';

	const visibleProjects = writable(new Set());

	function shuffle(array) {
		const arr = [...array];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	const projects = shuffle(rawProjects);

	function handleInView(slug) {
		return () => {
			visibleProjects.update((set) => {
				set.add(slug);
				return new Set(set); // wichtig: neuer Set, damit Svelte die Änderung erkennt
			});
		};
	}
</script>

<div class="page-wrapper">
	<div class="projects-grid">
		{#each projects as project (project.slug)}
			{#key project.slug}
				<a
					href={`/projects/${project.slug}`}
					class="project-card"
					class:visible={$visibleProjects.has(project.slug)}
					use:inView={handleInView(project.slug)}
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
			{/key}
		{/each}
	</div>
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
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;
		display: inline-block;
		width: 100%;
		margin-bottom: 1.5rem;
		break-inside: avoid;
	}

	.project-card.visible {
		opacity: 1;
		transform: translateY(0);
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
