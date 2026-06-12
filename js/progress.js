/* ============================================================
   progress.js – Progress page & achievements renderer
   ============================================================ */

const ProgressModule = (() => {

  function renderProgress() {
    renderOverview();
    renderCharts();
    renderHeatmap();
  }

  function renderOverview() {
    const s = Gamification.getState();
    const lvl = Gamification.getLevelInfo(s.xp);
    const acc = s.totalAnswered ? Math.round((s.totalCorrect / s.totalAnswered) * 100) : 0;

    document.getElementById('progress-overview').innerHTML = `
      <div class="progress-stat-card">
        <div class="progress-stat-icon">⚡</div>
        <div class="progress-stat-value">${s.xp.toLocaleString()}</div>
        <div class="progress-stat-label">Total XP</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-icon">🎓</div>
        <div class="progress-stat-value">Lvl ${lvl.level}</div>
        <div class="progress-stat-label">${lvl.name}</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-icon">🔥</div>
        <div class="progress-stat-value">${s.streak}</div>
        <div class="progress-stat-label">Day Streak</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-icon">✅</div>
        <div class="progress-stat-value">${s.totalAnswered.toLocaleString()}</div>
        <div class="progress-stat-label">Questions Done</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-icon">🎯</div>
        <div class="progress-stat-value">${acc}%</div>
        <div class="progress-stat-label">Accuracy</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-icon">🏆</div>
        <div class="progress-stat-value">${(s.unlockedAchievements||[]).length}</div>
        <div class="progress-stat-label">Achievements</div>
      </div>
    `;
  }

  function renderCharts() {
    const container = document.getElementById('progress-charts');
    if (!container) return;
    const modules = [
      { name:'Grammar', color:'#6c63ff', pct: 42 },
      { name:'Tenses', color:'#ff6584', pct: 28 },
      { name:'Vocabulary', color:'#43e97b', pct: 65 },
      { name:'Reading', color:'#ffd166', pct: 15 },
      { name:'Writing', color:'#118ab2', pct: 20 },
      { name:'Speaking', color:'#ef476f', pct: 10 },
    ];

    container.innerHTML = `
      <div class="chart-card">
        <div class="chart-title">Module Progress</div>
        ${modules.map(m => `
          <div class="chart-bar-row">
            <div class="chart-bar-label">${m.name}</div>
            <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${m.pct}%;background:${m.color}"></div></div>
            <div class="chart-bar-val">${m.pct}%</div>
          </div>
        `).join('')}
      </div>
      <div class="chart-card">
        <div class="chart-title">Level Progress</div>
        ${renderLevelProgress()}
      </div>
    `;
  }

  function renderLevelProgress() {
    const s = Gamification.getState();
    const lvl = Gamification.getLevelInfo(s.xp);
    return `
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:10px">🎓</div>
        <div style="font-size:1.8rem;font-weight:800;font-family:var(--font-display)">Level ${lvl.level}</div>
        <div style="color:var(--text-secondary);margin-bottom:16px">${lvl.name}</div>
        <div style="background:var(--bg-elevated);border-radius:var(--radius-full);height:10px;overflow:hidden;margin-bottom:8px">
          <div style="width:${lvl.pct}%;height:100%;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:var(--radius-full);transition:width 0.8s ease"></div>
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted)">${lvl.xpToNext > 0 ? `${lvl.xpToNext.toLocaleString()} XP to Level ${lvl.level+1}` : 'Maximum Level Reached!'}</div>
      </div>
    `;
  }

  function renderHeatmap() {
    const heatmap = document.getElementById('activity-heatmap');
    if (!heatmap) return;
    // Generate 84 days (12 weeks) of fake activity data
    const cells = Array.from({ length: 84 }, (_, i) => {
      const rand = Math.random();
      const level = rand > 0.7 ? Math.ceil(rand * 4) : 0;
      return `<div class="heatmap-cell ${level ? 'level-'+level : ''}" title="Day ${i+1}"></div>`;
    });
    heatmap.innerHTML = cells.join('');
  }

  function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    const s = Gamification.getState();
    const unlocked = s.unlockedAchievements || [];

    grid.innerHTML = EMP_DATA.achievements.map(ach => {
      const isUnlocked = unlocked.includes(ach.id);
      return `
        <div class="achievement-item ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="achievement-badge">${ach.icon}</div>
          <div class="achievement-name">${ach.name}</div>
          <div class="achievement-desc">${ach.desc}</div>
          ${isUnlocked ? '<div class="achievement-unlocked-label">✅ Unlocked</div>' : '<div style="font-size:0.72rem;color:var(--text-muted)">🔒 Locked</div>'}
        </div>
      `;
    }).join('');
  }

  return { renderProgress, renderAchievements };
})();
