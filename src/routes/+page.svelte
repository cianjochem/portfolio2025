<script>
  import { projects } from '$lib/data/projects.js';
  import Header from '$lib/components/Header.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';

  let showAbout = false;
</script>

<style>
  .page-wrapper {
    width: 80vw;
    margin: 0 auto;
    padding-bottom: 2rem;
    position: relative;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    font-weight: bold;
  }

  .about-button {
    cursor: pointer;
    text-decoration: underline;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5vw;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    text-align: left;
    transition: transform 0.2s ease;
  }

  .project-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  .project-card:hover {
    transform: scale(1.02);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 4vw;
    }
  }

  @media (max-width: 640px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 5vw;
    }

    header {
      padding: 1rem 0;
    }
  }
</style>

<div class="page-wrapper">

  <!-- Dynamisches Letter-Header-Layout -->
  <Header />

  <!-- Titel & About-Button -->
  <header>
    <h2>Information and Interaction Design</h2>
    <div 
      class="about-button" 
      on:click={() => showAbout = true}
      tabindex="0"
      role="button"
      aria-label="Open About Section"
    >
      About
    </div>
  </header>

  <!-- About Section (Komponente) -->
  {#if showAbout}
    <AboutSection onClose={() => showAbout = false} />
  {/if}

  <!-- Projektübersicht -->
  <div class="projects-grid">
    {#each projects as project}
      <a 
        href={`/projects/${project.slug}`} 
        class="project-card" 
        aria-label={`View project: ${project.title}`}
      >
        <img src={project.teaserImage || '/default.jpg'} alt={project.title} />
        <p>{project.type}</p>
        <h2>{project.title}</h2>
      </a>
    {/each}
  </div>
</div>
