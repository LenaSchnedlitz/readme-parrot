<script lang="ts">
  export let onclick: () => void;
</script>

<button on:click={onclick}>
  <slot />
</button>

<style>
  button {
    align-self: flex-end;
    color: var(--secondary-color-8);
    font-family: var(--monospace);
    font-size: var(--font-size);
    font-style: italic;
    font-weight: 700;

    background: none;
    border: none;

    cursor: pointer;
    outline: none;
    transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);

    /* move text farther down */
    margin-top: 2rem;
    margin-bottom: -2rem;
    z-index: 1;
  }

  button :global(svg) {
    bottom: -6px;
  }

  button:hover {
    word-spacing: 0.5rem;
    padding-right: 0.5rem;
  }

  button:focus-visible {
    word-spacing: 0.5rem;
    padding-right: 0.5rem;
    color: var(--secondary-color);
  }
</style>
