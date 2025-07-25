<script>
  import { projects } from '$lib/data/projects.js';
  import P5Header from '$lib/components/P5Header.svelte';
  import { fade } from 'svelte/transition';

  let showAbout = false;
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    font-weight: bold;
  }

  .about-button {
    cursor: pointer;
    text-decoration: underline;
  }

  .about-overlay {
    position: fixed;
    inset: 0;
    background: white;
    z-index: 1000;
    padding: 2rem;
    overflow-y: auto;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
    padding: 2rem;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    text-align: center;
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

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      padding: 1rem;
    }

    header {
      padding: 1rem;
    }
  }
</style>

<!-- Header with background sketch -->
<div style="position: relative; height: 160px;">
  <P5Header />
</div>

<header>
  <h2>Information and Interaction Design</h2>
  <div 
    class="about-button" 
    on:click={() => showAbout = true} 
    tabindex="0" 
    role="button" 
    aria-label="Open About Section"
  >
    INFO
  </div>
</header>

<!-- About Overlay -->
{#if showAbout}
  <div class="about-overlay" transition:fade>
    <div 
      class="close-button" 
      on:click={() => showAbout = false} 
      tabindex="0" 
      role="button" 
      aria-label="Close About Section"
    >
      ×
    </div>
    <h2>About</h2>
    <p>
      Hi, my name is Cian and I'm a graphic/motion designer and creative coder based in Basel, Switzerland.
    </p>
    <p>
      In my work, I constantly try to think outside of the circle and experimentally find new visual languages while respecting the rules of typography and visual communication.
    </p>
    <p>
      <strong>Contact:</strong><br>
      jochemcian@gmail.com<br>
      <a href="https://www.instagram.com/cianjochem" target="_blank">Instagram</a> |
      <a href="https://vimeo.com/user99868500" target="_blank">Vimeo</a>
    </p>
  </div>
{/if}

<!-- Projects Grid -->
<div class="projects-grid">
  {#each projects as project}
    <a 
      href={`/projects/${project.slug}`} 
      class="project-card" 
      aria-label={`View project: ${project.title}`}
    >
      <img src={project.teaserImage || '/default.jpg'} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.type}</p>
    </a>
  {/each}
</div>
