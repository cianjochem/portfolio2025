<script>
  import { fade } from 'svelte/transition';
</script>

<style>
  .about-overlay {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background: #f7f7f7;
    z-index: 10;
    padding: 2rem 0;
    border-top: 1px solid #ddd;
    height: calc(100vh - 100px); /* fix auf Höhe unter Header */
    overflow: hidden; /* kein Scrollen */
  }

  a {
    text-decoration: underline;
  }

  .about-content {
    max-width: 60ch;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

<div class="about-overlay" transition:fade>
  <div class="about-content">
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
</div>
