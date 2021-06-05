<script lang="ts">
  export let author: string;
  export let projectLink: string;
</script>

<footer>
  <a href={projectLink}>
    by
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="10" />
      <path
        d="m6.25 5.64v10.35c0 0.38 0.11 0.66 0.32 0.83 0.22 0.16 0.53 0.24 0.91 0.24 0.25 0 0.48-0.03 0.71-0.08 0.23-0.06 0.44-0.13 0.64-0.21l0.68 1.9c-0.32 0.17-0.71 0.32-1.17 0.44-0.46 0.13-0.99 0.19-1.59 0.19-1.15 0-2-0.33-2.54-0.99-0.54-0.67-0.81-1.56-0.81-2.67V7.59H0.59V5.64Zm9.64 11.63c0.47 0 0.86-0.07 1.14-0.22 0.29-0.15 0.44-0.37 0.44-0.67 0-0.2-0.06-0.37-0.17-0.51-0.11-0.14-0.33-0.27-0.66-0.4-0.32-0.13-0.8-0.28-1.44-0.45-0.88-0.23-1.59-0.57-2.14-1.01-0.55-0.44-0.82-1.08-0.82-1.93 0-0.85 0.35-1.56 1.06-2.12 0.71-0.56 1.74-0.84 3.09-0.84 0.85 0 1.59 0.11 2.22 0.33 0.64 0.22 1.19 0.49 1.65 0.83l-1.13 1.67c-0.4-0.25-0.82-0.44-1.28-0.58-0.46-0.15-0.91-0.22-1.38-0.22-0.91 0-1.37 0.25-1.37 0.74 0 0.16 0.06 0.3 0.17 0.42 0.12 0.11 0.34 0.23 0.67 0.36 0.32 0.12 0.8 0.27 1.42 0.45 0.62 0.17 1.16 0.38 1.61 0.6 0.46 0.23 0.82 0.53 1.07 0.92 0.25 0.38 0.38 0.88 0.38 1.5 0 0.7-0.21 1.28-0.62 1.76-0.41 0.47-0.96 0.82-1.65 1.05-0.68 0.23-1.43 0.35-2.25 0.35-0.92 0-1.74-0.13-2.45-0.4-0.71-0.26-1.31-0.61-1.81-1.04l1.43-1.6c0.37 0.29 0.79 0.53 1.26 0.72 0.47 0.19 0.99 0.29 1.55 0.29z"
      />
    </svg>
    <strong>{author}</strong>
  </a>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    background: var(--primary-color-1);
  }

  svg {
    padding: 0 4px 2px 8px;
    width: 17px;
    height: 17px;
  }

  circle {
    fill: var(--primary-color-9);
  }

  path {
    fill: var(--primary-color-1);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--primary-color-9);
    font-family: var(--sans-serif);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;

    outline: none;
  }

  strong {
    font-weight: 600;
  }

  a:hover,
  a:focus-visible {
    color: var(--gray-9);
  }

  a:hover circle,
  a:focus-visible circle {
    fill: var(--gray-9);
  }

  a:focus-visible strong {
    text-decoration: underline var(--secondary-color-4) 3px;
  }
</style>
