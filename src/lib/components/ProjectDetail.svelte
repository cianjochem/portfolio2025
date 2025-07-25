<script>
  export let project;
</script>

<h1>{project.title}</h1>
<p>{project.description}</p>

{#each project.images as image}
  <img src={image} alt={project.title} />
{/each}

{#if project.vimeo}
  <iframe src={project.vimeo} frameborder="0" allowfullscreen></iframe>
{/if}
