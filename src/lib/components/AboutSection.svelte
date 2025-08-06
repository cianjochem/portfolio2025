<script>
	import { fade } from 'svelte/transition';
</script>

<div class="about-overlay" transition:fade>
	<div class="about-grid">
		<div class="sidebar">
			<h2>Contact</h2>
			<div class="link-container">
				<a class="link" href="mailto:jochemcian@gmail.com">Mail ↗</a>
				<a class="link" href="https://www.instagram.com/cianjochem" target="_blank">Instagram ↗</a>
				<a class="link" href="https://vimeo.com/user99868500" target="_blank">Vimeo ↗</a>
			</div>

			<h2>Talks</h2>
			<p class="talks">
				<a href="https://vizknowledge.aalto.fi/" target="_blank">Visualizing Knowledge ↗</a> | Helsinki
				| 2025
			</p>
		</div>
		<div class="about-text">
			<h2>About</h2>
			<p>
				Hi, I’m Cian — an Information and Interaction Designer based in Zurich, Switzerland.
				<br /> I combine design, animation, and code to create clear and engaging visual stories. My
				work explores new ways of showing complex ideas while respecting the principles of
				typography and visual communication. I enjoy experimenting with tools and techniques to find
				fresh visual approaches. <br /> Currently, I work on data-driven stories with a focus on
				geopolitics, blending journalism, design, and interaction. <br /> I create cross-disciplinary
				projects that involve visual storytelling, mapping, and motion design to make complex information
				more accessible.
			</p>
		</div>
	</div>
</div>

<style>
	.about-overlay {
		position: relative;
		height: 100vh;
		overflow-y: auto;
		padding: 2rem 0;
		background: #f7f7f7;
		box-sizing: border-box;
	}

	a {
		text-decoration: underline;
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.sidebar {
		grid-column: 1;
	}

	.about-text {
		grid-column: 2 / span 2;
		line-height: 1.6;
	}

	.link-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

	.link {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 0.3rem 0.6rem;
		color: #333;
		text-transform: lowercase;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.about-grid {
			display: flex;
			flex-direction: column;
		}

		.about-text {
			order: 1;
		}

		.sidebar {
			order: 2;
		}

		.talks {
			order: 3;
			margin-bottom: 3rem;
		}
	}
</style>
