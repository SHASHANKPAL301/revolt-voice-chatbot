# revolt-voice-chatbot-
# Revolt Voice Chatbot 🔊⚡

This is a voice-based AI chatbot for **Revolt Motors**, designed using **Gemini AI** and **gTTS**. It can answer queries about Revolt electric bikes using voice and text — just like a smart virtual assistant.

## 🔥 Features

- 🎤 Voice input using browser microphone
- 🧠 Text generation using Google Gemini 1.5
- 🗣 Voice output using gTTS (Google Text-to-Speech)
- 💬 Chat interface (text + audio)
- ⚙ Built with Express.js, HTML, CSS & JS
- 📁 Gemini API Key hidden via `.env`

---

## 🛠 Tech Stack

| Frontend   | Backend   | AI/Voice     |
|------------|-----------|--------------|
| HTML, CSS, JS | Node.js, Express.js | Gemini 1.5 Flash, gTTS |

---

## 🚀 How to Run Locally

### 1. Clone the Repo

```bash
2. Setup Backend
bash
Copy
Edit
cd backend
npm install

3. Add .env file inside backend/
env
Copy
Edit
GOOGLE_API_KEY=your_gemini_api_key_here
4. Start the Server
bash
Copy
Edit
node server.js
5. Open Frontend
Open frontend/index.html in your browser.

📦 Folder Structure
pgsql
Copy
Edit
revolt-voice-chatbot/
├── backend/
│   ├── public/
│   │   └── reply.mp3
│   ├── server.js
│   ├── geminiService.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
💡 Use Case
This chatbot is built to answer user questions related to:

Revolt bike features

Pricing & subscription

Battery swapping

Range, service & maintenance

⚠️ Disclaimer
This is a student-level project and not affiliated with Revolt Motors.

✨ Author
Shashank Pal
🧠 MCA | Developer | AI Enthusiast
🌐 GitHub
