<script lang="ts">
  export let hidden = false;
</script>

<section class:hidden>
  <slot />
</section>

<style>
  section {
    width: 100%;
    display: flex;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.75s;
  }

  section.hidden {
    transform: scale(0.2);
    opacity: 0;
    pointer-events: none;
  }

  section.hidden :global(*) {
    display: none;
  }
</style>
