<script>
  let showAbout = false;

  const projects = [
    {
      title: "Hier kommt ein Projekt",
      slug: "visual-story-1",
      thumbnail: "/images/story1.jpg",
      description: "Text Text Text."
    },
    {
      title: "Hier kommt ein Projekt",
      slug: "3d-projekt",
      thumbnail: "/images/3d.jpg",
      description: "Text Text Text."
    },
    {
      title: "Hier kommt ein Projekt",
      slug: "videoanalyse",
      thumbnail: "/images/video.jpg",
      description: "Text Text Text."
    }
  ];
</script>

<section class="p-8 max-w-5xl mx-auto space-y-10">

  <h1 class="text-4xl font-bold">Hallo 👋 Ich liebe Sie!</h1>

  <button
    class="underline text-blue-600 hover:text-blue-800"
    on:click={() => (showAbout = !showAbout)}
  >
    {showAbout ? 'JAJAJAJA' : 'Klick mal da druf'}
  </button>

  {#if showAbout}
    <div class="bg-gray-100 p-4 rounded shadow-md">
      <p>
        Du Opfer.
      </p>
    </div>
  {/if}

  <h2 class="text-2xl font-semibold">Projekte</h2>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <a
        href={`/projekte/${project.slug}`}
        class="group block rounded overflow-hidden shadow hover:shadow-lg transition"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />
        <div class="p-4 bg-white">
          <h3 class="text-lg font-bold">{project.title}</h3>
          <p class="text-sm text-gray-600">{project.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>
