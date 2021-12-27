<script lang="ts">
  export let primary = false;
  export let slim = false;
  export let onclick: () => void;
  export let onblur = () => {};
</script>

<button on:click={onclick} on:blur={onblur} class:primary class:slim>
  <slot />
</button>

<style>
  button {
    width: calc(100% - calc(var(--frame) * 4));
    margin: var(--frame) calc(var(--frame) * 2);
    padding: 0.5rem 1rem;
    border-radius: 24px;
    display: flex;
    justify-content: center;

    background: transparent;
    border: none;
    box-shadow: inset 0 0 0 1px var(--primary-color-8);

    font-family: var(--sans-serif);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--primary-color-8);

    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);

    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  button :global(svg) {
    margin-right: 0.25rem;
  }

  button:hover {
    color: var(--grey-1);
    background: linear-gradient(to right, var(--primary-color), var(--tertiary-color-6));
    box-shadow: none;
  }

  button.primary {
    color: var(--grey-1);
    background-image: linear-gradient(
      to right,
      var(--secondary-color-6) 13%,
      var(--primary-color),
      var(--tertiary-color) 100%
    );
    background-size: 200% auto;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 24px;
    letter-spacing: 0.1em;
    box-shadow: 35px 35px 68px 0px rgba(0, 0, 0, 0.25), inset -8px -8px 16px 0px rgba(0, 0, 0, 0.25),
      inset 0px 11px 28px 0px rgba(255, 255, 255, 0.75);
  }

  button.primary :global(svg) {
    margin-right: 0.5rem;
  }

  button.primary:hover {
    background-position: right center;
  }

  @media all and (min-width: 900px) {
    button {
      width: auto;
      margin: 2rem auto;
    }

    button:not(.primary):focus-visible {
      color: var(--grey-1);
      background: var(--secondary-color);
      box-shadow: none;
    }

    button.primary:focus-visible {
      box-shadow: 0 0 0 4px var(--secondary-color-2);
    }
  }
</style>
