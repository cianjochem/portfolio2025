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

  .about-button {
    cursor: pointer;
    text-decoration: underline;
    user-select: none;
    font-size: 16px;
  }

  .projects-grid {
    column-count: 3;
    column-gap: 15px;
  }

  @media (max-width: 1024px) {
    .projects-grid {
      column-count: 2;
      column-gap: 15px;
    }
  }

  @media (max-width: 640px) {
    .projects-grid {
      column-count: 1;
    }
  }

  .project-card {
    display: inline-block; /* wichtig für column layout */
    width: 100%;
    margin-bottom: 1.5rem;
    break-inside: avoid; /* verhindert zerschossene Cards */
  }


  .project-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 5px;
  }

  .project-card:hover {
    transform: scale(1.02);
  }

  .project-tag {
    color: #555;
    text-transform: lowercase;
  }


</style>

<div class="page-wrapper">
  <!-- Sticky Header -->
  <div class="sticky-header">
    <Header />
    <div class="header-content">
      <p>Information and Interaction Design</p>
      <div 
        class="about-button" 
        on:click={() => showAbout = !showAbout}
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

  <!-- Cards nur wenn About nicht aktiv -->
  {#if !showAbout}
    <div class="projects-grid">
      {#each projects as project}
        <a 
          href={`/projects/${project.slug}`} 
          class="project-card" 
          aria-label={`View project: ${project.title}`}
        >
          <img src={project.teaserImage || '/default.jpg'} alt={project.title} />
          <p class="project-tag">{project.type}</p>
          <h2>{project.title}</h2>
        </a>
      {/each}
    </div>
  {/if}
</div>
