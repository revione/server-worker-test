// Make sure sw are supported

if ('serviceWorker' in navigator) {
  // console.log('Service Worker Supported')

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cache_site.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}
