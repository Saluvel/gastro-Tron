import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Route
  app.post("/api/generate-questions", async (req, res) => {
    const { topicId, topicName, difficulty, count, focusArea } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Genera ${count} preguntas de opción múltiple en ESPAÑOL para el nivel "${difficulty}" sobre el tema: "${topicName}".
        Contexto específico: ${focusArea || 'General'}
        
        Devuelve un JSON con este formato:
        [
          {
            "id": "unique_id",
            "topic": "${topicId}",
            "difficulty": "${difficulty}",
            "text": "...",
            "options": ["...", "...", "...", "..."],
            "correctIndex": 0,
            "explanation": "...",
            "fisiopato": "...",
            "clinicalPearl": "...",
            "guideline": "...",
            "pillar": "Must-Know",
            "whyWrong": { "0": "...", "1": "...", "2": "...", "3": "..." }
          }
        ]`,
        config: {
          responseMimeType: "application/json",
        }
      });

      res.json(JSON.parse(response.text || '[]'));
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to generate questions" });
    }
  });

  // Oral Simulation Route
  app.post("/api/oral-sim", async (req, res) => {
    const { messages } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
    }

    try {
      const ai = new GoogleGenAI({ apiKey });

      // Filter messages to match Gemini format
      const history = messages.slice(0, -1).map((m: any) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));
      
      const lastMessage = messages[messages.length - 1].content;

      // The new SDK uses a different approach for chat but we can just use generateContent with history
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...history, { role: 'user', parts: [{ text: lastMessage }] }]
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Oral Sim Error:", error);
      res.status(500).json({ error: "Failed to process simulation step" });
    }
  });

  // Oracle (GastroChat) Route
  app.post("/api/oracle", async (req, res) => {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction: "Eres el Oráculo de GAS-TRON, una IA experta en gastroenterología clínica. Tu objetivo es ayudar a Fellows y Residentes con dudas médicas, perlas fisiopatológicas y guías de práctica clínica (AGA, ACG, ESGE, AASLD). Tus respuestas deben ser técnicas, precisas y con un tono 'cyberpunk/tron' pero profesional. Siempre aclara que tus respuestas son informativas y no sustituyen el juicio clínico profesional."
        }
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Oracle Error:", error);
      res.status(500).json({ error: "Failed to consult the Oracle" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
