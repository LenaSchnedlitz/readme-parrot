<script lang="ts">
  import Icon from '../../components/Icon.svelte';

  const scroll = () => {
    document.body.scrollTo(0, document.body.scrollHeight);
  };
</script>

<button on:click={scroll}>
  <span>
    <slot />
  </span>
  <Icon name="arrow-right" />
</button>

<style>
  button {
    display: none;
  }

  @media all and (min-width: 900px) {
    button {
      position: absolute;
      right: var(--frame);
      bottom: calc(var(--frame) - 1rem);
      z-index: 1000;
      transform: rotate(90deg);
      transform-origin: top right;
      display: initial;
      padding: 0;

      background: transparent;
      border: none;

      color: var(--secondary-color-8);
      font-family: var(--monospace);
      font-size: var(--font-size);
      font-style: italic;
      font-weight: 700;

      cursor: pointer;
      outline: none;
    }

    span {
      transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }

    button:hover span {
      word-spacing: 0.5rem;
      padding-right: 0.5rem;
    }

    button:focus-visible {
      word-spacing: 0.5rem;
      padding-right: 0.5rem;
      color: var(--secondary-color);
    }
  }
</style>
