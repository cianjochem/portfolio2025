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

<!-- Wrapper übernimmt die Breite vom Layout -->
<div class="projects-grid">
	{#each projects as project (project.slug)}
		{#key project.slug}
			<a
				href={`/projects/${project.slug}`}
				class="project-card"
				class:visible={$visibleProjects.has(project.slug)}
				use:inView={handleInView(project.slug)}
			>
				<div class="image-wrapper">
					<img src={project.teaserImage} alt={project.title} />
					<div class="hover-title">
						<h3>{project.title}</h3>
					</div>
				</div>
			</a>
		{/key}
	{/each}
</div>

<style>
	.projects-grid {
		column-count: 3;
		column-gap: 15px;
		padding-top: 1rem;
	}

	.project-card {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 1s ease,
			transform 0.6s ease;
		display: inline-block;
		width: 100%;
		margin-bottom: 1.5rem;
		break-inside: avoid;
		position: relative;
	}

	.project-card.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.image-wrapper {
		position: relative;
		width: 100%;
	}

	.project-card img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 8px;
		filter: grayscale(100%);
		transition: filter 0.3s ease;
		display: block;
	}

	.project-card:hover img {
		filter: grayscale(0%);
	}

	.hover-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #ffffff;
		padding: 0.6rem 1rem;
		border-radius: 8px;
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		text-align: center;
	}

	.project-card:hover .hover-title {
		opacity: 1;
	}

	@media (max-width: 1024px) {
		.projects-grid {
			column-count: 2;
		}
	}

	@media (max-width: 640px) {
		.projects-grid {
			column-count: 1;
		}
	}
</style>
