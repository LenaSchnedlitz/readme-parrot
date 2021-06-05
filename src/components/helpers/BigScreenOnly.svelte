<script lang="ts">
  export let ariaHidden = 'false';
</script>

<span aria-hidden={ariaHidden}>
  <slot />
</span>

<style>
  span {
    display: none;
  }

  @media all and (min-width: 900px) {
    span {
      display: initial;
    }
  }
</style>
