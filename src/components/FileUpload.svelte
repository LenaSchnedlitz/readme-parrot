<script lang="ts">
  import Icon from './Icon.svelte';

  export let accept = '*.*';
  export let label = '';
  export let onchange: (e: any) => void;
  export let primary = true;

  let input: HTMLInputElement;
</script>

<label>
  {label}
  <input type="file" {accept} class="hidden" bind:this={input} on:change={onchange} />

  <button class:primary on:click={() => input.click()}>
    <Icon fat name="upload" />
    <slot />
  </button>
</label>

<style>
  button {
    width: auto;
    margin: var(--frame) calc(var(--frame) * 2);
    padding: 0.5rem 1rem;
    border-radius: 4px;

    background: rgba(0, 0, 0, 0.1);
    border: solid 1px white;
    box-shadow: 0 5px 50px rgba(0, 0, 0, 0.3);
    color: white;

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
    background: var(--primary-color);
    border-color: transparent;
    box-shadow: 2px 5px 16px 2px rgba(0, 0, 0, 0.2);
  }

  button.primary {
    background: var(--primary-color);
    border: none;
  }

  button.primary:hover {
    background: var(--secondary-color);
  }

  @media all and (min-width: 900px) {
    button {
      width: auto;
    }

    button:focus-visible {
      background: var(--primary-color);
      border-color: transparent;
      box-shadow: 2px 5px 16px 2px rgba(0, 0, 0, 0.2), 0 0 0 4px var(--secondary-color-3);
    }
  }

  .hidden {
    display: none;
  }
</style>
