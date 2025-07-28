<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';

	let showAbout = false;
</script>

<div class="layout-wrapper">
	<!-- Sticky Header -->
	<div class="sticky-header">
		<a href="/" class="header-link">
			<Header />
		</a>
		<div class="header-content">
			<p>Information and Interaction Design</p>
			<div
				class="about-button"
				on:click={() => (showAbout = !showAbout)}
				tabindex="0"
				role="button"
				aria-label={showAbout ? 'Close About Section' : 'Open About Section'}
			>
				{showAbout ? '×' : 'About'}
			</div>
		</div>
	</div>

	<!-- About Section -->
	{#if showAbout}
		<AboutSection />
	{/if}

	<!-- Page Content -->
	{#if !showAbout}
		<slot />
	{/if}
</div>

<style>
	.layout-wrapper {
		width: 80vw;
		margin: 0 auto;
		padding-bottom: 2rem;
		position: relative;
	}

	.sticky-header {
		position: sticky;
		top: 0;
		background: #f7f7f7;
		z-index: 100;
		padding-top: 2rem;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0 1rem;
		font-weight: bold;
	}

	.header-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.about-button {
		cursor: pointer;
		text-decoration: underline;
		user-select: none;
		font-size: 16px;
	}
</style>
