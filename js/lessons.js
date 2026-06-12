/* ============================================================
   lessons.js – Lesson modal engine
   ============================================================ */

const LessonEngine = (() => {
  let currentTopic = null;

  function open(topic) {
    currentTopic = topic;
    const lesson = topic.lesson;
    const modal = document.getElementById('lesson-modal');
    document.getElementById('lesson-title').textContent = `${topic.icon} ${topic.name}`;

    let html = '';
    if (lesson.intro) {
      html += `<div class="lesson-section"><h3>📌 Introduction</h3><p>${lesson.intro}</p></div>`;
    }
    if (lesson.explanation) {
      html += `<div class="lesson-section"><h3>📖 Explanation</h3><p>${lesson.explanation}</p></div>`;
    }
    if (lesson.examples && lesson.examples.length) {
      html += `<div class="lesson-section"><h3>💡 Examples</h3><ul class="lesson-examples">
        ${lesson.examples.map(ex => `<li>${ex}</li>`).join('')}
      </ul></div>`;
    }
    if (lesson.tip) {
      html += `<div class="lesson-section"><div class="lesson-tip">${lesson.tip}</div></div>`;
    }

    document.getElementById('lesson-body').innerHTML = html;
    modal.classList.add('open');

    Gamification.addXP(Gamification.XP_RULES.lessonRead, 'lesson read');
    Gamification.updateNavBar();
  }

  function close() {
    document.getElementById('lesson-modal').classList.remove('open');
  }

  function initEventListeners() {
    document.getElementById('lesson-close').addEventListener('click', close);
    document.getElementById('lesson-start-quiz').addEventListener('click', () => {
      close();
      if (currentTopic && currentTopic.questions) {
        QuizEngine.open(currentTopic.questions, currentTopic.id, currentTopic.name);
      }
    });
    document.getElementById('lesson-modal').addEventListener('click', e => {
      if (e.target === document.getElementById('lesson-modal')) close();
    });
  }

  return { open, close, initEventListeners };
})();
