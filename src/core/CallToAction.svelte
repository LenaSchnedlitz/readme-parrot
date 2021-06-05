<script lang="ts">
  export let onclick: () => void;
</script>

<button on:click={onclick}>
  <slot />
</button>

<style>
  button {
    margin-top: 1.5rem;
    padding: 0.25rem 0.5rem;

    color: var(--gray-1);
    font-family: var(--monospace);
    font-size: var(--font-size);
    font-weight: 700;

    background-image: linear-gradient(to right, var(--primary-color-6), var(--primary-color), var(--primary-color-6));
    background-size: 200% auto;
    border: none;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);

    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  button:hover {
    background-position: right center;
    box-shadow: 1px 3px 8px 2px var(--primary-color-3);
  }

  @media all and (min-width: 900px) {
    button {
      margin-top: 2rem;
      padding: 0.5rem 1rem;
    }

    button:focus-visible {
      background: var(--secondary-color);
    }
  }
</style>
