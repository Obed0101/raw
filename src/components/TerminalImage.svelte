<script>
  let { src = "", alt = "", width = "auto", height = "auto", fit = "cover" } = $props(); // cover, contain, fill
</script>

<div class="terminal-image-container">
  <img 
    {src} 
    {alt}
    style="width: {width}; height: {height}; object-fit: {fit};"
    class="terminal-image"
  />
</div>
