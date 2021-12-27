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
  import { onMount } from 'svelte';

  let editor;

  const action = () => {
    document.body.scrollTo(0, 0.4 * window.innerHeight);
    if (editor) {
      editor.focus();
      editor.doc.setSelection({ line: 3, ch: 2 }, { line: 3, ch: 7 });
    }
  };

  onMount(() => {
    // make sure landing height is multiple of 40 (= tile height)
    // + workaround for 100vh problem in iOS safari
    const setHeights = () => {
      const landingHeight = 40 * Math.floor(window.innerHeight / 40);
      document.documentElement.style.setProperty('--landing-height', `${landingHeight}px`);
      document.documentElement.style.setProperty('--full-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', setHeights);
    setHeights();
  });
</script>

<main>
  <section class="landing">
    <Title>
      <Logo />
      README Parrot
    </Title>
    <BackgroundLines />
    <DarkModeToggle />
    <Scroller>Scroll down</Scroller>
  </section>
  <section class="content">
    <section class="intro">
      <Tagline>A simple <strong>README template</strong> to get you started.</Tagline>
      <CallToAction onclick={action}>
        Try it out now!
        <Icon name="corner-right-down" />
      </CallToAction>
    </section>
    <AppContent bind:editor />
  </section>
</main>
<Footer author="Lena Schnedlitz" projectLink="https://gitlab.com/LenaSchnedlitz/readme-parrot" />

<style>
  .landing {
    position: relative;
    height: var(--landing-height);
    background-color: #f3f2d8;
    background-image: linear-gradient(to top right, #fafaf055, #fafaf0), url('../background.svg');
    background-repeat: repeat;
    background-position: right top;
    overflow: visible;
  }

  @media (prefers-color-scheme: dark) {
    :global(body:not(.light)) .landing {
      background-color: #343319;
      background-image: linear-gradient(to top right, #14140a55, #14140a), url('../background.svg');
    }
  }

  :global(body.dark) .landing {
    background-color: #343319;
    background-image: linear-gradient(to top right, #14140a55, #14140a), url('../background.svg');
  }

  .content {
    position: relative;
    min-height: var(--full-height);
    margin-top: calc(calc(var(--frame) * 5) - var(--full-height));
  }

  .intro {
    padding: var(--frame) var(--frame) calc(var(--frame) * 0.5);
    z-index: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .intro :global(button) {
    margin-top: 4rem;
  }

  @media all and (min-width: 900px) {
    .content {
      margin-top: calc(-0.84 * var(--full-height));
    }
    .intro {
      padding-left: 15vw;
      padding-right: 15vw;
    }

    .intro :global(button) {
      /* move text farther down */
      margin-top: 2rem;
      margin-bottom: -2rem;
    }
  }
</style>
