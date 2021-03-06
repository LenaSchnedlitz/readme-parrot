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

  let freshlyCopied = false;

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(easymde.value());
    freshlyCopied = true;
  };

  const resetFlag = () => (freshlyCopied = false);

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
  <Button slim onclick={copyToClipBoard} onblur={resetFlag}>
    <Icon fat name={freshlyCopied ? 'check' : 'clipboard'} />
    {freshlyCopied ? 'Copied to clipboard' : 'Copy'}
  </Button>
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
    background: var(--grey-1);
    border: none;
    opacity: 1;
    border-radius: 0;
  }

  section :global(.editor-toolbar i.separator) {
    border-left: 1px solid var(--grey-2);
    border-right: none;
    margin: 0 3px;
  }

  section :global(.editor-toolbar button) {
    color: var(--primary-color-8) !important;
    border-radius: 24px;
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
    background: var(--grey-1);
    border: none;
    border-radius: 0 0 2px 2px;
    color: var(--grey-9);
    height: auto;
    box-shadow: none;
  }

  section :global(.editor-toolbar.disabled-for-preview + .CodeMirror) {
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

  section :global(.CodeMirror .CodeMirror-code .cm-tag),
  section :global(.CodeMirror .CodeMirror-code .cm-attribute) {
    color: var(--grey-5);
  }

  section :global(.CodeMirror .CodeMirror-code .cm-string) {
    color: var(--grey-9);
    font-style: italic;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-1),
  section :global(.CodeMirror .CodeMirror-code .cm-header-2),
  section :global(.CodeMirror .CodeMirror-code .cm-header-3),
  section :global(.CodeMirror .CodeMirror-code .cm-header-4),
  section :global(.CodeMirror .CodeMirror-code .cm-header-5),
  section :global(.CodeMirror .CodeMirror-code .cm-header-6) {
    line-height: 2.6;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-1),
  section :global(.editor-preview h1) {
    font-size: 1.802rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-2),
  section :global(.editor-preview h2) {
    font-size: 1.602rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-3),
  section :global(.editor-preview h3) {
    font-size: 1.424rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-4),
  section :global(.editor-preview h4) {
    font-size: 1.266rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-5),
  section :global(.editor-preview h5) {
    font-size: 1.125rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-header-6),
  section :global(.editor-preview h6) {
    font-size: 1rem;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-comment) {
    background: linear-gradient(to right, var(--secondary-color-2) -100%, var(--primary-color-1) 50%);
    border-radius: 0;
    padding: 4px 0;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-comment:first-child) {
    padding-left: 4px;
  }

  section :global(.CodeMirror .CodeMirror-code .cm-comment:last-child) {
    padding-right: 4px;
  }

  section :global(.CodeMirror .CodeMirror-selected),
  section :global(.CodeMirror .CodeMirror-code .CodeMirror-selectedtext) {
    background: var(--secondary-color-3);
    color: var(--grey-9);
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
    background: var(--grey-0);
    border: none;
    color: var(--grey-9);
    font-family: var(--sans-serif);
  }

  section :global(.editor-preview a) {
    color: var(--secondary-color-6);
    text-decoration: none;
  }

  section :global(.editor-preview div[align='center'] br) {
    display: none;
  }

  section :global(.editor-preview div[align='center'] br + *) {
    margin-left: 0.5rem;
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
    line-height: 2.6;
  }

  section :global(.editor-preview code) {
    font-family: var(--monospace) !important;
  }

  section :global(.editor-preview pre) {
    background: linear-gradient(to right, var(--grey-2) -260%, var(--grey-1) 160%);
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
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

  section :global(.editor-preview div[align='center']) {
    margin-bottom: 4rem;
  }

  section :global(.editor-preview) {
    padding: calc(var(--frame) * 1) calc(var(--frame) * 1.5);
  }

  section :global(.CodeMirror-scroll) {
    padding-left: var(--frame);
    padding-right: var(--frame);
  }

  @media all and (min-width: 900px) {
    section {
      width: auto;
      margin: 0 calc(var(--frame) * 2);
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
    }

    section :global(.editor-toolbar) {
      border-radius: 2px 2px 0 0;
    }

    section :global(button.slim) {
      display: flex;
      position: sticky;
      margin: calc(3 * var(--frame)) var(--frame) calc(-3 * var(--frame)) 0;
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
      margin: 0 !important;
      overflow: hidden !important;
      padding: calc(var(--frame) * 1) calc(var(--frame) * 1.5);
      box-sizing: border-box;
    }
  }

  @media all and (min-width: 1600px) {
    section {
      width: 1400px;
      margin: 0 auto;
    }
  }
</style>
