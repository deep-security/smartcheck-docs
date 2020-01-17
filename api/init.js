Redoc.init('openapi.yaml', {
  theme: { colors: { primary: { main: '#db3d44' } } },
  hideHostname: true,
  lazyRendering: true,
  nativeScrollbars: true,
  suppressWarnings: true,
  untrustedSpec: true,
}, document.getElementById('redoc-container'))
