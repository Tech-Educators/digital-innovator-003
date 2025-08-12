import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Endpoints

app.get("/", (req, res) => {
  res.json("This is the root route. Move along please");
});

app.post("/chat", async function (req, res) {
  const prompt = req.body.userPrompt;
  console.log(prompt);

  if (!prompt) {
    res.json("No prompt given");
  } else {
    const geminiResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction:
          "You are a very helpful assistant. Start off every single reply with 'Howdy doodah, have a rootin' tootin' time' and then proceed with your answer.",
      },
    });

    console.log("Geminis response is", geminiResponse.text);

    res.json(geminiResponse.text);
  }
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
