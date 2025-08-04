<script>
	import { onMount } from 'svelte';

	let topRow = [];
	let bottomRow = [];

	const topLetters = ['I', 'A', 'N']; // ohne C
	const bottomLetters = ['J', 'O', 'C', 'H', 'E']; // ohne M

	function getSortedRandomIndices(count, max) {
		const indices = new Set();
		while (indices.size < count) {
			const idx = Math.floor(Math.random() * max);
			indices.add(idx);
		}
		return Array.from(indices).sort((a, b) => a - b);
	}

	function regenerateTextLayout() {
		// --- TOP ROW ---
		const topMid = Array(39).fill('');
		const topIndices = getSortedRandomIndices(topLetters.length, 39); // 0–38
		topIndices.forEach((pos, i) => {
			topMid[pos] = topLetters[i]; // I, A, N in Reihenfolge
		});
		topRow = ['C', ...topMid]; // C an erster Stelle (index 0)

		// --- BOTTOM ROW ---
		const bottomMid = Array(39).fill('');
		const bottomIndices = getSortedRandomIndices(bottomLetters.length, 39); // 0–38
		bottomIndices.forEach((pos, i) => {
			bottomMid[pos] = bottomLetters[i]; // J, O, C, H, E in Reihenfolge
		});
		bottomRow = [...bottomMid, 'M']; // M an letzter Stelle (index 39)
	}

	onMount(() => {
		regenerateTextLayout();
		const interval = setInterval(regenerateTextLayout, 5000);
		return () => clearInterval(interval);
	});
</script>

<div class="header-wrapper">
	<div class="header-row">
		{#each topRow as char (Math.random())}
			<span class="char">{char}</span>
		{/each}
	</div>
	<div class="header-row">
		{#each bottomRow as char (Math.random())}
			<span class="char">{char}</span>
		{/each}
	</div>
</div>

<style>
	.header-wrapper {
		display: flex;
		flex-direction: column;
		font-size: 1.2rem;
		font-family: 'EverettBold', sans-serif;
		gap: 4px;
	}

	.header-row {
		display: grid;
		grid-template-columns: repeat(40, 1fr);
	}

	.char {
		text-align: left;
	}
</style>
