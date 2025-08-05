<script>
	export let project;
	import { inView } from '$lib/utils/inView.js';
	import { writable } from 'svelte/store';
	import Player from '@vimeo/player';

	const visibleMedia = writable(new Set());

	function markVisible(key) {
		visibleMedia.update((set) => {
			set.add(key);
			return new Set(set);
		});
	}

	function setAspectRatio(node) {
		const player = new Player(node);
		player
			.ready()
			.then(() => Promise.all([player.getVideoWidth(), player.getVideoHeight()]))
			.then(([width, height]) => {
				node.style.setProperty('--aspect-ratio', `${width} / ${height}`);
			})
			.catch(() => {});
		return {
			destroy() {
				player.destroy();
			}
		};
	}
</script>

<!-- Titelbild / Titelvideo -->
{#if project.media?.length > 0}
	{#if project.media[0].type === 'image'}
		<img src={project.media[0].src} alt={project.title} class="main-image" />
	{:else if project.media[0].type === 'vimeo'}
		<iframe
			class="main-image"
			src={`https://player.vimeo.com/video/${project.media[0].id}?autoplay=1&muted=1&loop=1&background=1`}
			allow="autoplay; fullscreen"
			allowfullscreen
			title={project.title}
			use:setAspectRatio
		></iframe>
	{/if}
{/if}

<!-- Projektbeschreibung + Metadaten -->
<div class="detail-wrapper">
	<div class="meta">
		<div class="left-meta">
			<h2>{project.title}</h2>

			{#if project.article}
				<p class="article-link">
					<a href={project.article} target="_blank" rel="noopener noreferrer">Read article ↗</a>
				</p>
			{/if}

			{#if project.year}
				<p>{project.year}</p>
			{/if}

			{#if project.type?.length}
				<div class="tags-container">
					{#each project.type as tag}
						<a href={`/?tag=${encodeURIComponent(tag)}`} class="tag">{tag}</a>
					{/each}
				</div>
			{/if}
		</div>

		<div class="description">
			{#each project.description.split('\n\n') as paragraph}
				<p>{@html paragraph}</p>
			{/each}
		</div>
	</div>
</div>

<!-- Mediengalerie -->
{#if project.media?.length > 1}
	<div class="media-grid">
		{#each project.media.slice(1) as item, i}
			<div
				class={`media-item ${item.span === 2 ? 'span-two' : ''} ${$visibleMedia.has(`media-${i + 1}`) ? 'visible' : ''}`}
				use:inView={() => markVisible(`media-${i + 1}`)}
			>
				{#if item.type === 'image'}
					<img src={item.src} alt={project.title} loading="lazy" />
				{:else if item.type === 'vimeo'}
					<iframe
						src={`https://player.vimeo.com/video/${item.id}?autoplay=1&muted=1&loop=1&background=1`}
						allow="autoplay; fullscreen"
						allowfullscreen
						title={project.title}
						use:setAspectRatio
					></iframe>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<!-- Footer Infos -->
<div class="footer-meta">
	{#if project.mentors}
		<p><strong>Mentors:</strong> {project.mentors}</p>
	{/if}
	{#if project.cooperation}
		<p><strong>Cooperation:</strong> {project.cooperation}</p>
	{/if}
</div>

<!-- Zurück-Link -->
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
		margin-bottom: 0.3rem;
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
		text-decoration: none;
	}

	.article-link {
		margin-top: 0rem;
	}

	.article-link a {
		font-size: 1rem;
		color: #000;
		text-decoration: underline;
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

	.span-two {
		grid-column: span 2;
	}

	.media-grid img,
	.media-grid iframe {
		width: 100%;
		border-radius: 8px;
		display: block;
	}

	iframe {
		aspect-ratio: var(--aspect-ratio, 16 / 9);
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

		.span-two {
			grid-column: span 1;
		}
	}
</style>
