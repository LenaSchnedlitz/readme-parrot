<script lang="ts">
  export let primary = false;
  export let slim = false;
  export let onclick: () => void;
</script>

<button on:click={onclick} class:primary class:slim>
  <slot />
</button>

<style>
  button {
    width: calc(100% - calc(var(--frame) * 4));
    margin: var(--frame) calc(var(--frame) * 2);
    padding: 1rem 1.5rem;
    border-radius: 4px;

    background: transparent;
    border: solid 1px var(--primary-color);
    color: var(--primary-color-6);

    font-family: var(--monospace);
    font-size: var(--font-size);
    font-weight: 700;
    text-transform: uppercase;

    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);

    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  button:hover {
    color: var(--gray-1);
    background: linear-gradient(to right, var(--primary-color), var(--primary-color-6));
    border-color: var(--primary-color-6);
    box-shadow: 2px 5px 16px 2px var(--primary-color-2);
  }

  button.primary {
    color: var(--gray-1);
    background-image: linear-gradient(to right, var(--primary-color-6), var(--primary-color), var(--primary-color-6));
    background-size: 200% auto;
    border: none;
  }

  button.primary:hover {
    background-position: right center;
  }

  button.slim {
    margin: 0;
    padding: 0.5rem 1rem;
  }

  @media all and (min-width: 900px) {
    button {
      width: auto;
    }

    button:not(.primary):focus-visible {
      color: var(--gray-1);
      background: linear-gradient(to right, var(--primary-color), var(--primary-color-6));
      border-color: transparent;
      box-shadow: 2px 5px 16px 2px var(--primary-color-2), 0 0 0 4px var(--secondary-color-3);
    }

    button.primary:focus-visible {
      background-position: right center;
      box-shadow: 2px 5px 16px 2px var(--primary-color-2), 0 0 0 4px var(--secondary-color-3);
    }
  }
</style>
