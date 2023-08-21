function insertTrackingScript(scriptId) {
    window._mktz = window._mktz || [];
  
    const script = document.createElement('script');
    script.src = `//cdn.omniconvert.com/js/${scriptId}.js`;
  
    const dnsPrefetchLink = document.createElement('link');
    dnsPrefetchLink.rel = 'dns-prefetch';
    dnsPrefetchLink.href = '//app.omniconvert.com';
  
    document.head.appendChild(script);
    document.head.appendChild(dnsPrefetchLink);
  }
  
  export default insertTrackingScript;