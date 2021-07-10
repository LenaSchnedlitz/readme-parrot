<script lang="ts">
  export let onclick: () => void;
</script>

<button on:click={onclick}>
  <slot />
</button>

<style>
  button {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;

    color: var(--gray-1);
    font-family: var(--monospace);
    font-size: var(--font-size);
    font-weight: 700;

    background-image: linear-gradient(to right, var(--primary-color-6), var(--primary-color), var(--primary-color-6));
    background-size: 200% auto;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 14px 0 var(--primary-color-3);
    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);

    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  button:hover {
    background-position: right center;
    box-shadow: 0 4px 14px 0 var(--primary-color-4);
  }

  @media all and (min-width: 900px) {
    button {
      margin-top: 2rem;
    }

    button:focus-visible {
      background: var(--secondary-color);
    }
  }

  @media (prefers-color-scheme: dark) {
    :global(body:not(.light)) button {
      background-image: linear-gradient(to right, var(--primary-color), var(--primary-color-4), var(--primary-color));
      color: var(--gray-9);
    }
  }

  @media (prefers-color-scheme: dark) and (min-width: 900px) {
    :global(body:not(.light)) button:focus-visible {
      background: var(--secondary-color);
    }
  }

  :global(body.dark) button {
    background-image: linear-gradient(to right, var(--primary-color), var(--primary-color-4), var(--primary-color));
    color: var(--gray-9);
  }

  @media all and (min-width: 900px) {
    :global(body.dark) button:focus-visible {
      background: var(--secondary-color);
    }
  }
</style>
