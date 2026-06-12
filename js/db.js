/* ============================================================
   db.js – IndexedDB wrapper for offline persistence
   ============================================================ */

const DB = (() => {
  const DB_NAME = 'EnglishMasterPro';
  const DB_VERSION = 1;
  let db = null;

  const STORES = {
    progress: 'progress',
    activity: 'activity',
    settings: 'settings',
  };

  function open() {
    return new Promise((resolve, reject) => {
      if (db) { resolve(db); return; }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains(STORES.progress)) {
          d.createObjectStore(STORES.progress, { keyPath: 'key' });
        }
        if (!d.objectStoreNames.contains(STORES.activity)) {
          d.createObjectStore(STORES.activity, { keyPath: 'date' });
        }
        if (!d.objectStoreNames.contains(STORES.settings)) {
          d.createObjectStore(STORES.settings, { keyPath: 'key' });
        }
      };
      req.onsuccess = e => { db = e.target.result; resolve(db); };
      req.onerror = e => reject(e.target.error);
    });
  }

  function put(storeName, value) {
    return open().then(d => new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, 'readwrite');
      const req = tx.objectStore(storeName).put(value);
      req.onsuccess = () => resolve(req.result);
      req.onerror = e => reject(e.target.error);
    }));
  }

  function get(storeName, key) {
    return open().then(d => new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = e => reject(e.target.error);
    }));
  }

  function getAll(storeName) {
    return open().then(d => new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = e => reject(e.target.error);
    }));
  }

  return { put, get, getAll, STORES };
})();

/* ── LocalStorage helpers (fast sync access) ───────────── */
const LS = {
  get(key, def = null) {
    try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },
  remove(key) { try { localStorage.removeItem(key); } catch {} },
};
