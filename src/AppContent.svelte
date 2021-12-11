<script lang="ts">
  import Button from './components/Button.svelte';
  import Icon from './components/Icon.svelte';
  import sampleReadmeContent from './sample-readme-content.js';
  import { onMount } from 'svelte';
  import EasyMDE from 'easymde';
  import 'easymde/dist/easymde.min.css';

  let easymde: EasyMDE;
  export let editor = undefined;
  $: editor = easymde && easymde.codemirror;

  const downloadlink = document.createElement('a');

  const download = () => {
    downloadlink.download = 'README.md';
    downloadlink.href = URL.createObjectURL(new Blob([easymde.value()], { type: 'text/plain' }));
    downloadlink.click();
  };

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(easymde.value());
  };

  onMount(() => {
    easymde = new EasyMDE({
      autoDownloadFontAwesome: false,
      autosave: {
        enabled: false,
        uniqueId: 'readme',
      },
      blockStyles: {
        italic: '_',
      },
      indentWithTabs: false,
      initialValue: sampleReadmeContent,
      toolbar: [
        'undo',
        'redo',
        '|',
        'heading',
        'bold',
        'italic',
        'code',
        '|',
        'link',
        'image',
        'unordered-list',
        'table',
        '|',
        'preview',
      ],
    });
  });
</script>

<section>
  <Button slim onclick={copyToClipBoard}><Icon fat name="clipboard" /> Copy</Button>
  <textarea />
  <Button primary onclick={download}><Icon fat name="download" /> Download file</Button>
</section>

<style>
  section {
    position: relative;
    width: 100%;
  }

  section :global(button.slim) {
    display: none;
  }

  section :global(.easymde-toolbar) {
    background: transparent;
    border: none;
    opacity: 1;
  }

  section :global(.easymde-toolbar i.separator) {
    border-left: 1px solid var(--gray-2);
  }

  section :global(.easymde-toolbar a) {
    color: var(--gray-7) !important;
  }

  section :global(.easymde-toolbar.disabled-for-preview a) {
    background: transparent;
    color: var(--gray-5) !important;
  }

  section :global(.easymde-toolbar a.active),
  section :global(.easymde-toolbar a:hover) {
    background: transparent;
    border-color: var(--secondary-color);
    color: var(--secondary-color-6) !important;
  }

  section :global(.easymde-toolbar.disabled-for-preview a.active:not(.no-disable)) {
    border-color: var(--secondary-color-2);
    color: var(--secondary-color-2) !important;
  }

  section :global(.CodeMirror) {
    background: var(--gray-1);
    border: none;
    border-radius: 0;
    color: var(--gray-9);
    font-family: var(--monospace);
    line-height: 1.3;
    height: auto;
    box-shadow: 20px 20px 60px var(--gray-2), -20px -20px 60px var(--gray-1);
  }

  section :global(.CodeMirror-vscrollbar) {
    display: none !important;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-1),
  section :global(.CodeMirror .CodeMirror-code .cm-header-2),
  section :global(.CodeMirror .CodeMirror-code .cm-header-3),
  section :global(.CodeMirror .CodeMirror-code .cm-header-4),
  section :global(.CodeMirror .CodeMirror-code .cm-header-5),
  section :global(.CodeMirror .CodeMirror-code .cm-header-6) {
    line-height: 1.3;
    padding: 0;
    margin: 0;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-1) {
    font-size: 3.052rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-2) {
    font-size: 2.441rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-3) {
    font-size: 1.953rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-4) {
    font-size: 1.563rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-5) {
    font-size: 1.25rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-6) {
    font-size: 1rem;
  }

  section :global(.CodeMirror .CodeMirror-selected),
  section :global(.CodeMirror-selectedtext) {
    background: var(--secondary-color-2);
    color: var(--gray-9);
  }

  section :global(.CodeMirror .CodeMirror-code .cm-comment) {
    background: var(--primary-color-2);
    border-radius: 0;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-comment:first-child) {
    border-radius: 2px 0 0 2px;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-comment:last-child) {
    border-radius: 0 2px 2px 0;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-link) {
    color: var(--secondary-color-5);
    font-weight: bold;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-url) {
    color: var(--secondary-color-5);
  }

  section :global(.cm-formatting-list),
  section :global(.cm-formatting-task),
  section :global(.cm-hr) {
    color: var(--gray-5);
  }

  section :global(.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word)) {
    border-radius: 0;
    background: transparent;
    border-bottom: dotted 2px var(--tertiary-color);
  }

  section :global(.easymde-statusbar) {
    display: none;
  }

  section :global(.easymde-preview) {
    background: var(--gray-1);
    border: none;
    color: var(--gray-9);
    font-family: var(--sans-serif);
  }

  section :global(.easymde-preview a) {
    color: var(--secondary-color-6);
  }

  section :global(.easymde-preview h1),
  section :global(.easymde-preview h2),
  section :global(.easymde-preview h3),
  section :global(.easymde-preview h4),
  section :global(.easymde-preview h5),
  section :global(.easymde-preview h6),
  section :global(.easymde-preview th),
  section :global(.easymde-preview strong) {
    font-weight: 600;
  }

  section :global(.easymde-preview code) {
    font-family: var(--monospace) !important;
  }

  section :global(.easymde-preview pre) {
    background: var(--primary-color-1);
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
  }

  section :global(.easymde-preview ul),
  section :global(.easymde-preview ol) {
    padding: 0 1.5rem !important;
  }

  section :global(.easymde-preview li p) {
    margin: 0.5rem 0 0.5rem 0.25rem !important;
  }

  section :global(.easymde-preview table) {
    margin-bottom: 1rem;
  }

  section :global(.easymde-preview table td),
  section :global(.easymde-preview table th),
  section :global(.easymde-preview-side table td),
  section :global(.easymde-preview-side table th) {
    border: 1px solid var(--gray-2);
    padding: 5px;
  }

  section :global(.easymde-preview hr) {
    margin: 2rem 0;
    border: 1px var(--gray-2);
  }

  @media all and (min-width: 900px) {
    section {
      width: auto;
      margin: 0 calc(var(--frame) * 2);
      padding: calc(var(--frame) * 2) 0 calc(var(--frame) * 0.5);
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
    }

    section :global(button) {
      margin: calc(var(--frame) * 0.5) auto;
    }

    section :global(button.slim) {
      display: block;
      position: absolute;
      right: var(--frame);
      top: calc(50px + calc(var(--frame) * 3));
      z-index: 100;
    }

    section :global(.CodeMirror) {
      padding: 0;
      flex-grow: 1;
      box-sizing: border-box;
    }

    section :global(.CodeMirror-scroll) {
      padding: calc(var(--frame) * 1) calc(var(--frame) * 1.5);
      box-sizing: border-box;
      overflow-x: hidden !important;
    }

    section :global(.easymde-preview) {
      padding: calc(var(--frame) * 1) calc(var(--frame) * 1.5);
      border: solid 1px var(--tertiary-color-2);
    }
  }

  @media all and (min-width: 1600px) {
    section {
      width: 1400px;
      margin: 0 auto;
    }
  }
</style>
