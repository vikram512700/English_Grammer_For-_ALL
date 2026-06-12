/* ============================================================
   sw-register.js – Service Worker Registration
   ============================================================ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('[EMP] SW registered:', reg.scope))
      .catch(err => console.warn('[EMP] SW registration failed:', err));
  });
}
