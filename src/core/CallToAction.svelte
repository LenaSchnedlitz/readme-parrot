<script lang="ts">
  export let onclick: () => void;
</script>

<button on:click={onclick}>
  <slot />
</button>

<style>
  button {
    align-self: flex-end;
    color: var(--grey-9);
    font-family: var(--monospace);
    font-size: var(--font-size);
    font-style: italic;
    font-weight: 700;

    background: none;
    border: none;

    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  button :global(svg) {
    bottom: -6px;
  }

  @media all and (min-width: 900px) {
    button:focus-visible {
      border-bottom: solid 2px var(--secondary-color);
    }
  }
</style>
