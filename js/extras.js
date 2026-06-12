/* ============================================================
   extras.js – New Premium Features
   Search, Word of the Day, Idioms, Sentence Builder,
   Speed Challenge, Particles, Keyboard Shortcuts
   ============================================================ */

/* ── IDIOMS DATA ──────────────────────────────────────────── */
const IDIOMS_DATA = [
  { idiom:'Break the ice', meaning:'To initiate a conversation in a social setting.', example:'"He told a joke to break the ice at the meeting."', origin:'From breaking ice to allow ships to pass through.' },
  { idiom:'Hit the nail on the head', meaning:'To describe exactly what is causing a situation.', example:'"You hit the nail on the head — that\'s exactly the problem."', origin:'From carpentry — hitting the nail precisely.' },
  { idiom:'A piece of cake', meaning:'Something very easy to do.', example:'"The exam was a piece of cake for her."', origin:'Originally meaning something pleasant and easy (like eating cake).' },
  { idiom:'Once in a blue moon', meaning:'Very rarely; almost never.', example:'"He visits us once in a blue moon."', origin:'A blue moon is a rare second full moon in a calendar month.' },
  { idiom:'Bite the bullet', meaning:'To endure a painful situation bravely.', example:'"I had to bite the bullet and tell the truth."', origin:'Soldiers would bite a bullet during surgery before anesthesia.' },
  { idiom:'The ball is in your court', meaning:'It is your turn to take action.', example:'"I\'ve done my part — the ball is in your court now."', origin:'From tennis — the other player must return the ball.' },
  { idiom:'Burning the midnight oil', meaning:'Working late into the night.', example:'"She was burning the midnight oil to finish the project."', origin:'Before electricity, people used oil lamps to work at night.' },
  { idiom:'Cost an arm and a leg', meaning:'To be very expensive.', example:'"That car cost an arm and a leg."', origin:'Emphasizing extreme sacrifice for something.' },
  { idiom:'Let the cat out of the bag', meaning:'To reveal a secret accidentally.', example:'"She let the cat out of the bag about the surprise party."', origin:'From market fraud — revealing a cat instead of a piglet in a bag.' },
  { idiom:'Under the weather', meaning:'Feeling unwell or sick.', example:'"I\'m feeling a bit under the weather today."', origin:'Sailors who were sick went below deck, literally under the weather.' },
  { idiom:'Kill two birds with one stone', meaning:'To accomplish two things with a single action.', example:'"By studying on the train, I kill two birds with one stone."', origin:'An old proverb about efficiency.' },
  { idiom:'Speak of the devil', meaning:'When someone appears just as they are being talked about.', example:'"Speak of the devil — here she comes now!"', origin:'Short for "Speak of the devil and he shall appear."' },
  { idiom:'When pigs fly', meaning:'Something that will never happen.', example:'"He\'ll clean his room when pigs fly."', origin:'An impossibility — pigs cannot fly.' },
  { idiom:'Add insult to injury', meaning:'To make a bad situation even worse.', example:'"Not only did I lose, but to add insult to injury, I also sprained my ankle."', origin:'From a Roman fable about a bald man.' },
  { idiom:'Barking up the wrong tree', meaning:'Pursuing the wrong course of action.', example:'"If you think I did it, you\'re barking up the wrong tree."', origin:'Hunting dogs barking at the wrong tree after prey escaped.' },
  { idiom:'Blessing in disguise', meaning:'A good thing that initially seemed bad.', example:'"Losing that job was a blessing in disguise — I found a better one."', origin:'Something good hidden behind something that appears bad.' },
  { idiom:'Burn bridges', meaning:'To destroy relationships or options.', example:'"Don\'t burn bridges with your colleagues when you leave."', origin:'Military strategy — burning a bridge behind you prevents retreat.' },
  { idiom:'The best of both worlds', meaning:'Enjoying advantages of two different things at once.', example:'"Working from home gives me the best of both worlds."', origin:'Having the advantages of two contrasting situations.' },
  { idiom:'Elephant in the room', meaning:'An obvious problem no one wants to discuss.', example:'"The budget deficit is the elephant in the room."', origin:'Something so large it cannot be ignored, yet people try to.' },
  { idiom:'Spill the beans', meaning:'To reveal secret information.', example:'"Come on, spill the beans! What happened?"', origin:'Ancient Greek voting using beans.' },
];

/* ── SENTENCE BUILDER DATA ─────────────────────────────── */
const SENTENCE_DATA = [
  { sentence:'She has been studying English for three years', hint:'Present perfect continuous tense' },
  { sentence:'The children were playing in the park when it started raining', hint:'Past continuous + simple past' },
  { sentence:'If I had known the answer I would have told you', hint:'Third conditional' },
  { sentence:'He is the most intelligent student in the class', hint:'Superlative adjective' },
  { sentence:'They have already finished their homework', hint:'Present perfect with already' },
  { sentence:'We will be travelling to London next summer', hint:'Future continuous tense' },
  { sentence:'The book that you recommended was excellent', hint:'Relative clause with that' },
  { sentence:'She asked me whether I had seen her keys', hint:'Reported speech' },
  { sentence:'Despite the rain they decided to go for a walk', hint:'Despite + noun' },
  { sentence:'Not only is he smart but he is also very kind', hint:'Inversion with not only...but also' },
  { sentence:'By the time you arrive I will have finished cooking', hint:'Future perfect tense' },
  { sentence:'The harder you work the more you will achieve', hint:'Comparative correlative structure' },
];

/* ── EXTRA VOCABULARY ──────────────────────────────────── */
const EXTRA_VOCAB = [
  { word:'Ambivalent', pos:'adj', definition:'Having mixed or contradictory feelings about something.', example:'She felt ambivalent about accepting the job offer abroad.' },
  { word:'Cacophony', pos:'noun', definition:'A harsh, unpleasant mixture of sounds.', example:'The cacophony of car horns filled the busy intersection.' },
  { word:'Debilitate', pos:'verb', definition:'To make someone very weak and infirm.', example:'The illness debilitated him for several months.' },
  { word:'Ephemeral', pos:'adj', definition:'Lasting for a very short time; fleeting.', example:'The beauty of cherry blossoms is ephemeral.' },
  { word:'Facetious', pos:'adj', definition:'Treating serious issues with deliberately inappropriate humor.', example:'He made a facetious remark during the meeting.' },
  { word:'Gregarious', pos:'adj', definition:'Fond of company; sociable.', example:'She is a gregarious person who loves hosting parties.' },
  { word:'Hackneyed', pos:'adj', definition:'Lacking originality; overused and unoriginal.', example:'The movie used hackneyed plot twists that were predictable.' },
  { word:'Impeccable', pos:'adj', definition:'In accordance with the highest standards; faultless.', example:'Her taste in fashion is absolutely impeccable.' },
  { word:'Juxtapose', pos:'verb', definition:'To place side by side for contrast or comparison.', example:'The artist juxtaposed modern architecture with ancient ruins.' },
  { word:'Kinetic', pos:'adj', definition:'Relating to or resulting from motion.', example:'The kinetic sculpture moved gracefully in the wind.' },
  { word:'Lethargic', pos:'adj', definition:'Affected by lethargy; sluggish and apathetic.', example:'The hot weather made everyone feel lethargic.' },
  { word:'Magnanimous', pos:'adj', definition:'Generous or forgiving, especially toward a rival.', example:'She was magnanimous in victory, praising her opponent.' },
  { word:'Nebulous', pos:'adj', definition:'In the form of a cloud or haze; unclear or vague.', example:'His plans for the future remained nebulous.' },
  { word:'Ostentatious', pos:'adj', definition:'Designed to impress or attract notice; showy.', example:'The ostentatious mansion drew stares from passersby.' },
  { word:'Paradox', pos:'noun', definition:'A statement that contradicts itself but may contain a truth.', example:'It is a paradox that standing is more tiring than walking.' },
  { word:'Quintessential', pos:'adj', definition:'Representing the most perfect example of a quality.', example:'She is the quintessential professional in every aspect.' },
  { word:'Rhetoric', pos:'noun', definition:'The art of effective or persuasive speaking or writing.', example:'His rhetoric was powerful enough to sway the audience.' },
  { word:'Sanguine', pos:'adj', definition:'Optimistic or positive, especially in a difficult situation.', example:'Despite the setbacks, she remained sanguine about the outcome.' },
  { word:'Taciturn', pos:'adj', definition:'Reserved or uncommunicative in speech; saying little.', example:'He was a taciturn man who preferred listening over talking.' },
  { word:'Ubiquitous', pos:'adj', definition:'Present, appearing, or found everywhere.', example:'Smartphones have become ubiquitous in modern life.' },
  { word:'Venerable', pos:'adj', definition:'Accorded a great deal of respect, especially because of age.', example:'The venerable professor had been teaching for 40 years.' },
  { word:'Whimsical', pos:'adj', definition:'Playfully quaint or fanciful; acting unpredictably.', example:'The garden was filled with whimsical decorations.' },
  { word:'Zealous', pos:'adj', definition:'Having or showing great energy or enthusiasm.', example:'She is a zealous advocate for environmental protection.' },
  { word:'Pragmatic', pos:'adj', definition:'Dealing with things sensibly and realistically.', example:'His pragmatic approach solved the crisis efficiently.' },
  { word:'Eloquence', pos:'noun', definition:'Fluent or persuasive speaking or writing.', example:'His eloquence captivated the entire audience.' },
  { word:'Fortitude', pos:'noun', definition:'Courage in pain or adversity.', example:'She showed remarkable fortitude during the difficult times.' },
  { word:'Gregariousness', pos:'noun', definition:'The quality of being sociable and fond of company.', example:'His gregariousness made him popular at every gathering.' },
  { word:'Indignant', pos:'adj', definition:'Feeling or showing anger because of something perceived as unfair.', example:'She was indignant at the false accusations.' },
  { word:'Kaleidoscopic', pos:'adj', definition:'Having complex patterns of colors; continually changing.', example:'The sunset created a kaleidoscopic display across the sky.' },
  { word:'Maelstrom', pos:'noun', definition:'A powerful whirlpool; a turbulent situation.', example:'The political maelstrom caused uncertainty in the markets.' },
];

/* ── GLOBAL SEARCH ─────────────────────────────────────── */
const GlobalSearch = (() => {
  let isOpen = false;

  function init() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!input) return;

    input.addEventListener('input', () => search(input.value));
    input.addEventListener('focus', () => { if (input.value.trim()) search(input.value); });
    document.addEventListener('click', e => {
      if (!e.target.closest('#search-container')) results.innerHTML = '';
    });

    // Keyboard shortcut
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
        input.select();
      }
      if (e.key === 'Escape') { input.blur(); results.innerHTML = ''; }
    });
  }

  function search(query) {
    const results = document.getElementById('search-results');
    if (!query.trim()) { results.innerHTML = ''; return; }
    const q = query.toLowerCase();
    const matches = [];

    // Search grammar topics
    EMP_DATA.grammarTopics.forEach(t => {
      if (t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)) {
        matches.push({ type:'📖 Grammar', name:t.name, action:() => { App.navigateTo('grammar'); }});
      }
    });

    // Search tenses
    EMP_DATA.tenses.forEach(t => {
      if (t.name.toLowerCase().includes(q) || t.example.toLowerCase().includes(q)) {
        matches.push({ type:'⏱️ Tense', name:t.name, action:() => { App.navigateTo('tenses'); }});
      }
    });

    // Search vocabulary
    EMP_DATA.vocabulary.forEach(w => {
      if (w.word.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q)) {
        matches.push({ type:'🔤 Word', name:`${w.word} — ${w.definition.substring(0,40)}...`, action:() => { App.navigateTo('vocabulary'); }});
      }
    });

    // Search passages
    EMP_DATA.passages.forEach(p => {
      if (p.title.toLowerCase().includes(q)) {
        matches.push({ type:'📰 Reading', name:p.title, action:() => { App.navigateTo('reading'); }});
      }
    });

    // Search idioms
    IDIOMS_DATA.forEach(id => {
      if (id.idiom.toLowerCase().includes(q) || id.meaning.toLowerCase().includes(q)) {
        matches.push({ type:'💬 Idiom', name:id.idiom, action:() => { App.navigateTo('idioms'); }});
      }
    });

    // Search modules
    EMP_DATA.modules.forEach(m => {
      if (m.name.toLowerCase().includes(q)) {
        matches.push({ type:'📚 Module', name:m.name, action:() => { App.navigateTo(m.id); }});
      }
    });

    // Pages
    const pages = [
      {name:'Dashboard',page:'dashboard'},{name:'Speed Challenge',page:'speed'},
      {name:'Sentence Builder',page:'sentence'},{name:'Achievements',page:'achievements'},
      {name:'Progress',page:'progress'},{name:'Assessments',page:'assessment'},
    ];
    pages.forEach(p => {
      if (p.name.toLowerCase().includes(q)) {
        matches.push({ type:'📄 Page', name:p.name, action:() => { App.navigateTo(p.page); }});
      }
    });

    results.innerHTML = matches.length ? matches.slice(0, 8).map((m, i) => `
      <div class="search-result-item" data-idx="${i}">
        <span class="sr-type">${m.type}</span>
        <span class="sr-name">${m.name}</span>
      </div>
    `).join('') : `<div class="search-no-results">No results for "${query}"</div>`;

    results.querySelectorAll('.search-result-item').forEach((item, i) => {
      item.addEventListener('click', () => {
        matches[i].action();
        results.innerHTML = '';
        document.getElementById('search-input').value = '';
        document.getElementById('search-input').blur();
      });
    });
  }

  return { init };
})();

/* ── WORD OF THE DAY ───────────────────────────────────── */
const WordOfDay = (() => {
  let currentIdx = 0;

  function init() {
    const allWords = [...EMP_DATA.vocabulary, ...EXTRA_VOCAB];
    // Use day of year as seed for daily word
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);
    currentIdx = dayOfYear % allWords.length;
    render(allWords[currentIdx]);

    document.getElementById('wotd-speak')?.addEventListener('click', () => {
      const w = allWords[currentIdx];
      if (window.speechSynthesis) {
        const utt = new SpeechSynthesisUtterance(w.word);
        utt.lang = 'en-US'; utt.rate = 0.8;
        window.speechSynthesis.speak(utt);
      }
    });

    document.getElementById('wotd-next')?.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % allWords.length;
      render(allWords[currentIdx]);
    });
  }

  function render(w) {
    const wordEl = document.getElementById('wotd-word');
    const posEl = document.getElementById('wotd-pos');
    const defEl = document.getElementById('wotd-def');
    const exEl = document.getElementById('wotd-example');
    if (!wordEl) return;

    wordEl.style.opacity = '0'; wordEl.style.transform = 'translateY(10px)';
    setTimeout(() => {
      wordEl.textContent = w.word;
      posEl.textContent = w.pos;
      defEl.textContent = w.definition;
      exEl.textContent = `"${w.example}"`;
      wordEl.style.opacity = '1'; wordEl.style.transform = 'translateY(0)';
    }, 200);
  }

  return { init };
})();

/* ── IDIOMS MODULE RENDERER ────────────────────────────── */
const IdiomsModule = (() => {
  function render() {
    const grid = document.getElementById('idioms-grid');
    if (!grid) return;
    grid.innerHTML = IDIOMS_DATA.map((item, i) => `
      <div class="idiom-card" style="animation-delay:${i*0.05}s">
        <div class="idiom-header">
          <span class="idiom-icon">💬</span>
          <h3 class="idiom-title">"${item.idiom}"</h3>
        </div>
        <div class="idiom-meaning"><strong>Meaning:</strong> ${item.meaning}</div>
        <div class="idiom-example"><strong>Example:</strong> ${item.example}</div>
        <div class="idiom-origin"><strong>Origin:</strong> ${item.origin}</div>
        <button class="listen-btn" style="margin-top:10px" onclick="Modules.speakText('${item.idiom.replace(/'/g,'')}', this)">🔊 Listen</button>
      </div>
    `).join('');
  }
  return { render };
})();

/* ── SENTENCE BUILDER ──────────────────────────────────── */
const SentenceBuilder = (() => {
  let currentIdx = 0;
  let score = 0;

  function render() {
    const container = document.getElementById('sentence-builder');
    if (!container) return;
    currentIdx = 0; score = 0;
    showPuzzle(container);
  }

  function showPuzzle(container) {
    if (currentIdx >= SENTENCE_DATA.length) {
      container.innerHTML = `
        <div style="text-align:center;padding:50px">
          <div style="font-size:4rem;margin-bottom:16px">🎉</div>
          <h2 style="margin-bottom:8px">All Puzzles Complete!</h2>
          <p style="color:var(--text-secondary);margin-bottom:20px">You solved ${score}/${SENTENCE_DATA.length} correctly.</p>
          <button class="btn-primary" onclick="SentenceBuilder.render()">🔄 Play Again</button>
        </div>`;
      return;
    }

    const data = SENTENCE_DATA[currentIdx];
    const words = data.sentence.split(' ');
    const shuffled = [...words].sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="sb-progress">${currentIdx + 1} / ${SENTENCE_DATA.length}</div>
      <div class="sb-hint">💡 Hint: ${data.hint}</div>
      <div class="sb-target" id="sb-target">
        <div class="sb-placeholder">Click words below to build the sentence here</div>
      </div>
      <div class="sb-bank" id="sb-bank">
        ${shuffled.map((w, i) => `<button class="sb-word" data-word="${w}" data-idx="${i}">${w}</button>`).join('')}
      </div>
      <div class="sb-actions">
        <button class="btn-secondary" id="sb-clear">🗑️ Clear</button>
        <button class="btn-primary" id="sb-check">✅ Check</button>
        <button class="btn-ghost" id="sb-skip">Skip →</button>
      </div>
      <div class="sb-feedback" id="sb-feedback"></div>
    `;

    const target = document.getElementById('sb-target');
    const bank = document.getElementById('sb-bank');
    const placed = [];

    bank.querySelectorAll('.sb-word').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        btn.disabled = true; btn.classList.add('used');
        placed.push(btn.dataset.word);
        renderTarget();
      });
    });

    function renderTarget() {
      if (placed.length === 0) {
        target.innerHTML = '<div class="sb-placeholder">Click words below to build the sentence here</div>';
      } else {
        target.innerHTML = placed.map((w, i) => `<span class="sb-placed-word" data-i="${i}">${w}</span>`).join('');
        target.querySelectorAll('.sb-placed-word').forEach(el => {
          el.addEventListener('click', () => {
            const idx = parseInt(el.dataset.i);
            const removed = placed.splice(idx, 1)[0];
            bank.querySelectorAll('.sb-word').forEach(b => {
              if (b.dataset.word === removed && b.disabled) { b.disabled = false; b.classList.remove('used'); }
            });
            renderTarget();
          });
        });
      }
    }

    document.getElementById('sb-clear').addEventListener('click', () => {
      placed.length = 0;
      bank.querySelectorAll('.sb-word').forEach(b => { b.disabled = false; b.classList.remove('used'); });
      renderTarget();
      document.getElementById('sb-feedback').innerHTML = '';
    });

    document.getElementById('sb-check').addEventListener('click', () => {
      const answer = placed.join(' ');
      const correct = data.sentence;
      const fb = document.getElementById('sb-feedback');
      if (answer.toLowerCase() === correct.toLowerCase()) {
        fb.innerHTML = '<span style="color:var(--accent)">✅ Perfect! That\'s correct!</span>';
        score++;
        Gamification.addXP(20);
        Gamification.updateNavBar();
        setTimeout(() => { currentIdx++; showPuzzle(container); }, 1500);
      } else {
        fb.innerHTML = `<span style="color:var(--danger)">❌ Not quite. Try again or skip.</span>`;
        target.classList.add('animate-shake');
        setTimeout(() => target.classList.remove('animate-shake'), 500);
      }
    });

    document.getElementById('sb-skip').addEventListener('click', () => {
      const fb = document.getElementById('sb-feedback');
      fb.innerHTML = `<span style="color:var(--text-secondary)">💡 Answer: "${data.sentence}"</span>`;
      setTimeout(() => { currentIdx++; showPuzzle(container); }, 2000);
    });
  }

  return { render };
})();

/* ── SPEED CHALLENGE ───────────────────────────────────── */
const SpeedChallenge = (() => {
  let timer = null;
  let timeLeft = 60;
  let points = 0;
  let combo = 0;
  let maxCombo = 0;
  let correct = 0;
  let total = 0;
  let pool = [];
  const CIRCUMFERENCE = 2 * Math.PI * 52;

  function init() {
    document.getElementById('speed-start')?.addEventListener('click', start);
    document.getElementById('speed-retry')?.addEventListener('click', start);
    document.getElementById('speed-back')?.addEventListener('click', () => {
      document.getElementById('speed-ready').classList.remove('hidden');
      document.getElementById('speed-results').classList.add('hidden');
    });

    const best = LS.get('emp_speed_best', 0);
    const bestEl = document.getElementById('speed-best');
    if (bestEl) bestEl.textContent = `Best Score: ${best}`;
  }

  function start() {
    document.getElementById('speed-ready').classList.add('hidden');
    document.getElementById('speed-results').classList.add('hidden');
    document.getElementById('speed-active').classList.remove('hidden');

    timeLeft = 60; points = 0; combo = 0; maxCombo = 0; correct = 0; total = 0;
    pool = [];
    EMP_DATA.grammarTopics.forEach(t => pool.push(...t.questions));
    EMP_DATA.tenses.forEach(t => pool.push(...t.questions));
    shuffle(pool);

    updateHUD();
    showQuestion();
    timer = setInterval(tick, 1000);
  }

  function tick() {
    timeLeft--;
    updateHUD();
    if (timeLeft <= 0) endGame();
  }

  function updateHUD() {
    document.getElementById('speed-time').textContent = timeLeft;
    document.getElementById('speed-score').textContent = points;
    document.getElementById('speed-combo').textContent = combo > 1 ? `${combo}x` : combo;

    const ring = document.getElementById('speed-ring-fill');
    if (ring) {
      const offset = CIRCUMFERENCE * (1 - timeLeft / 60);
      ring.style.strokeDashoffset = offset;
      ring.style.stroke = timeLeft <= 10 ? '#ef476f' : timeLeft <= 20 ? '#ffd166' : '#6c63ff';
    }
  }

  function showQuestion() {
    if (pool.length === 0) { endGame(); return; }
    const q = pool.pop();
    const labels = ['A','B','C','D'];
    document.getElementById('speed-question').innerHTML = q.q;
    document.getElementById('speed-options').innerHTML = q.opts.map((opt, i) => `
      <button class="speed-opt" data-idx="${i}" data-correct="${i === q.ans ? 1 : 0}">
        <span class="option-label">${labels[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    document.querySelectorAll('.speed-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        total++;
        const isCorrect = btn.dataset.correct === '1';
        if (isCorrect) {
          correct++;
          combo++;
          maxCombo = Math.max(maxCombo, combo);
          const comboBonus = combo >= 5 ? 10 : combo >= 3 ? 5 : 0;
          points += 15 + comboBonus;
          btn.style.borderColor = 'var(--accent)';
          btn.style.background = 'rgba(67,233,123,0.15)';
        } else {
          combo = 0;
          btn.style.borderColor = 'var(--danger)';
          btn.style.background = 'rgba(239,71,111,0.15)';
          // Show correct
          document.querySelectorAll('.speed-opt').forEach(b => {
            if (b.dataset.correct === '1') {
              b.style.borderColor = 'var(--accent)';
              b.style.background = 'rgba(67,233,123,0.15)';
            }
          });
        }
        document.querySelectorAll('.speed-opt').forEach(b => b.disabled = true);
        updateHUD();
        setTimeout(showQuestion, isCorrect ? 400 : 800);
      });
    });
  }

  function endGame() {
    clearInterval(timer); timer = null;
    document.getElementById('speed-active').classList.add('hidden');
    document.getElementById('speed-results').classList.remove('hidden');

    const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
    const emoji = points >= 200 ? '🏆' : points >= 100 ? '🎉' : points >= 50 ? '👍' : '📚';

    document.getElementById('speed-result-emoji').textContent = emoji;
    document.getElementById('speed-result-title').textContent =
      points >= 200 ? 'Legendary!' : points >= 100 ? 'Excellent!' : points >= 50 ? 'Good Job!' : 'Keep Practicing!';

    document.getElementById('speed-result-stats').innerHTML = `
      <div class="speed-stat-grid">
        <div class="speed-stat"><div class="speed-stat-v">${points}</div><div class="speed-stat-l">Points</div></div>
        <div class="speed-stat"><div class="speed-stat-v">${correct}/${total}</div><div class="speed-stat-l">Correct</div></div>
        <div class="speed-stat"><div class="speed-stat-v">${acc}%</div><div class="speed-stat-l">Accuracy</div></div>
        <div class="speed-stat"><div class="speed-stat-v">${maxCombo}x</div><div class="speed-stat-l">Max Combo</div></div>
      </div>
    `;

    const best = LS.get('emp_speed_best', 0);
    if (points > best) {
      LS.set('emp_speed_best', points);
      document.getElementById('speed-best').textContent = `Best Score: ${points} 🎉 NEW!`;
    }

    Gamification.addXP(points);
    Gamification.updateNavBar();
    if (points >= 200) Gamification.confetti();
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return { init };
})();

/* ── ANIMATED PARTICLE BACKGROUND ──────────────────────── */
const Particles = (() => {
  let canvas, ctx;
  let particles = [];
  let animFrame;
  const COUNT = 50;

  function init() {
    canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 1 + Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }
    animate();
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`;
      ctx.fill();
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animFrame = requestAnimationFrame(animate);
  }

  return { init };
})();

/* ── KEYBOARD SHORTCUTS ───────────────────────────────── */
const KeyboardShortcuts = (() => {
  function init() {
    document.addEventListener('keydown', e => {
      // Don't trigger when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch(e.key) {
        case '1': App.navigateTo('dashboard'); break;
        case '2': App.navigateTo('grammar'); break;
        case '3': App.navigateTo('tenses'); break;
        case '4': App.navigateTo('vocabulary'); break;
        case '5': App.navigateTo('reading'); break;
        case '6': App.navigateTo('writing'); break;
        case '7': App.navigateTo('listening'); break;
        case '8': App.navigateTo('speaking'); break;
        case '9': App.navigateTo('idioms'); break;
        case '0': App.navigateTo('speed'); break;
        case 't': case 'T':
          if (!e.ctrlKey && !e.metaKey) document.getElementById('theme-toggle')?.click();
          break;
      }
    });
  }
  return { init };
})();

/* ── SPACED REPETITION MODULE ───────────────────────────── */
const SpacedRepetitionModule = (() => {
  let isDemoMode = true; // Default to demo mode for quick testing

  const INTERNALS = {
    demo: [10000, 30000, 60000, 180000, 600000], // 10s, 30s, 1m, 3m, 10m
    standard: [86400000, 3 * 86400000, 7 * 86400000, 14 * 86400000, 30 * 86400000] // 1d, 3d, 7d, 14d, 30d
  };

  function getReviews() {
    return LS.get('emp_spaced_reviews', {});
  }

  function saveReviews(reviews) {
    LS.set('emp_spaced_reviews', reviews);
  }

  function addWord(wordText) {
    const reviews = getReviews();
    if (reviews[wordText]) return; // already in scheduler

    const delay = isDemoMode ? INTERNALS.demo[0] : INTERNALS.standard[0];
    reviews[wordText] = {
      word: wordText,
      box: 1,
      nextReview: Date.now() + delay
    };
    saveReviews(reviews);
  }

  function getDueReviews() {
    const reviews = getReviews();
    const now = Date.now();
    return Object.values(reviews).filter(r => r.nextReview <= now);
  }

  function recordResult(wordText, correct) {
    const reviews = getReviews();
    const item = reviews[wordText];
    if (!item) return;

    if (correct) {
      item.box = Math.min(item.box + 1, 5);
    } else {
      item.box = 1;
    }

    const intervals = isDemoMode ? INTERNALS.demo : INTERNALS.standard;
    const delay = intervals[item.box - 1];
    item.nextReview = Date.now() + delay;

    saveReviews(reviews);
  }

  function forcePracticeAll() {
    const reviews = getReviews();
    const now = Date.now();
    Object.values(reviews).forEach(item => {
      item.nextReview = now; // set all to due
    });
    saveReviews(reviews);
  }

  function getWordInfo(wordText) {
    const allWords = [...EMP_DATA.vocabulary, ...EXTRA_VOCAB];
    return allWords.find(w => w.word.toLowerCase() === wordText.toLowerCase());
  }

  function render(container) {
    if (!container) return;
    
    // Auto-update timer interval reference
    if (container.dataset.timerInterval) {
      clearInterval(parseInt(container.dataset.timerInterval));
    }

    const reviews = getReviews();
    const reviewsArr = Object.values(reviews);
    const dueReviews = getDueReviews();

    // Box counts calculation
    const boxCounts = [0, 0, 0, 0, 0];
    reviewsArr.forEach(r => {
      if (r.box >= 1 && r.box <= 5) boxCounts[r.box - 1]++;
    });

    let html = `
      <div class="sr-container">
        <!-- Dashboard / Leitner Stats -->
        <div class="sr-header-stats">
          <div class="sr-boxes-title">📥 Spaced Repetition (Leitner Boxes)</div>
          <div class="sr-boxes-grid">
            ${boxCounts.map((count, i) => `
              <div class="sr-box-stat">
                <div class="sr-box-num">Box ${i + 1}</div>
                <div class="sr-box-count">${count}</div>
              </div>
            `).join('')}
          </div>
          <div class="sr-controls-row">
            <label class="sr-toggle-label">
              <input type="checkbox" id="sr-demo-toggle" ${isDemoMode ? 'checked' : ''} />
              <span>⚡ Demo Mode (Fast Review Intervals)</span>
            </label>
            <button class="btn-secondary sr-force-btn" id="sr-force-all">⚡ Force Practice All</button>
          </div>
        </div>
    `;

    if (dueReviews.length > 0) {
      // Show card for the first due review
      const currentReview = dueReviews[0];
      const wInfo = getWordInfo(currentReview.word) || { word: currentReview.word, pos: 'noun', definition: 'No definition found.', example: '' };

      html += `
        <div class="sr-card-container">
          <div class="sr-card-badge">🎯 Word Due for Review (${dueReviews.length} left)</div>
          <div class="sr-card" id="sr-active-card">
            <div class="sr-card-front" id="sr-card-front">
              <div class="sr-word">${wInfo.word}</div>
              <div class="sr-pos">${wInfo.pos}</div>
              <button class="listen-btn wotd-speak" id="sr-speak-btn" style="margin-top:14px">🔊 Listen</button>
              <div class="sr-reveal-container">
                <button class="btn-primary" id="sr-reveal-btn">Reveal Definition 👆</button>
              </div>
            </div>
            
            <div class="sr-card-back hidden" id="sr-card-back">
              <div class="sr-word">${wInfo.word}</div>
              <div class="sr-definition">${wInfo.definition}</div>
              ${wInfo.example ? `<div class="sr-example">"${wInfo.example}"</div>` : ''}
              
              <div class="sr-feedback-actions">
                <button class="btn-danger" id="sr-wrong-btn">❌ Got it wrong</button>
                <button class="btn-primary" id="sr-right-btn" style="background:linear-gradient(135deg, var(--accent), #2ecc71);box-shadow: 0 4px 14px rgba(46, 204, 113, 0.4)">✅ Got it right</button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // No due reviews: show upcoming reviews schedule
      const upcomingReviews = reviewsArr
        .filter(r => r.nextReview > Date.now())
        .sort((a, b) => a.nextReview - b.nextReview);

      html += `
        <div class="sr-empty">
          <div class="sr-empty-emoji">🎉</div>
          <h3>All Caught Up!</h3>
          <p>You have no words due for review right now.</p>
          <p style="font-size:0.85rem;color:var(--text-secondary)">Mark new words as "Studied" in the Flash Cards tab to add them here.</p>
        </div>
      `;

      if (upcomingReviews.length > 0) {
        html += `
          <div class="sr-upcoming-container">
            <h3 class="section-title">Upcoming Reviews Schedule</h3>
            <div class="sr-upcoming-list">
              ${upcomingReviews.slice(0, 5).map((r, i) => `
                <div class="sr-upcoming-item" data-target-time="${r.nextReview}">
                  <span class="sr-item-word">🔤 ${r.word}</span>
                  <span class="sr-item-box">Box ${r.box}</span>
                  <span class="sr-item-time" id="sr-time-${i}">Calculating...</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
    }

    html += `</div>`;
    container.innerHTML = html;

    // Attach event listeners
    const demoToggle = document.getElementById('sr-demo-toggle');
    if (demoToggle) {
      demoToggle.addEventListener('change', (e) => {
        isDemoMode = e.target.checked;
        render(container);
      });
    }

    const forceBtn = document.getElementById('sr-force-all');
    if (forceBtn) {
      forceBtn.addEventListener('click', () => {
        forcePracticeAll();
        render(container);
      });
    }

    const speakBtn = document.getElementById('sr-speak-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        const wordText = speakBtn.closest('.sr-card-front').querySelector('.sr-word').textContent;
        if (window.speechSynthesis) {
          const utt = new SpeechSynthesisUtterance(wordText);
          utt.lang = 'en-US'; utt.rate = 0.8;
          window.speechSynthesis.speak(utt);
        }
      });
    }

    const revealBtn = document.getElementById('sr-reveal-btn');
    if (revealBtn) {
      revealBtn.addEventListener('click', () => {
        document.getElementById('sr-card-front').classList.add('hidden');
        const cardBack = document.getElementById('sr-card-back');
        cardBack.classList.remove('hidden');
        cardBack.classList.add('animate-fade-in');
      });
    }

    const wrongBtn = document.getElementById('sr-wrong-btn');
    if (wrongBtn) {
      wrongBtn.addEventListener('click', () => {
        const wordText = dueReviews[0].word;
        recordResult(wordText, false);
        render(container);
      });
    }

    const rightBtn = document.getElementById('sr-right-btn');
    if (rightBtn) {
      rightBtn.addEventListener('click', () => {
        const wordText = dueReviews[0].word;
        recordResult(wordText, true);
        Gamification.addXP(10);
        Gamification.updateNavBar();
        render(container);
      });
    }

    // Live countdown update for upcoming items
    const upcomingList = container.querySelectorAll('.sr-upcoming-item');
    if (upcomingList.length > 0) {
      const updateTimers = () => {
        const now = Date.now();
        upcomingList.forEach(item => {
          const target = parseInt(item.dataset.targetTime);
          const diff = target - now;
          const timeSpan = item.querySelector('.sr-item-time');
          if (timeSpan) {
            if (diff <= 0) {
              timeSpan.textContent = 'Due now! (Refresh)';
              timeSpan.style.color = 'var(--accent)';
            } else {
              const sec = Math.ceil(diff / 1000);
              if (sec < 60) {
                timeSpan.textContent = `in ${sec}s`;
              } else {
                const min = Math.floor(sec / 60);
                const remSec = sec % 60;
                timeSpan.textContent = `in ${min}m ${remSec}s`;
              }
            }
          }
        });
      };
      
      updateTimers();
      const intervalId = setInterval(updateTimers, 1000);
      container.dataset.timerInterval = intervalId;
    }
  }

  return { addWord, render };
})();

