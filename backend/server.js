require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { handleVoiceRequest } = require("./geminiService");

const app = express();
const PORT = 3000;

const upload = multer({ dest: "uploads/" });

app.use(express.static(path.join(__dirname, "../frontend")));

app.post("/api/voice", upload.single("audio"), async (req, res) => {
  try {
    const audioPath = req.file.path;
    const result = await handleVoiceRequest(audioPath);

    // delete temp file
    fs.unlinkSync(audioPath);

    res.json({
      text: result.text,
      audioUrl: result.audioUrl,
    });
  } catch (err) {
    console.error("Error handling voice request:", err);
    res.status(500).send("Error processing voice request");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
