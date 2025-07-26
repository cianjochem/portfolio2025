<script>
  import { onMount } from 'svelte';
  import HeaderDesktop from './HeaderDesktop.svelte';
  import HeaderMobile from './HeaderMobile.svelte';

  let isMobile = false;

  onMount(() => {
    const check = () => isMobile = window.matchMedia('(max-width: 768px)').matches;
    check();

    const media = window.matchMedia('(max-width: 768px)');
    media.addEventListener('change', check);
    return () => media.removeEventListener('change', check);
  });
</script>

{#if isMobile}
  <HeaderMobile />
{:else}
  <HeaderDesktop />
{/if}
