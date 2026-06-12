/* ============================================================
   sw-register.js – Service Worker Registration
   ============================================================ */
if ('serviceWorker' in navigator) {
  // Automatically clean up old root-scoped service workers if hosted in a subfolder (like GitHub Pages)
  const isSubfolder = window.location.pathname !== '/' && window.location.pathname !== '/index.html';
  if (isSubfolder) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const reg of registrations) {
        if (reg.scope === window.location.origin + '/') {
          reg.unregister().then(success => {
            if (success) console.log('[EMP] Unregistered old root-scoped service worker:', reg.scope);
          });
        }
      }
    }).catch(err => console.warn('[EMP] Failed to check registrations:', err));
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('[EMP] SW registered:', reg.scope))
      .catch(err => console.warn('[EMP] SW registration failed:', err));
  });
}
