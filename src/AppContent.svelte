<script lang="ts">
  import Button from './components/Button.svelte';
  import Icon from './components/Icon.svelte';
  import Appear from './components/helpers/Appear.svelte';

  let finishHidden = true;

  export const initiate: () => void = () => {
    /* TODO add init action here */
  };

  const completeProcess = () => {
    /* TODO add finish action here */
  };
</script>

<section>
  <article># Title _Tagline_ ## Quickstart ```sh # TODO ``` # TODO</article>
  <Appear hidden={finishHidden}>
    <Button primary onclick={completeProcess}><Icon fat name="heart" /> Done!</Button>
    <!-- TODO -->
  </Appear>
</section>

<style>
  section {
    position: relative;
    width: calc(100% - calc(var(--frame) * 4));
    /* margin: var(--frame) auto; */

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 0.2s;
  }

  @media all and (min-width: 900px) {
    section {
      width: 50%;
      min-width: 500px;
      max-width: 950px;
    }
  }
</style>
