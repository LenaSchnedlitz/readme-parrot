<p>
  <slot />
</p>

<style>
  p {
    margin: 0;
    color: var(--grey-9);
    font-family: var(--sans-serif);
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.25;

    background: radial-gradient(ellipse, var(--primary-color-1), var(--primary-color-1-transparent) 80%);
  }

  p :global(strong) {
    font-weight: 600;
    background: linear-gradient(to right, var(--secondary-color-4) 26%, var(--primary-color-6), var(--tertiary-color));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @supports (background: -webkit-named-image(i)) {
    /* safari only - fixes gradient text */
    p :global(strong) {
      background: linear-gradient(to right, var(--secondary-color-4) 26%, var(--tertiary-color) 200%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
    }
  }

  @media all and (min-width: 900px) {
    p {
      font-size: 3.5rem;
      line-height: 1.15;
    }
  }
</style>
