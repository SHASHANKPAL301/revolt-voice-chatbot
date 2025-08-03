const micBtn = document.getElementById("mic-button");
const chatDiv = document.getElementById("chat");
const audioPlayer = document.getElementById("audio-response");

let isRecording = false;
let mediaRecorder;
let audioChunks = [];

micBtn.addEventListener("click", async () => {
  if (!isRecording) {
    micBtn.textContent = "⏹ Stop Listening";
    startRecording();
  } else {
    micBtn.textContent = "🎤 Start Listening";
    stopRecording();
  }
  isRecording = !isRecording;
});

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (e) => {
    audioChunks.push(e.data);
  };

  mediaRecorder.onstop = async () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
    audioChunks = [];

    const formData = new FormData();
    formData.append("audio", audioBlob);

    chatDiv.textContent += "\n👤 You: [voice input sent]\n";

    // Send to backend (API not implemented yet)
    const response = await fetch("/api/voice", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    // Display and play AI response
    chatDiv.textContent += `🤖 AI: ${data.text}\n`;
    audioPlayer.src = data.audioUrl;
    audioPlayer.play();
  };

  mediaRecorder.start();
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
}
