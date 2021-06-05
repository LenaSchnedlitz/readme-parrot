<script lang="ts">
  import Icon from './Icon.svelte';

  export let external = false;
  export let href: string;
</script>

<a {href} rel="noreferrer" target={external ? '_blank' : ''}>
  <span>
    <slot />
  </span>
  {#if external}
    <Icon name="link" />
  {/if}
</a>

<style>
  a {
    color: var(--primary-color);
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
  }

  a > :global(svg) {
    width: 1em;
    height: 1em;
  }

  a:hover {
    color: var(--primary-color-3);
  }

  a:hover > span {
    text-decoration: underline;
  }

  a:focus-visible {
    color: var(--secondary-color);
    text-decoration: underline;
    outline: none;
  }
</style>
