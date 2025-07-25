<script>
  export let project;
</script>

<h1>{project.title}</h1>
<p>{project.description}</p>

{#if project.vimeo}
  <iframe src={project.vimeo} frameborder="0" allowfullscreen></iframe>
{/if}

{#each project.images as image}
  <img src={image} alt={project.title} />
{/each}
