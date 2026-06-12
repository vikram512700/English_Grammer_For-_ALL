/* ============================================================
   quiz.js – Quiz Engine
   ============================================================ */

const QuizEngine = (() => {
  let state = {
    questions: [],
    currentIndex: 0,
    answers: [],
    topicId: '',
    topicName: '',
    hintUsed: false,
    timerInterval: null,
    timeLeft: 30,
    selectedOption: null,
    answered: false,
  };

  const TIMER_MAX = 30;
  const CIRCUMFERENCE = 2 * Math.PI * 26; // r=26

  function open(questions, topicId, topicName) {
    state = {
      questions: shuffleArray([...questions]).slice(0, Math.min(questions.length, 10)),
      currentIndex: 0, answers: [],
      topicId, topicName, hintUsed: false,
      timerInterval: null, timeLeft: TIMER_MAX,
      selectedOption: null, answered: false,
    };
    const modal = document.getElementById('quiz-modal');
    modal.classList.add('open');
    renderQuestion();
  }

  function close() {
    clearTimer();
    document.getElementById('quiz-modal').classList.remove('open');
  }

  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) { showResults(); return; }

    state.answered = false;
    state.selectedOption = null;
    state.hintUsed = false;

    // Header
    document.getElementById('quiz-topic-label').textContent = state.topicName;
    document.getElementById('quiz-count').textContent = `Q ${state.currentIndex+1}/${state.questions.length}`;
    document.getElementById('quiz-progress-fill').style.width = `${(state.currentIndex / state.questions.length)*100}%`;

    // Question
    document.getElementById('question-text').innerHTML = q.q;

    // Hint
    const hintEl = document.getElementById('question-hint');
    hintEl.style.display = 'none';
    document.getElementById('hint-btn').disabled = false;

    // Options
    const optGrid = document.getElementById('options-grid');
    const labels = ['A','B','C','D'];
    optGrid.innerHTML = q.opts.map((opt, i) => `
      <button class="option-btn" id="opt-${i}" data-index="${i}" aria-label="Option ${labels[i]}: ${opt}">
        <span class="option-label">${labels[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    optGrid.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.index)));
    });

    // Next button
    document.getElementById('next-btn').disabled = true;

    // Explanation
    const expEl = document.querySelector('.explanation-box');
    if (expEl) expEl.remove();

    // Timer
    startTimer();
  }

  function selectOption(index) {
    if (state.answered) return;
    state.answered = true;
    state.selectedOption = index;
    clearTimer();

    const q = state.questions[state.currentIndex];
    const correct = index === q.ans;
    const xpEarned = Gamification.recordAnswer(correct, state.hintUsed);
    state.answers.push({ q: q.q, selected: index, correct: q.ans, isCorrect: correct });

    // Style options
    const opts = document.querySelectorAll('.option-btn');
    opts.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.ans) {
        btn.classList.add('correct');
        btn.classList.add('animate-correct');
      } else if (i === index && index !== q.ans) {
        btn.classList.add('wrong');
        btn.classList.add('animate-wrong');
      }
    });

    // Explanation
    if (q.exp) {
      const div = document.createElement('div');
      div.className = 'explanation-box';
      div.innerHTML = `<strong>${correct ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.exp}`;
      document.getElementById('quiz-body').appendChild(div);
    }

    document.getElementById('next-btn').disabled = false;
    Gamification.updateNavBar();
  }

  function nextQuestion() {
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) showResults();
    else renderQuestion();
  }

  function startTimer() {
    clearTimer();
    state.timeLeft = TIMER_MAX;
    updateTimerUI();
    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      updateTimerUI();
      if (state.timeLeft <= 0) {
        clearTimer();
        if (!state.answered) {
          // Auto-select wrong
          state.answered = true;
          state.answers.push({ q: state.questions[state.currentIndex].q, selected: -1, correct: state.questions[state.currentIndex].ans, isCorrect: false });
          Gamification.recordAnswer(false);
          document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
          const correctBtn = document.getElementById(`opt-${state.questions[state.currentIndex].ans}`);
          if (correctBtn) correctBtn.classList.add('correct');
          document.getElementById('next-btn').disabled = false;
          Gamification.updateNavBar();
        }
      }
    }, 1000);
  }

  function clearTimer() {
    if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
  }

  function updateTimerUI() {
    const num = document.getElementById('timer-num');
    const circle = document.getElementById('timer-circle');
    if (!num || !circle) return;
    num.textContent = state.timeLeft;
    const offset = CIRCUMFERENCE * (1 - state.timeLeft / TIMER_MAX);
    circle.style.strokeDashoffset = offset;
    circle.className = 'timer-circle' +
      (state.timeLeft <= 10 ? ' danger' : state.timeLeft <= 20 ? ' warning' : '');
  }

  function showResults() {
    close();
    const correct = state.answers.filter(a => a.isCorrect).length;
    const total = state.answers.length;
    const pct = Math.round((correct / total) * 100);
    const xpEarned = correct * Gamification.XP_RULES.correctAnswer;

    if (pct === 100) Gamification.recordPerfectQuiz();

    document.getElementById('rs-score').textContent = pct + '%';
    document.getElementById('rs-correct').textContent = `${correct}/${total}`;
    document.getElementById('rs-xp').textContent = '+' + xpEarned;
    document.getElementById('results-emoji').textContent = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
    document.getElementById('results-title').textContent = pct >= 80 ? 'Excellent Work!' : pct >= 60 ? 'Good Job!' : 'Keep Practicing!';
    document.getElementById('results-subtitle').textContent = `You got ${correct} out of ${total} correct.`;

    setTimeout(() => {
      document.getElementById('results-bar-fill').style.width = pct + '%';
    }, 100);

    document.getElementById('results-modal').classList.add('open');
    if (pct >= 80) Gamification.confetti();

    Gamification.updateTopicProgress(state.topicId, correct, total);
    Gamification.updateNavBar();
    Gamification.updateDailyProgress();
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function useHint() {
    if (state.answered || state.hintUsed) return;
    const q = state.questions[state.currentIndex];
    if (!q.hint) return;
    state.hintUsed = true;
    const hintEl = document.getElementById('question-hint');
    document.getElementById('hint-text').textContent = q.hint;
    hintEl.style.display = 'flex';
    document.getElementById('hint-btn').disabled = true;
  }

  function initEventListeners() {
    document.getElementById('quiz-close').addEventListener('click', close);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('hint-btn').addEventListener('click', useHint);
    document.getElementById('results-modal').addEventListener('click', e => {
      if (e.target === document.getElementById('results-modal')) {
        document.getElementById('results-modal').classList.remove('open');
      }
    });
    document.getElementById('retry-btn').addEventListener('click', () => {
      document.getElementById('results-modal').classList.remove('open');
      open(state.questions, state.topicId, state.topicName);
    });
    document.getElementById('continue-btn').addEventListener('click', () => {
      document.getElementById('results-modal').classList.remove('open');
    });
    document.getElementById('review-btn').addEventListener('click', reviewAnswers);
  }

  function reviewAnswers() {
    // Simple review: re-open results with answer list
    const modal = document.getElementById('results-modal');
    let reviewHTML = '<div style="padding:0 32px 24px"><h3 style="margin-bottom:12px;font-size:1rem">Answer Review</h3>';
    const labels = ['A','B','C','D'];
    state.answers.forEach((a, i) => {
      const q = state.questions[i];
      reviewHTML += `<div style="margin-bottom:12px;padding:12px;background:var(--bg-elevated);border-radius:var(--radius-md);border:1px solid ${a.isCorrect?'rgba(67,233,123,0.3)':'rgba(239,71,111,0.3)'}">
        <div style="font-size:0.85rem;font-weight:600;margin-bottom:4px">${i+1}. ${q.q}</div>
        <div style="font-size:0.8rem;color:${a.isCorrect?'var(--accent)':'var(--danger)'}">Your answer: ${a.selected>=0?labels[a.selected]:'(no answer)'} — ${a.isCorrect?'✅ Correct':'❌ Wrong'}</div>
        ${!a.isCorrect?`<div style="font-size:0.8rem;color:var(--accent)">Correct: ${labels[a.correct]} — ${q.opts[a.correct]}</div>`:''}
        ${q.exp?`<div style="font-size:0.78rem;color:var(--text-secondary);margin-top:4px">${q.exp}</div>`:''}
      </div>`;
    });
    reviewHTML += '</div>';
    const existingReview = modal.querySelector('.review-list');
    if (existingReview) existingReview.remove();
    const div = document.createElement('div');
    div.className = 'review-list';
    div.innerHTML = reviewHTML;
    modal.querySelector('.results-container').appendChild(div);
  }

  return { open, close, initEventListeners };
})();
