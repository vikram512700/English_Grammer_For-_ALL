/* ============================================================
   gamification.js – XP, Levels, Streaks, Achievements
   ============================================================ */

const Gamification = (() => {

  const LEVELS = [
    { level:1, name:'Beginner',          minXP:0    },
    { level:2, name:'Elementary',        minXP:500  },
    { level:3, name:'Intermediate',      minXP:1500 },
    { level:4, name:'Upper Intermediate',minXP:3000 },
    { level:5, name:'Advanced',          minXP:6000 },
    { level:6, name:'Professional',      minXP:10000},
    { level:7, name:'Expert',            minXP:15000},
    { level:8, name:'Master',            minXP:25000},
  ];

  const XP_RULES = {
    correctAnswer: 10,
    hintUsed: -2,
    perfectQuiz: 50,
    streakBonus: 5,
    lessonRead: 20,
    flashcardStudied: 3,
    writingSubmit: 15,
    readingComplete: 25,
  };

  function getState() {
    return LS.get('emp_state', {
      xp: 0, streak: 0, lastActive: null,
      totalAnswered: 0, totalCorrect: 0,
      topicProgress: {}, unlockedAchievements: [],
      wordsStudied: 0, perfectQuizzes: 0,
      dailyAnswered: 0, dailyDate: null,
    });
  }

  function saveState(s) { LS.set('emp_state', s); }

  function getLevelInfo(xp) {
    let info = LEVELS[0];
    for (const l of LEVELS) { if (xp >= l.minXP) info = l; else break; }
    const next = LEVELS.find(l => l.minXP > xp);
    const pct = next ? Math.round(((xp - info.minXP) / (next.minXP - info.minXP)) * 100) : 100;
    return { ...info, next, pct, xpToNext: next ? next.minXP - xp : 0 };
  }

  function addXP(amount, reason = '') {
    const s = getState();
    const oldXP = s.xp;
    s.xp = Math.max(0, s.xp + amount);
    saveState(s);
    floatXP(amount);
    checkAchievements(s);
    return { oldXP, newXP: s.xp };
  }

  function floatXP(amount) {
    const el = document.getElementById('xp-float');
    if (!el) return;
    el.textContent = (amount >= 0 ? '+' : '') + amount + ' XP';
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1500);
  }

  function recordAnswer(correct, hintUsed = false) {
    const s = getState();
    s.totalAnswered++;
    if (correct) s.totalCorrect++;
    const today = new Date().toDateString();
    if (s.dailyDate !== today) { s.dailyDate = today; s.dailyAnswered = 0; }
    s.dailyAnswered++;
    let xpGained = correct ? XP_RULES.correctAnswer : 0;
    if (hintUsed && correct) xpGained += XP_RULES.hintUsed;
    saveState(s);
    if (xpGained > 0) addXP(xpGained);
    checkAchievements(s);
    updateDailyProgress();
    return xpGained;
  }

  function updateStreak() {
    const s = getState();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (s.lastActive === today) return;
    if (s.lastActive === yesterday) { s.streak++; }
    else if (s.lastActive !== today) { s.streak = 1; }
    s.lastActive = today;
    saveState(s);
    checkAchievements(s);
  }

  function updateTopicProgress(topicId, questionsDone, questionsTotal) {
    const s = getState();
    if (!s.topicProgress[topicId]) s.topicProgress[topicId] = { done:0, total:questionsTotal };
    s.topicProgress[topicId].done = questionsDone;
    saveState(s);
  }

  function recordPerfectQuiz() {
    const s = getState();
    s.perfectQuizzes++;
    addXP(XP_RULES.perfectQuiz, 'perfect quiz');
    saveState(s);
    checkAchievements(s);
  }

  function recordWordStudied(wordText) {
    const s = getState();
    s.wordsStudied = (s.wordsStudied || 0) + 1;
    addXP(XP_RULES.flashcardStudied);
    saveState(s);
    checkAchievements(s);
    if (wordText && typeof SpacedRepetitionModule !== 'undefined') {
      SpacedRepetitionModule.addWord(wordText);
    }
  }

  function checkAchievements(s) {
    const unlocked = s.unlockedAchievements || [];
    for (const ach of EMP_DATA.achievements) {
      if (unlocked.includes(ach.id)) continue;
      let earned = false;
      if (ach.xpRequired && s.xp >= ach.xpRequired) earned = true;
      if (ach.streakRequired && s.streak >= ach.streakRequired) earned = true;
      if (ach.wordsRequired && s.wordsStudied >= ach.wordsRequired) earned = true;
      if (ach.perfectRequired && s.perfectQuizzes > 0) earned = true;
      if (ach.id === 'first-question' && s.totalAnswered >= 1) earned = true;
      if (ach.id === 'ten-correct' && s.totalCorrect >= 10) earned = true;
      if (ach.id === 'reading-1' && (s.topicProgress['reading-1'] || s.topicProgress['p1'])) earned = true;

      if (earned) {
        unlocked.push(ach.id);
        s.unlockedAchievements = unlocked;
        saveState(s);
        showAchievementToast(ach);
      }
    }
  }

  function showAchievementToast(ach) {
    const toast = document.getElementById('achievement-toast');
    const desc = document.getElementById('toast-desc');
    if (!toast) return;
    toast.querySelector('.toast-icon').textContent = ach.icon;
    desc.textContent = ach.name + ' — ' + ach.desc;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  function updateDailyProgress() {
    const s = getState();
    const goal = 10;
    const done = Math.min(s.dailyAnswered || 0, goal);
    const pct = Math.round((done / goal) * 100);
    const fillEl = document.getElementById('daily-fill');
    const pctEl = document.getElementById('daily-pct');
    const textEl = document.getElementById('daily-progress-text');
    if (fillEl) fillEl.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';
    if (textEl) textEl.textContent = `${done} / ${goal} questions`;
  }

  function updateNavBar() {
    const s = getState();
    const xpEl = document.getElementById('nav-xp');
    const streakEl = document.getElementById('nav-streak');
    const xpStatEl = document.getElementById('stat-xp');
    const streakStatEl = document.getElementById('stat-streak');
    const answeredEl = document.getElementById('stat-answered');
    const accuracyEl = document.getElementById('stat-accuracy');

    if (xpEl) xpEl.textContent = s.xp.toLocaleString() + ' XP';
    if (streakEl) streakEl.textContent = s.streak;
    if (xpStatEl) xpStatEl.textContent = s.xp.toLocaleString();
    if (streakStatEl) streakStatEl.textContent = s.streak;
    if (answeredEl) answeredEl.textContent = s.totalAnswered.toLocaleString();
    if (accuracyEl) {
      const acc = s.totalAnswered ? Math.round((s.totalCorrect / s.totalAnswered) * 100) : 0;
      accuracyEl.textContent = acc + '%';
    }

    const lvl = getLevelInfo(s.xp);
    const sidebarLvl = document.getElementById('sidebar-level');
    const sidebarXpFill = document.getElementById('sidebar-xp-fill');
    const sidebarXpText = document.getElementById('sidebar-xp-text');
    if (sidebarLvl) sidebarLvl.textContent = `Level ${lvl.level} – ${lvl.name}`;
    if (sidebarXpFill) sidebarXpFill.style.width = lvl.pct + '%';
    if (sidebarXpText) sidebarXpText.textContent = `${s.xp.toLocaleString()} / ${lvl.next ? lvl.next.minXP.toLocaleString() : '∞'} XP`;
  }

  function confetti() {
    const colors = ['#6c63ff','#ff6584','#43e97b','#ffd166','#118ab2'];
    for (let i = 0; i < 60; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.cssText = `
        left:${Math.random()*100}vw;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;
        animation-duration:${2+Math.random()*2}s;
        animation-delay:${Math.random()*0.5}s;
        border-radius:${Math.random()>0.5?'50%':'2px'};
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  }

  return {
    getState, saveState, getLevelInfo, addXP,
    recordAnswer, updateStreak, updateTopicProgress,
    recordPerfectQuiz, recordWordStudied,
    checkAchievements, updateNavBar, updateDailyProgress,
    confetti, XP_RULES,
  };
})();
