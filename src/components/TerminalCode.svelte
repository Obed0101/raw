<script>
  /**
   * TerminalCode - Bloque de código con estilo terminal
   * @param {string} code - Código a mostrar
   * @param {string} language - Lenguaje del código (para futuro highlight)
   * @param {boolean} inline - Si es código inline o bloque
   * @param {boolean} copyable - Si se puede copiar el código
   * @param {string} title - Título opcional del bloque de código
   */
  let { 
    code = "", 
    language = "", 
    inline = false,
    copyable = true,
    title = ""
  } = $props();

  let copied = $state(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }
</script>

{#if inline}
  <code class="terminal-code-inline">{code}</code>
{:else}
  <div class="terminal-code-block">
    {#if title || copyable}
      <div class="terminal-code-header">
        {#if title}
          <span class="terminal-code-title">{title}</span>
        {/if}
        {#if language}
          <span class="terminal-code-language">{language}</span>
        {/if}
        {#if copyable}
          <button 
            class="terminal-code-copy" 
            onclick={copyToClipboard}
            title={copied ? "¡Copiado!" : "Copiar código"}
          >
            {copied ? "✓" : "📋"}
          </button>
        {/if}
      </div>
    {/if}
    <pre class="terminal-code-content"><code>{code}</code></pre>
  </div>
{/if}
