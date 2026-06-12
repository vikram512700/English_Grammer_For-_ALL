/* ============================================================
   app.js – Main Application Controller
   ============================================================ */

const App = (() => {

  let currentPage = 'dashboard';
  let isDarkMode = true;

  /* ── Init ────────────────────────────────────────────────── */
  async function init() {
    await showSplash();
    Gamification.updateStreak();
    Gamification.updateNavBar();
    Gamification.updateDailyProgress();

    setupNav();
    QuizEngine.initEventListeners();
    LessonEngine.initEventListeners();
    GlobalSearch.init();
    WordOfDay.init();
    SpeedChallenge.init();
    Particles.init();
    KeyboardShortcuts.init();

    // Extend vocabulary with extras
    if (typeof EXTRA_VOCAB !== 'undefined') {
      EMP_DATA.vocabulary = [...EMP_DATA.vocabulary, ...EXTRA_VOCAB];
    }

    navigateTo('dashboard');
    setupTheme();
    setupSidebar();
    hideSplash();
  }

  async function showSplash() {
    return new Promise(resolve => setTimeout(resolve, 2200));
  }

  function hideSplash() {
    const splash = document.getElementById('splash-screen');
    const app = document.getElementById('app');
    splash.style.opacity = '0';
    splash.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      splash.classList.add('hidden');
      app.classList.remove('hidden');
    }, 500);
  }

  /* ── Navigation ──────────────────────────────────────────── */
  function navigateTo(page) {
    currentPage = page;

    // Update active state
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) {
      pageEl.classList.add('active');
      pageEl.style.animation = 'none';
      pageEl.offsetHeight;
      pageEl.style.animation = '';
    }

    // Render page content
    switch (page) {
      case 'dashboard':     Modules.renderDashboard(); break;
      case 'grammar':       Modules.renderGrammar(); break;
      case 'tenses':        Modules.renderTenses(); break;
      case 'vocabulary':    Modules.renderVocabulary(); break;
      case 'reading':       Modules.renderReading(); break;
      case 'writing':       Modules.renderWriting(); break;
      case 'listening':     Modules.renderListening(); break;
      case 'speaking':      Modules.renderSpeaking(); break;
      case 'pronunciation': Modules.renderPronunciation(); break;
      case 'idioms':        IdiomsModule.render(); break;
      case 'sentence':      SentenceBuilder.render(); break;
      case 'speed':         break; // managed by SpeedChallenge
      case 'assessment':    break;
      case 'progress':      ProgressModule.renderProgress(); break;
      case 'achievements':  ProgressModule.renderAchievements(); break;
    }

    closeSidebar();

    const lessonStartBtn = document.getElementById('lesson-start-quiz');
    if (lessonStartBtn) lessonStartBtn.style.display = '';

    document.getElementById('main-content').scrollTop = 0;
  }

  function setupNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(item.dataset.page);
      });
    });
  }

  /* ── Sidebar ─────────────────────────────────────────────── */
  function setupSidebar() {
    const menuBtn = document.getElementById('menu-btn');
    const overlay = document.getElementById('sidebar-overlay');

    menuBtn.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
      overlay.classList.toggle('show');
    });
    overlay.addEventListener('click', closeSidebar);
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
  }

  /* ── Theme ───────────────────────────────────────────────── */
  function setupTheme() {
    isDarkMode = LS.get('emp_theme', 'dark') === 'dark';
    applyTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    LS.set('emp_theme', isDarkMode ? 'dark' : 'light');
    applyTheme();
  }

  function applyTheme() {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    document.getElementById('theme-toggle').textContent = isDarkMode ? '🌙' : '☀️';
  }

  /* ── Assessment ──────────────────────────────────────────── */
  function startAssessment(type) {
    const counts = { topic: 25, unit: 50, module: 100, final: 200 };
    const names = { topic: 'Topic Test', unit: 'Unit Test', module: 'Module Test', final: 'Final Test' };
    let pool = [];
    EMP_DATA.grammarTopics.forEach(t => pool.push(...t.questions));
    EMP_DATA.tenses.forEach(t => pool.push(...t.questions));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const questions = pool.slice(0, Math.min(counts[type], pool.length));
    QuizEngine.open(questions, type, names[type]);
  }

  return { init, navigateTo, startAssessment };
})();

window.addEventListener('DOMContentLoaded', () => App.init());
