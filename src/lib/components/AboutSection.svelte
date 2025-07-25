<script>
  import { fade } from 'svelte/transition';
  export let onClose;
</script>

<style>
  .about-overlay {
  position: absolute;
  top: 100px; /* <-- z.B. Höhe des Header-Layouts */
  left: 0;
  width: 100%;
  background: #f7f7f7;
  z-index: 10;
  padding: 2rem 0;
  overflow-y: auto;
  border-top: 1px solid #ddd;
  min-height: calc(100% - 100px); /* damit es alles darunter abdeckt */
}

  .about-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .close-button {
    font-size: 1.5rem;
    cursor: pointer;
  }

  a {
    text-decoration: underline;
  }
</style>

<div class="about-overlay" transition:fade>
  <div class="about-header">
    <h2>About</h2>
    <div
      class="close-button"
      on:click={onClose}
      tabindex="0"
      role="button"
      aria-label="Close About Section"
    >
      ×
    </div>
  </div>

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