<script lang="ts">
  export let name: string;
  export let fat = false;
</script>

<svg width="24" height="24" viewBox="0 0 24 24" class="icon" class:fat aria-hidden="true">
  <use xlink:href="icons.svg#{name}" />
</svg>

<style>
  svg {
    position: relative;
    width: 0.9em;
    height: 0.9em;
    bottom: calc(var(--line-height) - 24px);
    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
    stroke-linecap: round;
  }

  .fat {
    stroke-width: 3px;
  }
</style>
