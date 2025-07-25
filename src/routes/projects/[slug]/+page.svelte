<script>
  import { projects } from '$lib/data/projects.js';
  import ProjectDetail from '$lib/components/ProjectDetail.svelte';
  export let params;

  const project = projects.find(p => p.slug === params.slug);
</script>

{#if project}
  <ProjectDetail {project} />
{:else}
  <p>Projekt nicht gefunden.</p>
{/if}
