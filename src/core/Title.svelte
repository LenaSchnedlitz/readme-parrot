<h1>
  <slot />
</h1>

<style>
  h1 {
    position: relative;
    margin: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    padding: var(--frame);

    font-size: var(--font-size);
    font-weight: 600;

    pointer-events: none;
  }

  @media all and (min-width: 900px) {
    h1 {
      position: absolute;
    }
  }
</style>
