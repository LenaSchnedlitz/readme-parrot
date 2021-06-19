<script lang="ts">
  import AppContent from './AppContent.svelte';
  import Footer from './Footer.svelte';
  import CallToAction from './core/CallToAction.svelte';
  import Logo from './core/Logo.svelte';
  import Tagline from './core/Tagline.svelte';
  import Title from './core/Title.svelte';
  import DarkModeToggle from './core/stickies/DarkModeToggle.svelte';
  import Scroller from './core/stickies/Scroller.svelte';
  import BackgroundLines from './core/misc/BackgroundLines.svelte';
  import Icon from './components/Icon.svelte';

  let initiate: () => void;

  const action = () => {
    initiate();
    document.body.scrollTo(0, window.innerHeight);
  };
</script>

<main>
  <section class="landing">
    <Title>
      <Logo />
      README Parrot
    </Title>
    <section class="intro">
      <Tagline>Because all your <strong>READMEs</strong> are kind of the same.</Tagline>
      <CallToAction onclick={action}>
        Start writing now!
        <Icon name="edit" />
      </CallToAction>
    </section>
    <BackgroundLines />
    <DarkModeToggle />
    <Scroller>Get started</Scroller>
  </section>
  <section class="content">
    <Title>
      <Logo />
      README Parrot
    </Title>
    <AppContent bind:initiate />
  </section>
</main>
<Footer author="Lena Schnedlitz" projectLink="https://gitlab.com/LenaSchnedlitz/readme-parrot" />

<style>
  main {
    overflow: hidden;
  }

  .landing {
    position: relative;
    height: 100vh;

    background: radial-gradient(circle, var(--primary-color-1) 0, transparent 100%),
      radial-gradient(circle at left, var(--primary-color-2) 0, transparent 20%),
      radial-gradient(circle at right, var(--tertiary-color-2) 0, transparent 10%),
      radial-gradient(ellipse at top right, var(--primary-color-2) 7%, transparent 20%),
      radial-gradient(ellipse at top, var(--primary-color-2) 0, transparent 50%),
      radial-gradient(ellipse at top left, var(--tertiary-color-2) 0, transparent 20%),
      radial-gradient(ellipse at bottom right, var(--primary-color-2) 0, transparent 20%),
      radial-gradient(ellipse at bottom, var(--primary-color-2) 0, transparent 50%),
      radial-gradient(ellipse at bottom left, var(--primary-color-2) 0, transparent 50%),
      linear-gradient(to bottom right, var(--tertiary-color-2) 0, var(--primary-color-2) 100%);
  }

  .intro {
    position: absolute;
    padding: 0 calc(var(--frame) * 2);
    bottom: 15vh;
    z-index: 1;
  }

  @media all and (min-width: 900px) {
    .intro {
      top: 50vh;
      bottom: auto;
      padding-right: 30vw;
    }
  }

  .content {
    position: relative;
    min-height: 100vh;
  }

  @media (prefers-color-scheme: dark) {
    :global(body:not(.light)) .landing {
      background: radial-gradient(circle at top left, var(--tertiary-color-2) -50%, transparent 40%),
        radial-gradient(circle at right, var(--tertiary-color-2) -100%, transparent 20%),
        radial-gradient(circle at bottom left, var(--primary-color-3) 0, var(--primary-color-2) 200%);
    }
  }

  :global(body.dark) .landing {
    background: radial-gradient(circle at top left, var(--tertiary-color-2) -50%, transparent 40%),
      radial-gradient(circle at right, var(--tertiary-color-2) -100%, transparent 20%),
      radial-gradient(circle at bottom left, var(--primary-color-3) 0, var(--primary-color-2) 200%);
  }
</style>
