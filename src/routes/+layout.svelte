<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics();

	let showAbout = false;
</script>

<div class="layout-container">
	<!-- Sticky Header -->
	<header class="sticky-header">
		<div class="layout-inner">
			<a href="/" class="header-link">
				<Header />
			</a>

			<div class="header-content">
				<h2>Information and Interaction Design</h2>

				<div
					class="about-button"
					on:click={() => (showAbout = !showAbout)}
					tabindex="0"
					role="button"
					aria-label={showAbout ? 'Close About Section' : 'Open About Section'}
				>
					<h2>{showAbout ? 'Close ×' : 'About'}</h2>
				</div>
			</div>
		</div>
	</header>

	<!-- About Section -->
	{#if showAbout}
		<div class="layout-inner">
			<AboutSection />
		</div>
	{:else}
		<main class="layout-inner">
			<slot />
		</main>
	{/if}
</div>

<style>
	/* Gesamtstruktur */
	.layout-container {
		padding-bottom: 2rem;
	}

	/* Zentrierte Max-Breite für alle Inhalte */
	.layout-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.2rem;
	}

	/* Sticky Header */
	.sticky-header {
		position: sticky;
		top: 0;
		background: #f7f7f7;
		z-index: 100;
		padding-top: 2rem;
	}

	.header-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0 1rem;
	}

	.about-button {
		cursor: pointer;
		text-decoration: none;
		user-select: none;
	}
</style>
