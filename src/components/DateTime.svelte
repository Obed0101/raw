<script>
  let { format = "dd/mm/yyyy hh:mm:ss", updateInterval = 1000 } = $props();
  
  let date = $state(new Date());
  
  const formatMap = {
    'dd': () => String(date.getDate()).padStart(2, '0'),
    'd': () => date.getDate(),
    'mm': () => String(date.getMonth() + 1).padStart(2, '0'),
    'm': () => date.getMonth() + 1,
    'yyyy': () => date.getFullYear(),
    'yy': () => String(date.getFullYear()).slice(-2),
    'hh': () => String(date.getHours()).padStart(2, '0'),
    'h': () => date.getHours(),
    'MM': () => String(date.getMinutes()).padStart(2, '0'),
    'M': () => date.getMinutes(),
    'ss': () => String(date.getSeconds()).padStart(2, '0'),
    's': () => date.getSeconds()
  };
  
  function formatDate() {
    return format.replace(/dd|d|mm|m|yyyy|yy|hh|h|MM|M|ss|s/g, match => formatMap[match]());
  }
  
  setInterval(() => {
    date = new Date();
  }, updateInterval);
</script>

<p>{formatDate()}</p>
