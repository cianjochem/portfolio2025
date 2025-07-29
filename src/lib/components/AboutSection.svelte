<script>
	import { fade } from 'svelte/transition';
</script>

<div class="about-overlay" transition:fade>
	<div class="about-content">
		<h2>About</h2>
		<p>
			Hi, I’m Cian – an Information and Interaction Designer based in Basel, Switzerland. <br /> I
			combine design, animation, and code to create clear and engaging visual stories. My work
			explores new ways of showing complex ideas while respecting the principles of typography and
			visual communication. I enjoy experimenting with tools and techniques to find fresh visual
			approaches. <br /> Currently, I work on data-driven stories with a focus on geopolitics, blending
			journalism, design, and interaction. I create cross-disciplinary projects that involve visual storytelling,
			mapping, and motion design to make complex information more accessible.
		</p>
		<p>
			<strong>Contact:</strong><br />
			jochemcian@gmail.com<br />
			<a href="https://www.instagram.com/cianjochem" target="_blank">Instagram</a> |
			<a href="https://vimeo.com/user99868500" target="_blank">Vimeo</a>
		</p>
	</div>
</div>

<style>
	.about-overlay {
		position: absolute;
		top: 100px;
		left: 0;
		width: 100%;
		background: #f7f7f7;
		z-index: 10;
		padding: 2rem 0;
		border-top: 1px solid #ddd;
		height: calc(100vh - 100px); /* fix auf Höhe unter Header */
		overflow: hidden; /* kein Scrollen */
	}

	a {
		text-decoration: underline;
	}

	.about-content {
		max-width: 60ch;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
