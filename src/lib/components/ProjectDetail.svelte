<script>
	export let project;
	import { inView } from '$lib/utils/inView.js';
	import { writable } from 'svelte/store';

	const visibleMedia = writable(new Set());

	const additionalImages = project.images?.slice(1) ?? [];
	const showMedia = project.vimeo || additionalImages.length > 0;

	function markVisible(key) {
		visibleMedia.update((set) => {
			set.add(key);
			return new Set(set);
		});
	}
</script>

{#if project.images?.length > 0}
	<img src={project.images[0]} alt={project.title} class="main-image" />
{/if}

<div class="detail-wrapper">
	<!-- Titel + Meta -->
	<div class="meta">
		<div class="left-meta">
			<h2>{project.title}</h2>

			{#if project.year}
				<p>{project.year}</p>
			{/if}

			{#if project.type?.length}
				<div class="tags-container">
					{#each project.type as tag}
						<p class="tag">{tag}</p>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Beschreibung -->
		<div class="description">
			{#each project.description.split('\n\n') as paragraph}
				<p>{@html paragraph}</p>
			{/each}
		</div>
	</div>
</div>

<!-- Mediengalerie -->
{#if showMedia}
	<div class="media-grid">
		{#if project.vimeo}
			<div
				class="media-item vimeo-item {$visibleMedia.has('vimeo') ? 'visible' : ''}"
				use:inView={() => markVisible('vimeo')}
			>
				<iframe
					src={`https://player.vimeo.com/video/${project.vimeo}?autoplay=1&muted=1&loop=1&background=1`}
					allow="autoplay; fullscreen"
					allowfullscreen
				></iframe>
			</div>
		{/if}

		{#each additionalImages as img, i}
			<div
				class="media-item {!project.vimeo && additionalImages.length === 1
					? 'span-two'
					: ''} {$visibleMedia.has(`img-${i}`) ? 'visible' : ''}"
				use:inView={() => markVisible(`img-${i}`)}
			>
				<img src={img} alt={project.title} loading="lazy" />
			</div>
		{/each}
	</div>
{/if}

<!-- Mentoren / Kooperation -->
<div class="footer-meta">
	{#if project.mentors}
		<p><strong>Mentors:</strong> {project.mentors}</p>
	{/if}
	{#if project.cooperation}
		<p><strong>Cooperation:</strong> {project.cooperation}</p>
	{/if}
</div>

<!-- Back Link -->
<p class="back-link"><a href="/">&larr; Back</a></p>

<style>
	.main-image {
		width: 100%;
		margin: 1rem 0;
		border-radius: 8px;
	}

	.detail-wrapper {
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.left-meta {
		flex: 1;
		min-width: 200px;
	}

	h2 {
		margin-bottom: 1rem;
	}

	.tags-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 0.3rem 0.6rem;
		font-size: 1rem;
		color: #333;
		text-transform: lowercase;
	}

	.description {
		flex: 2;
		column-count: 2;
		column-gap: 2rem;
		line-height: 1.6;
		text-align: left;
	}

	.media-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
		margin-top: 2rem;
	}

	.vimeo-item {
		grid-column: span 2;
	}

	.span-two {
		grid-column: span 2;
	}

	.media-item {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}

	.media-item.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.media-grid img,
	.media-grid iframe {
		width: 100%;
		border-radius: 8px;
		display: block;
	}

	iframe {
		aspect-ratio: 16 / 9;
		border: none;
	}

	.footer-meta {
		margin-top: 3rem;
		font-size: 0.95rem;
		color: #000000;
	}

	.back-link {
		margin-top: 2rem;
		text-decoration: none;
		font-family: 'EverettBold', sans-serif;
	}

	@media (max-width: 1024px) {
		.meta {
			flex-direction: column;
		}
	}

	@media (max-width: 768px) {
		.description {
			column-count: 1;
		}

		.media-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
