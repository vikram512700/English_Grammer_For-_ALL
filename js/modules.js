/* ============================================================
   modules.js – All module page renderers
   ============================================================ */

const Modules = (() => {

  /* ── Dashboard ─────────────────────────────────────────── */
  function renderDashboard() {
    renderModuleCards();
    renderContinueCards();
  }

  function renderModuleCards() {
    const grid = document.getElementById('modules-grid');
    if (!grid) return;
    const s = Gamification.getState();
    grid.innerHTML = EMP_DATA.modules.map(m => {
      const tp = s.topicProgress[m.id] || {};
      const done = tp.done || 0;
      const total = m.questions;
      const pct = total ? Math.min(Math.round((done / total) * 100), 100) : 0;
      return `
        <div class="module-card ${pct===100?'completed':''}" data-page="${m.id}"
             style="border-top:3px solid ${m.color}" onclick="App.navigateTo('${m.id}')">
          <div class="module-icon">${m.icon}</div>
          <div class="module-name">${m.name}</div>
          <div class="module-ring-container">
            <svg class="module-ring" viewBox="0 0 80 80">
              <circle class="module-ring-bg" cx="40" cy="40" r="34"></circle>
              <circle class="module-ring-fill" cx="40" cy="40" r="34" style="stroke:${m.color};stroke-dasharray:213.6;stroke-dashoffset:${213.6 * (1 - pct/100)}"></circle>
            </svg>
            <div class="module-pct">${pct}%</div>
          </div>
        </div>`;
    }).join('');
  }

  function renderContinueCards() {
    const container = document.getElementById('continue-cards');
    if (!container) return;
    const topics = EMP_DATA.grammarTopics.slice(0, 3);
    container.innerHTML = topics.map(t => `
      <div class="continue-card" onclick="LessonEngine.open(${JSON.stringify(t).replace(/"/g,'&quot;')})">
        <div class="cc-icon">${t.icon}</div>
        <div class="cc-info">
          <div class="cc-title">${t.name}</div>
          <div class="cc-sub">Grammar Academy · ${t.level}</div>
          <div class="cc-progress-bar"><div class="cc-progress-fill" style="width:0%"></div></div>
        </div>
        <span class="cc-arrow">→</span>
      </div>
    `).join('');
  }

  /* ── Grammar ────────────────────────────────────────────── */
  function renderGrammar(filter = 'all') {
    const grid = document.getElementById('grammar-topics-grid');
    if (!grid) return;
    const topics = filter === 'all' ? EMP_DATA.grammarTopics
      : EMP_DATA.grammarTopics.filter(t => t.level === filter);

    grid.innerHTML = topics.map(t => `
      <div class="topic-card">
        <div class="topic-card-header">
          <span class="topic-icon">${t.icon}</span>
          <span class="topic-name">${t.name}</span>
          <span class="topic-level-badge badge-${t.level}">${t.level}</span>
        </div>
        <div class="topic-desc">${t.desc}</div>
        <div class="topic-progress"><div class="topic-progress-fill" style="width:0%"></div></div>
        <div class="topic-stats">
          <span class="topic-stat">📝 ${t.questions.length} questions</span>
          <span class="topic-stat">📖 1 lesson</span>
        </div>
        <div class="topic-actions">
          <button class="btn-secondary" onclick='LessonEngine.open(${JSON.stringify(t).replace(/'/g,"&#39;").replace(/"/g,"&quot;")})'>📖 Lesson</button>
          <button class="btn-primary" onclick='QuizEngine.open(${JSON.stringify(t.questions).replace(/'/g,"&#39;").replace(/"/g,"&quot;")}, "${t.id}", "${t.name}")'>Practice →</button>
        </div>
      </div>
    `).join('');

    // Filter buttons
    document.querySelectorAll('#page-grammar .filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#page-grammar .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrammar(btn.dataset.filter);
      });
    });
  }

  /* ── Tenses ─────────────────────────────────────────────── */
  function renderTenses() {
    const grid = document.getElementById('tenses-grid');
    if (!grid) return;
    grid.innerHTML = EMP_DATA.tenses.map(t => `
      <div class="tense-card">
        <div class="tense-icon">${t.icon}</div>
        <div class="tense-name">${t.name}</div>
        <div class="tense-example"><em>"${t.example}"</em></div>
        <div class="tense-q-count">📝 ${t.questions.length}+ questions</div>
        <div style="font-size:0.75rem;color:var(--primary-light);margin-bottom:12px">${t.formula}</div>
        <button class="btn-primary" style="width:100%;font-size:0.82rem"
          onclick='QuizEngine.open(${JSON.stringify(t.questions).replace(/'/g,"&#39;").replace(/"/g,"&quot;")}, "${t.id}", "${t.name}")'>
          Practice →
        </button>
      </div>
    `).join('');
  }

  /* ── Vocabulary ─────────────────────────────────────────── */
  let currentVocabTab = 'flashcards';
  let flashcardIndex = 0;

  function renderVocabulary(tab = 'flashcards') {
    currentVocabTab = tab;
    const content = document.getElementById('vocab-content');
    if (!content) return;

    document.querySelectorAll('.vocab-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
      b.onclick = () => renderVocabulary(b.dataset.tab);
    });

    switch (tab) {
      case 'flashcards': renderFlashcards(content); break;
      case 'wordlist':   renderWordList(content); break;
      case 'quiz':       renderVocabQuiz(content); break;
      case 'matching':   renderMatching(content); break;
      case 'spaced':     SpacedRepetitionModule.render(content); break;
    }
  }

  function renderFlashcards(container) {
    const words = EMP_DATA.vocabulary;
    flashcardIndex = 0;

    function show() {
      const w = words[flashcardIndex];
      container.innerHTML = `
        <div class="flashcard-container">
          <div class="flashcard" id="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-inner">
              <div class="flashcard-front">
                <div class="flashcard-word">${w.word}</div>
                <div class="flashcard-pos">${w.pos}</div>
                <div class="flashcard-tap-hint">👆 Tap to reveal definition</div>
              </div>
              <div class="flashcard-back">
                <div class="flashcard-definition">${w.definition}</div>
                <div class="flashcard-example">"${w.example}"</div>
              </div>
            </div>
          </div>
          <div class="flashcard-controls">
            <button class="flashcard-nav" id="fc-prev" ${flashcardIndex===0?'disabled':''}>←</button>
            <span class="flashcard-counter">${flashcardIndex+1} / ${words.length}</span>
            <button class="flashcard-nav" id="fc-next" ${flashcardIndex===words.length-1?'disabled':''}>→</button>
          </div>
          <button class="btn-secondary" id="fc-studied">✅ Mark as Studied</button>
        </div>`;

      document.getElementById('fc-prev').onclick = () => { if (flashcardIndex > 0) { flashcardIndex--; show(); } };
      document.getElementById('fc-next').onclick = () => { if (flashcardIndex < words.length-1) { flashcardIndex++; show(); } };
      document.getElementById('fc-studied').onclick = () => {
        Gamification.recordWordStudied(w.word);
        Gamification.updateNavBar();
        document.getElementById('fc-studied').textContent = '✅ Studied!';
        document.getElementById('fc-studied').disabled = true;
      };
    }
    show();
  }

  function renderWordList(container) {
    container.innerHTML = `<div class="wordlist-container">
      ${EMP_DATA.vocabulary.map(w => `
        <div class="word-item">
          <div class="word-term">${w.word}</div>
          <div class="word-pos">${w.pos}</div>
          <div class="word-def">${w.definition}</div>
        </div>
      `).join('')}
    </div>`;
  }

  function renderVocabQuiz(container) {
    const words = EMP_DATA.vocabulary;
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    let idx = 0;
    let score = 0;
    const quizWords = shuffle(words).slice(0, 10);

    function showQ() {
      if (idx >= quizWords.length) {
        container.innerHTML = `<div style="text-align:center;padding:40px">
          <div style="font-size:3rem;margin-bottom:16px">${score >= 8 ? '🎉' : score >= 6 ? '👍' : '📚'}</div>
          <h3 style="margin-bottom:8px">Quiz Complete!</h3>
          <p style="color:var(--text-secondary);margin-bottom:20px">You got ${score}/${quizWords.length} correct.</p>
          <button class="btn-primary" onclick="Modules.renderVocabulary('quiz')">Try Again</button>
        </div>`;
        return;
      }
      const w = quizWords[idx];
      const wrong = shuffle(words.filter(ww => ww.word !== w.word)).slice(0, 3).map(ww => ww.definition);
      const opts = shuffle([w.definition, ...wrong]);
      const correctIdx = opts.indexOf(w.definition);

      container.innerHTML = `
        <div style="max-width:540px;margin:0 auto">
          <div style="text-align:center;margin-bottom:24px">
            <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px">${idx+1} / ${quizWords.length}</div>
            <div style="font-size:2rem;font-weight:800;margin-bottom:8px">${w.word}</div>
            <div style="font-size:0.85rem;color:var(--primary-light);font-style:italic">${w.pos}</div>
            <div style="margin-top:12px;font-size:0.9rem;color:var(--text-secondary)">Choose the correct definition:</div>
          </div>
          <div class="options-grid">
            ${opts.map((opt, i) => `
              <button class="option-btn" data-idx="${i}" onclick="document.querySelectorAll('.option-btn').forEach(b=>{b.disabled=true;if(parseInt(b.dataset.idx)===${correctIdx}){b.classList.add('correct')}else if(parseInt(b.dataset.idx)===${i}&&${i}!==${correctIdx}){b.classList.add('wrong')}});${i===correctIdx?`score++;`:''}document.getElementById('vocab-next').disabled=false">
                <span class="option-label">${['A','B','C','D'][i]}</span>
                <span>${opt}</span>
              </button>`).join('')}
          </div>
          <div style="text-align:right;margin-top:16px">
            <button class="btn-primary" id="vocab-next" disabled onclick="idx++;showQ()">Next →</button>
          </div>
        </div>`;
    }
    showQ();
  }

  function renderMatching(container) {
    const words = EMP_DATA.vocabulary.slice(0, 6);
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const shuffledDefs = shuffle(words.map(w => ({ word: w.word, def: w.definition })));
    let selected = null;
    let matched = new Set();

    function render() {
      container.innerHTML = `
        <div style="max-width:700px;margin:0 auto">
          <p style="color:var(--text-secondary);margin-bottom:20px">Match each word with its correct definition.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div>
              ${words.map((w,i) => `<button class="option-btn" id="word-${i}" data-type="word" data-val="${w.word}"
                style="width:100%;margin-bottom:8px;${matched.has(w.word)?'border-color:var(--accent);color:var(--accent);opacity:0.6':''}"
                ${matched.has(w.word)?'disabled':''} onclick="Modules.matchSelect('word','${w.word}')">
                ${w.word}
              </button>`).join('')}
            </div>
            <div>
              ${shuffledDefs.map((d,i) => `<button class="option-btn" id="def-${i}" data-type="def" data-val="${d.word}"
                style="width:100%;margin-bottom:8px;font-size:0.8rem;${matched.has(d.word)?'border-color:var(--accent);color:var(--accent);opacity:0.6':''}"
                ${matched.has(d.word)?'disabled':''} onclick="Modules.matchSelect('def','${d.word}')">
                ${d.def}
              </button>`).join('')}
            </div>
          </div>
          ${matched.size===words.length?`<div style="text-align:center;padding:24px"><div style="font-size:2rem;margin-bottom:8px">🎉</div><p>All matched! Great job!</p><button class="btn-primary" style="margin-top:12px" onclick="Modules.renderVocabulary('matching')">Try Again</button></div>`:''}
        </div>`;
    }

    Modules._matchState = { selected: null, matched, words, shuffledDefs, render };
    render();
  }

  function matchSelect(type, val) {
    const ms = Modules._matchState;
    if (!ms) return;
    if (!ms.selected) {
      ms.selected = { type, val };
    } else {
      if (ms.selected.type !== type && ms.selected.val === val) {
        ms.matched.add(val);
        Gamification.addXP(5);
        Gamification.updateNavBar();
      }
      ms.selected = null;
    }
    ms.render();
  }

  /* ── Reading ────────────────────────────────────────────── */
  function renderReading() {
    const grid = document.getElementById('passages-grid');
    if (!grid) return;
    grid.innerHTML = EMP_DATA.passages.map(p => `
      <div class="passage-card" onclick="Modules.openPassage('${p.id}')">
        <div class="passage-header">
          <div class="passage-title">${p.title}</div>
          <span class="topic-level-badge badge-${p.level} passage-level-badge">${p.level}</span>
        </div>
        <div class="passage-preview">${p.preview}</div>
        <div class="passage-meta">
          <span>⏱️ ${p.readTime}</span>
          <span>📝 ${p.words} words</span>
          <span>🏷️ ${p.topic}</span>
        </div>
      </div>
    `).join('');

    // Filter listeners
    document.getElementById('reading-level-filter').onchange = function() { filterPassages(); };
    document.getElementById('reading-topic-filter').onchange = function() { filterPassages(); };
  }

  function filterPassages() {
    const lvl = document.getElementById('reading-level-filter').value;
    const topic = document.getElementById('reading-topic-filter').value;
    const grid = document.getElementById('passages-grid');
    const filtered = EMP_DATA.passages.filter(p =>
      (lvl === 'all' || p.level === lvl) && (topic === 'all' || p.topic === topic)
    );
    grid.innerHTML = filtered.map(p => `
      <div class="passage-card" onclick="Modules.openPassage('${p.id}')">
        <div class="passage-header">
          <div class="passage-title">${p.title}</div>
          <span class="topic-level-badge badge-${p.level} passage-level-badge">${p.level}</span>
        </div>
        <div class="passage-preview">${p.preview}</div>
        <div class="passage-meta">
          <span>⏱️ ${p.readTime}</span>
          <span>📝 ${p.words} words</span>
          <span>🏷️ ${p.topic}</span>
        </div>
      </div>
    `).join('') || '<p style="color:var(--text-muted);padding:20px">No passages found for selected filters.</p>';
  }

  function openPassage(id) {
    const p = EMP_DATA.passages.find(x => x.id === id);
    if (!p) return;

    const modal = document.getElementById('lesson-modal');
    document.getElementById('lesson-title').textContent = `📰 ${p.title}`;
    document.getElementById('lesson-body').innerHTML = `
      <div class="lesson-section">
        <div style="display:flex;gap:12px;margin-bottom:16px;font-size:0.82rem;color:var(--text-secondary)">
          <span>⏱️ ${p.readTime}</span><span>📝 ${p.words} words</span><span class="topic-level-badge badge-${p.level}">${p.level}</span>
        </div>
        <p style="line-height:1.9;font-size:0.95rem">${p.text.replace(/\n\n/g,'</p><p style="margin-top:16px;line-height:1.9;font-size:0.95rem">')}</p>
      </div>
      <div class="lesson-section">
        <h3>📝 Comprehension Questions</h3>
        ${p.questions.map((q,i)=>`
          <div style="background:var(--bg-elevated);border-radius:var(--radius-md);padding:14px;margin-bottom:12px">
            <div style="font-weight:600;margin-bottom:8px">${i+1}. ${q.q}</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
              ${q.opts.map((opt,j)=>`<button class="option-btn" onclick="this.parentElement.querySelectorAll('.option-btn').forEach((b,k)=>{b.disabled=true;if(k===${q.ans})b.classList.add('correct');else if(k===${j}&&${j}!==${q.ans})b.classList.add('wrong')});Gamification.recordAnswer(${j===q.ans});Gamification.updateNavBar()">
                <span class="option-label">${['A','B','C','D'][j]}</span><span>${opt}</span>
              </button>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>`;

    document.getElementById('lesson-start-quiz').style.display = 'none';
    modal.classList.add('open');
    Gamification.addXP(Gamification.XP_RULES.readingComplete, 'reading');
    Gamification.updateNavBar();
  }

  /* ── Writing ─────────────────────────────────────────────── */
  function renderWriting(tab = 'prompts') {
    const content = document.getElementById('writing-content');
    if (!content) return;
    document.querySelectorAll('.writing-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.wtab === tab);
      b.onclick = () => renderWriting(b.dataset.wtab);
    });

    if (tab === 'prompts') {
      content.innerHTML = EMP_DATA.writingPrompts.map((p, i) => `
        <div class="writing-prompt-card">
          <div class="prompt-badge">✍️ ${p.type.charAt(0).toUpperCase()+p.type.slice(1)}</div>
          <div class="prompt-text">${p.prompt}</div>
          <textarea class="writing-area" id="writing-area-${i}" placeholder="Start writing your response here..." oninput="document.getElementById('wc-${i}').textContent=this.value.trim().split(/\s+/).filter(Boolean).length+' words'"></textarea>
          <div class="word-counter" id="wc-${i}">0 words (minimum ${p.minWords})</div>
          <div style="margin-top:12px;display:flex;gap:10px">
            <button class="btn-primary" onclick="Modules.submitWriting(${i}, ${p.minWords})">Submit →</button>
            <button class="btn-secondary" onclick="document.getElementById('writing-area-${i}').value='';document.getElementById('wc-${i}').textContent='0 words'">Clear</button>
          </div>
        </div>
      `).join('');
    } else if (tab === 'correction') {
      const sentences = [
        { wrong:'She don\'t like coffee.', correct:'She doesn\'t like coffee.' },
        { wrong:'He have been working for two hour.', correct:'He has been working for two hours.' },
        { wrong:'I am agree with you.', correct:'I agree with you.' },
        { wrong:'They was playing in the park.', correct:'They were playing in the park.' },
        { wrong:'She is more beautiful than she used to was.', correct:'She is more beautiful than she used to be.' },
      ];
      content.innerHTML = sentences.map((s, i) => `
        <div class="writing-prompt-card">
          <div class="prompt-badge">❌ Error Correction</div>
          <div class="prompt-text" style="color:var(--danger)">"${s.wrong}"</div>
          <textarea class="writing-area" id="corr-${i}" placeholder="Write the corrected sentence..." style="min-height:80px"></textarea>
          <button class="btn-primary" style="margin-top:10px" onclick="
            const val=document.getElementById('corr-${i}').value.trim().toLowerCase();
            const correct='${s.correct.toLowerCase()}';
            const fb=document.getElementById('corr-fb-${i}');
            if(val===correct){fb.innerHTML='<span style=\"color:var(--accent)\">✅ Correct! Well done.</span>';}
            else{fb.innerHTML='<span style=\"color:var(--text-secondary)\">💡 Suggested: <em>${s.correct}</em></span>';}">Check Answer</button>
          <div id="corr-fb-${i}" style="margin-top:8px;font-size:0.85rem"></div>
        </div>
      `).join('');
    } else {
      const rewrites = [
        { original:'The man who is old walked slowly.', task:'Rewrite using a relative clause more naturally.' },
        { original:'It was raining. We stayed home.', task:'Combine into one sentence using a conjunction.' },
        { original:'She is a good teacher. Students like her.', task:'Combine using a relative pronoun.' },
      ];
      content.innerHTML = rewrites.map((r, i) => `
        <div class="writing-prompt-card">
          <div class="prompt-badge">🔄 Rewrite</div>
          <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:6px">Original: <em>"${r.original}"</em></div>
          <div class="prompt-text">${r.task}</div>
          <textarea class="writing-area" id="rw-${i}" placeholder="Write your rewritten sentence..." style="min-height:80px"></textarea>
          <button class="btn-primary" style="margin-top:10px" onclick="
            const val=document.getElementById('rw-${i}').value.trim();
            if(val.length>10){document.getElementById('rw-fb-${i}').innerHTML='<span style=\"color:var(--accent)\">✅ Great effort! Keep practicing.</span>';Gamification.addXP(10);Gamification.updateNavBar();}
            else{document.getElementById('rw-fb-${i}').innerHTML='<span style=\"color:var(--text-muted)\">Please write a complete sentence.</span>';}">Submit</button>
          <div id="rw-fb-${i}" style="margin-top:8px;font-size:0.85rem"></div>
        </div>
      `).join('');
    }
  }

  function submitWriting(promptIdx, minWords) {
    const area = document.getElementById(`writing-area-${promptIdx}`);
    if (!area) return;
    const words = area.value.trim().split(/\s+/).filter(Boolean).length;
    if (words < minWords) {
      area.style.borderColor = 'var(--danger)';
      setTimeout(() => area.style.borderColor = '', 2000);
      return;
    }
    area.style.borderColor = 'var(--accent)';
    Gamification.addXP(Gamification.XP_RULES.writingSubmit);
    Gamification.updateNavBar();
    area.insertAdjacentHTML('afterend', '<div style="color:var(--accent);font-size:0.85rem;margin-top:8px">✅ Great work! Submitted successfully.</div>');
  }

  /* ── Listening ────────────────────────────────────────────── */
  function renderListening() {
    const grid = document.getElementById('listening-grid');
    if (!grid) return;
    grid.innerHTML = EMP_DATA.listeningExercises.map((ex, i) => `
      <div class="listening-card">
        <div class="listening-title">${ex.icon} ${ex.title}</div>
        <div style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:12px">Level: ${ex.level}</div>
        <div style="background:var(--bg-elevated);border-radius:var(--radius-md);padding:14px;font-size:0.85rem;line-height:1.7;margin-bottom:14px;font-style:italic;color:var(--text-secondary)">"${ex.text}"</div>
        <button class="listen-btn" onclick="Modules.speakText('${ex.text.replace(/'/g,'').substring(0,200)}', this)">🔊 Listen</button>
        <div style="margin-top:16px">
          <div style="font-weight:600;font-size:0.9rem;margin-bottom:10px">Comprehension Questions:</div>
          ${ex.questions.map((q,qi)=>`
            <div style="margin-bottom:12px">
              <div style="font-size:0.85rem;margin-bottom:6px">${qi+1}. ${q.q}</div>
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px">
                ${q.opts.map((opt,oi)=>`<button class="option-btn" style="font-size:0.8rem;padding:8px 10px"
                  onclick="this.parentElement.querySelectorAll('.option-btn').forEach((b,k)=>{b.disabled=true;if(k===${q.ans})b.classList.add('correct');else if(k===${oi}&&${oi}!==${q.ans})b.classList.add('wrong')});Gamification.recordAnswer(${oi===q.ans});Gamification.updateNavBar()">
                  <span class="option-label">${['A','B','C','D'][oi]}</span><span>${opt}</span>
                </button>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  /* ── Speaking ─────────────────────────────────────────────── */
  function renderSpeaking() {
    const grid = document.getElementById('speaking-grid');
    if (!grid) return;
    grid.innerHTML = EMP_DATA.speakingScenarios.map((s, i) => `
      <div class="scenario-card">
        <div class="scenario-title">${s.icon} ${s.title}</div>
        <div class="scenario-prompt">${s.scenario}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="speak-btn" id="speak-btn-${i}" onclick="Modules.toggleRecord(${i})">🎤 Start Speaking</button>
          <button class="speak-btn" onclick="Modules.speakText('${s.scenario.replace(/'/g,'').substring(0,200)}', this)" style="background:linear-gradient(135deg,var(--info),#0d7a9e)">🔊 Hear Prompt</button>
        </div>
        <div id="speak-feedback-${i}" style="margin-top:10px;font-size:0.82rem;color:var(--text-secondary)"></div>
      </div>
    `).join('');
  }

  let mediaRecorder = null;
  let recordingIdx = -1;

  function toggleRecord(idx) {
    const btn = document.getElementById(`speak-btn-${idx}`);
    const fb = document.getElementById(`speak-feedback-${idx}`);
    if (recordingIdx === idx) {
      // Stop
      if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
      btn.classList.remove('recording');
      btn.textContent = '🎤 Start Speaking';
      recordingIdx = -1;
      fb.textContent = '✅ Recording saved! Keep practicing.';
      Gamification.addXP(10);
      Gamification.updateNavBar();
    } else {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
          btn.classList.add('recording');
          btn.textContent = '⏹ Stop Recording';
          recordingIdx = idx;
          fb.textContent = '🔴 Recording in progress...';
          mediaRecorder.onstop = () => { stream.getTracks().forEach(t => t.stop()); };
        }).catch(() => {
          fb.textContent = '⚠️ Microphone access denied. Please allow microphone access.';
        });
      } else {
        fb.textContent = '⚠️ Your browser does not support audio recording.';
      }
    }
  }

  /* ── Pronunciation ────────────────────────────────────────── */
  function renderPronunciation() {
    const grid = document.getElementById('pronunciation-grid');
    if (!grid) return;
    grid.innerHTML = EMP_DATA.pronunciationItems.map((item, i) => `
      <div class="phono-card">
        <div class="phono-title">${item.icon} ${item.title}</div>
        <div class="phono-text">${item.desc}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px">
          ${item.words.map(w => `
            <div style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-sm);padding:6px 12px;font-size:0.85rem;font-family:monospace;cursor:pointer"
              onclick="Modules.speakText('${w.split(' ')[0]}', this)">${w}</div>
          `).join('')}
        </div>
        <button class="listen-btn" onclick="Modules.speakAll(${JSON.stringify(item.words).replace(/"/g,'&quot;')}, this)">🔊 Hear All</button>
      </div>
    `).join('');
  }

  function speakText(text, btn) {
    if (!window.speechSynthesis) return;
    const clean = text.replace(/\(.*?\)/g, '').trim();
    const utt = new SpeechSynthesisUtterance(clean);
    utt.lang = 'en-US'; utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  }

  function speakAll(words, btn) {
    if (!window.speechSynthesis) return;
    words.forEach((w, i) => {
      setTimeout(() => {
        const clean = w.split(' ')[0].replace(/\(.*?\)/g,'').trim();
        const utt = new SpeechSynthesisUtterance(clean);
        utt.lang = 'en-US'; utt.rate = 0.8;
        window.speechSynthesis.speak(utt);
      }, i * 1500);
    });
  }

  return {
    renderDashboard, renderGrammar, renderTenses,
    renderVocabulary, renderReading, renderWriting,
    renderListening, renderSpeaking, renderPronunciation,
    openPassage, submitWriting, matchSelect,
    speakText, speakAll, toggleRecord,
    _matchState: null,
  };
})();
