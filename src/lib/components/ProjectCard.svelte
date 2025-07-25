<script>
  export let project;
</script>

<a href={`/projects/${project.slug}`}>
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</a>
