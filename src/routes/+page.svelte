<script>
	import { projects as rawProjects } from '$lib/data/projects.js';
	import { inView } from '$lib/utils/inView.js';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { onMount, afterUpdate } from 'svelte';

	const visibleProjects = writable(new Set());
	let projects = rawProjects;
	let macyInstance;

	$: selectedTag = $page.url.searchParams.get('tag');
	$: projects = selectedTag
		? rawProjects.filter((p) => p.type?.includes(selectedTag))
		: rawProjects;

	$: if (selectedTag) {
		visibleProjects.set(new Set());
	}

	function handleInView(slug) {
		return () => {
			visibleProjects.update((set) => {
				set.add(slug);
				return new Set(set);
			});
		};
	}

	async function initializeMacy() {
		// Macy nur im Browser laden
		const Macy = (await import('macy')).default;

		macyInstance = Macy({
			container: '.projects-grid',
			trueOrder: false,
			waitForImages: true,
			margin: 15,
			columns: 3,
			breakAt: {
				1024: 2,
				640: 1
			}
		});
	}

	onMount(() => {
		const onLoad = async () => {
			await initializeMacy();
			if (macyInstance) {
				macyInstance.recalculate(true);
			}
		};

		if (document.readyState === 'complete') {
			onLoad();
		} else {
			window.addEventListener('load', onLoad);
		}

		return () => window.removeEventListener('load', onLoad);
	});

	afterUpdate(() => {
		if (macyInstance) {
			macyInstance.recalculate(true);
		}
	});
</script>

{#if selectedTag}
	<div class="active-filter">
		<p class="tag">{selectedTag}</p>
		<a href="/" class="clear-filter" aria-label="Filter entfernen">×</a>
	</div>
{/if}

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
	.active-filter {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.tag {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 0.3rem 0.6rem;
		color: #333;
		text-transform: lowercase;
		display: inline-block;
	}

	.clear-filter {
		text-decoration: none;
		cursor: pointer;
	}

	.projects-grid {
		display: block;
		margin-top: 1rem;
	}

	.project-card {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 1s ease,
			transform 0.6s ease;
		width: 100%;
		margin-bottom: 1rem;
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
		filter: grayscale(0%);
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
</style>
