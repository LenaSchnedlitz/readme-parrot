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

  section :global(.editor-toolbar) {
    background: var(--primary-color-1);
    border: none;
    opacity: 1;
    border-radius: 2px 2px 0 0;
  }

  section :global(.editor-toolbar i.separator) {
    border-left: 1px solid var(--primary-color-2);
    border-right: none;
  }

  section :global(.editor-toolbar button) {
    color: var(--primary-color-8) !important;
  }

  section :global(.editor-toolbar.disabled-for-preview button) {
    background: transparent;
    color: var(--grey-5) !important;
  }

  section :global(.editor-toolbar button.active),
  section :global(.editor-toolbar button:hover) {
    background: transparent;
    border-color: var(--secondary-color);
    color: var(--secondary-color-6) !important;
  }

  section :global(.editor-toolbar.disabled-for-preview button.active:not(.no-disable)) {
    border-color: var(--secondary-color-2);
    color: var(--secondary-color-2) !important;
  }

  section :global(.CodeMirror) {
    background: var(--grey-0);
    border: none;
    border-radius: 0 0 2px 2px;
    color: var(--grey-9);
    height: auto;
    box-shadow: 8px 14px 38px rgba(0, 0, 0, 0.1), 1px 3px 8px rgba(0, 0, 0, 0.05);
  }

  section :global(.CodeMirror-vscrollbar) {
    display: none !important;
  }

  section :global(.CodeMirror .CodeMirror-code) {
    font-family: var(--monospace);
    font-size: 14px;
    line-height: 1.75;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-1),
  section :global(.CodeMirror .CodeMirror-code .cm-header-2),
  section :global(.CodeMirror .CodeMirror-code .cm-header-3),
  section :global(.CodeMirror .CodeMirror-code .cm-header-4),
  section :global(.CodeMirror .CodeMirror-code .cm-header-5),
  section :global(.CodeMirror .CodeMirror-code .cm-header-6) {
    line-height: 2.6;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-1) {
    font-size: 1.802rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-2) {
    font-size: 1.602rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-3) {
    font-size: 1.424rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-4) {
    font-size: 1.266rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-5) {
    font-size: 1.125rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-6) {
    font-size: 1rem;
  }

  section :global(.CodeMirror .CodeMirror-selected),
  section :global(.CodeMirror-selectedtext) {
    background: var(--secondary-color-2);
    color: var(--grey-9);
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
    color: var(--secondary-color-6);
    font-weight: bold;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-link.cm-formatting) {
    color: var(--grey-3);
    text-decoration: none;
    font-weight: normal;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-link.cm-image) {
    color: var(--secondary-color);
    text-decoration: none;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-link.cm-formatting-image) {
    color: var(--grey-5);
    text-decoration: none;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-url) {
    color: var(--grey-5);
    font-style: italic;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-url.cm-formatting-link-string) {
    color: var(--grey-3);
  }

  section :global(.cm-formatting-list),
  section :global(.cm-formatting-task),
  section :global(.cm-hr) {
    color: var(--grey-4);
  }

  section :global(.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word)) {
    border-radius: 0;
    background: transparent;
    border-bottom: dotted 2px var(--tertiary-color);
  }

  section :global(.editor-statusbar) {
    display: none;
  }

  section :global(.editor-preview) {
    background: var(--grey-1);
    border: none;
    color: var(--grey-9);
    font-family: var(--sans-serif);
  }

  section :global(.editor-preview a) {
    color: var(--secondary-color-6);
  }

  section :global(.editor-preview h1),
  section :global(.editor-preview h2),
  section :global(.editor-preview h3),
  section :global(.editor-preview h4),
  section :global(.editor-preview h5),
  section :global(.editor-preview h6),
  section :global(.editor-preview th),
  section :global(.editor-preview strong) {
    font-weight: 600;
  }

  section :global(.editor-preview code) {
    font-family: var(--monospace) !important;
  }

  section :global(.editor-preview pre) {
    background: var(--primary-color-1);
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
  }

  section :global(.editor-preview ul),
  section :global(.editor-preview ol) {
    padding: 0 1.5rem !important;
  }

  section :global(.editor-preview li p) {
    margin: 0.5rem 0 0.5rem 0.25rem !important;
  }

  section :global(.editor-preview table) {
    margin-bottom: 1rem;
  }

  section :global(.editor-preview table td),
  section :global(.editor-preview table th),
  section :global(.editor-preview-side table td),
  section :global(.editor-preview-side table th) {
    border: 1px solid var(--grey-2);
    padding: 5px;
  }

  section :global(.editor-preview hr) {
    margin: 2rem 0;
    border: 1px var(--grey-2);
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
      /* margin: calc(var(--frame) * 0.5) auto; */
    }

    section :global(button.slim) {
      display: block;
      position: sticky;
      margin-right: var(--frame);
      top: var(--frame);
      z-index: 100;
      align-self: flex-end;
      width: max-content;
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

    section :global(.editor-preview) {
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

  @media (prefers-color-scheme: dark) {
    :global(body:not(.light)) section :global(.editor-toolbar) {
      background: var(--grey-1);
    }
  }

  :global(body.dark) section :global(.editor-toolbar) {
    background: var(--grey-1);
  }
</style>
