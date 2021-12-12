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
    // workaround for 100vh problem in iOS safari
    const setFullHeight = () => {
      document.documentElement.style.setProperty('--full-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', setFullHeight);
    setFullHeight();
  });
</script>

<main>
  <section class="landing">
    <Title>
      <Logo />
      README Parrot
    </Title>
    <section class="intro">
      <Tagline>Writing <strong>READMEs</strong> doesn't have to be tedious.</Tagline>
      <CallToAction onclick={action}>
        Get started now!
        <Icon name="corner-right-down" />
      </CallToAction>
    </section>
    <BackgroundLines />
    <DarkModeToggle />
    <Scroller>Scroll down</Scroller>
  </section>
  <section class="content">
    <AppContent bind:editor />
  </section>
</main>
<Footer author="Lena Schnedlitz" projectLink="https://gitlab.com/LenaSchnedlitz/readme-parrot" />

<style>
  .landing {
    position: relative;
    height: var(--full-height);
    background-image: url('../background.jpg');
    background-size: cover;
  }

  .intro {
    position: absolute;
    padding: 0 calc(var(--frame) * 2);
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  @media all and (min-width: 900px) {
    .intro {
      top: calc(var(--frame) * 4);
      padding-right: 30vw;
    }
  }

  .content {
    position: relative;
    min-height: var(--full-height);
    margin-top: calc(-0.62 * var(--full-height));
  }
</style>
