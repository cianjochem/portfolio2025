<script>
	export let project;
</script>

<div class="detail-wrapper">
	<!-- Titel + Meta -->
	<div class="meta">
		<div class="left-meta">
			<h2>{project.title}</h2>

			{#if project.year}
				<p>{project.year}</p>
			{/if}

			{#if project.tags?.length}
				<p class="tags">
					{#each project.tags as tag, i}
						#{tag}{i < project.tags.length - 1 ? ' ' : ''}
					{/each}
				</p>
			{:else}
				<p class="tags">#untagged</p>
			{/if}
		</div>

		<!-- Beschreibung -->
		<div class="description">
			{#each project.description.split('\n\n') as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>

	<!-- Hauptbild -->
	{#if project.images?.length > 0}
		<img src={project.images[0]} alt={project.title} class="main-image" />
	{:else}
		<div class="placeholder-image">No main image available</div>
	{/if}

	<!-- Mediengalerie -->
	<div class="media-grid">
		{#if project.vimeo}
			<iframe
				src={`https://player.vimeo.com/video/${project.vimeo}`}
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
			></iframe>
		{/if}

		{#if project.images?.length > (project.vimeo ? 1 : 0)}
			{#each project.images.slice(project.vimeo ? 1 : 0) as img}
				<img src={img} alt={project.title} />
			{/each}
		{:else if !project.vimeo}
			<div class="placeholder-image">No additional media</div>
		{/if}
	</div>

	<!-- Mentoren / Kooperation -->
	<div class="footer-meta">
		{#if project.mentors}
			<p><strong>Mentors:</strong> {project.mentors}</p>
		{/if}
		{#if project.cooperation}
			<p><strong>Cooperation:</strong> {project.cooperation}</p>
		{/if}
		{#if !project.mentors && !project.cooperation}
			<p>No additional credits.</p>
		{/if}
	</div>
</div>

<style>
	.detail-wrapper {
		width: 80vw;
		margin: 0 auto;
		padding: 2rem 0;
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

	.tags {
		color: #555;
		text-transform: lowercase;
		margin-top: 0.5rem;
	}

	.description {
		flex: 2;
		column-count: 2;
		column-gap: 2rem;
		max-width: 100%;
		line-height: 1.6;
		text-align: left;
		/* max-width: 65ch; */
	}

	.main-image {
		width: 100%;
		margin: 2rem 0;
		border-radius: 8px;
	}

	.placeholder-image {
		background: #ddd;
		color: #666;
		text-align: center;
		padding: 4rem;
		margin: 2rem 0;
		border-radius: 8px;
		font-style: italic;
	}

	.media-grid {
		column-count: 2;
		column-gap: 15px;
		margin-bottom: 2rem;
	}

	.media-grid img,
	.media-grid iframe {
		width: 100%;
		margin-bottom: 15px;
		border-radius: 6px;
	}

	.footer-meta {
		margin-top: 2rem;
		font-size: 0.95rem;
		color: #333;
	}

	@media (max-width: 768px) {
		.description {
			column-count: 1;
		}

		.media-grid {
			column-count: 1;
		}
	}
</style>
