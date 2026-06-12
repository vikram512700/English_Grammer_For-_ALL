# 📚 English Master Pro

<p align="center">
  <img src="https://img.shields.io/badge/PWA-Compatible-success?style=for-the-badge&logo=pwa&logoColor=white&color=6c63ff" alt="PWA Compatible" />
  <img src="https://img.shields.io/badge/Offline-Resilient-blue?style=for-the-badge&logo=webmoney&logoColor=white&color=ff6584" alt="Offline Resilient" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript ES6" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

---

## 🌟 Overview
**English Master Pro** is a premium, completely free, and offline-capable English learning progressive web app (PWA). Designed to guide learners from **Beginner to Advanced (C2)** levels, it blends structured core modules with advanced gamification mechanics and smart review engines.

> **Our Philosophy**: Learn ➔ Practice ➔ Revise ➔ Assess ➔ Master

---

## 🚀 Premium Features

*   **🧩 AI Sentence Builder**: An interactive drag-and-drop game where learners arrange shuffled words to build grammatically correct sentences.
*   **🧠 Leitner Spaced Repetition (Smart Review)**: An adaptive system scheduling studied vocabulary words across 5 boxes. It includes a **Demo Mode (Fast Review)** for testing.
*   **⚡ Speed Challenge**: A rapid-fire timed mini-game. Test your grammatical reflexes under a 60-second limit with dynamic multiplier combos!
*   **🔍 Global Autocomplete Search**: Hit `Ctrl + K` to summon a search popover that scans modules, tenses, reading passages, vocabulary terms, and grammar rules.
*   **📱 Word of the Day**: A beautifully styled dashboard card featuring daily word definitions, parts of speech, usage examples, and Text-to-Speech (TTS) pronunciation.
*   **🎨 Premium Glassmorphic Theme**: A modern interface featuring particle backgrounds, smooth animations, and a persistent Dark/Light mode toggle.
*   **🎧 TTS & Voice Labs**: Hear reading texts, listening clips, and phonetic pronunciations, or record your own speaking practice using the microphone.

---

## 📖 Learning Modules

| Module | Icon | Description | Content Volume |
| :--- | :---: | :--- | :--- |
| **Grammar Academy** | 📖 | Structured lessons on parts of speech, syntax, and sentence structure. | 10 Topics × 10 Questions |
| **Tense Mastery** | ⏱️ | Formulate and practice all 12 English tenses. | 12 Tenses × 5 Questions |
| **Vocabulary Builder**| 🔤 | Flashcards, word matching, definition quizzes, and list overviews. | 60+ Advanced words |
| **Reading Hub** | 📰 | Multi-level reading passages followed by comprehension questions. | 4 Passages (A1–C1) |
| **Writing Studio** | ✍️ | Response prompts, error correction tasks, and rewrite exercises. | 8 Prompts + Worksheets |
| **Speaking Lab** | 🎤 | Speak into your microphone to record real-world situational conversations. | 8 Interactive scenarios |
| **Listening Center** | 🎧 | Audio playback comprehensions. | 3 Voice tasks |
| **Pronunciation Lab** | 🗣️ | Phonics pronunciation modules using synthetic audio feedback. | 6 Core categories |
| **Assessments** | 📝 | Multi-level checkups (Topic, Unit, Module, and Final). | 25Q to 200Q Tests |
| **Progress Dashboard**| 📊 | circular progress rings, activity calendars, and badge shelves. | 12 Unlockable Badges |

---

## 🛠️ Technical Stack
Built entirely with vanilla technologies for speed, security, and offline resilience:
*   **Core**: HTML5, Vanilla ES6 Javascript.
*   **Styling**: Modern CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism).
*   **Persistence**: IndexedDB (via `db.js`) and LocalStorage for rapid sync.
*   **Offline/PWA**: Service Worker caching (`sw.js`) for full offline availability.

---

## 🏃 Running the Application Locally

The app can be run locally using any static web server:

1.  **Clone / Open the directory**
2.  **Start a local server** (e.g. Python):
    ```bash
    python -m http.server 3000
    ```
3.  **Visit in your browser**:
    ```
    http://localhost:3000
    ```

---

## 📱 Accessing on Mobile (iOS & Android)

English Master Pro is hosted online and fully compatible as a Progressive Web App (PWA) on mobile devices:

*   **Live Web App URL**: [https://vikram512700.github.io/English_Grammer_For-_ALL/](https://vikram512700.github.io/English_Grammer_For-_ALL/)

### 📲 How to Install to Home Screen:
*   **iOS (Safari)**: Open the Live Web App URL in Safari ➔ Tap the **Share** button (box with up arrow) ➔ Scroll and select **Add to Home Screen**.
*   **Android (Chrome)**: Open the Live Web App URL in Chrome ➔ Tap the **three-dots menu** ➔ Select **Install app** or **Add to Home Screen**.

Once installed, the app launches in standalone mode with its own launcher icon, hiding browser controls, and functions fully offline.

---

## 🗂️ Documentation References
*   For codebase layout and class architecture, see [ARCHITECTURE.md](file:///c:/Users/vikra/Downloads/EnglishMasterPro/ARCHITECTURE.md).
*   For content outlines and structures, see [CONTENT_STRUCTURE.md](file:///c:/Users/vikra/Downloads/EnglishMasterPro/CONTENT_STRUCTURE.md).
*   For practice frameworks, see [PRACTICE_FRAMEWORK.md](file:///c:/Users/vikra/Downloads/EnglishMasterPro/PRACTICE_FRAMEWORK.md).
