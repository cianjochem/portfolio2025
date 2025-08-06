<script>
	import { onMount } from 'svelte';

	const base = ['I', 'A', 'N', '', '', 'J', 'O', 'C', 'H', 'E']; // ohne C & M
	let myText = [];

	function regenerateTextLayout() {
		const mid = [...base];
		for (let i = 0; i < 28; i++) {
			const index = Math.floor(Math.random() * (mid.length + 1));
			mid.splice(index, 0, '');
		}

		myText = ['C', ...mid.slice(0, 38), 'M'];
	}

	onMount(() => {
		regenerateTextLayout();
		const interval = setInterval(regenerateTextLayout, 4000);
		return () => clearInterval(interval);
	});
</script>

<div class="header-row">
	{#each myText as char (Math.random())}
		<span class="char">{char}</span>
	{/each}
</div>

<style>
	.header-row {
		display: grid;
		grid-template-columns: repeat(40, 1fr);
		font-family: 'EverettBold', sans-serif;
		font-size: 1.3rem;
		position: relative;
		z-index: 0;
		width: 100%;
	}

	.char {
		text-align: left;
	}
</style>
