<p>
  <slot />
</p>

<style>
  p {
    margin: 0;
    color: #fefefe;
    font-family: var(--sans-serif);
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.25;
  }

  p :global(strong) {
    font-weight: 800;
    background: linear-gradient(45deg, var(--primary-color), var(--primary-color-7));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media all and (min-width: 900px) {
    p {
      font-size: 3.5rem;
      line-height: 1.15;
    }
  }
</style>
