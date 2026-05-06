const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const file = 'src/data/questionBank.ts';
let content = fs.readFileSync(file, 'utf-8');

async function generateQuestions(topic, count, startId) {
  console.log(`Generating ${count} questions for ${topic} starting at ${startId}...`);
  const prompt = `
Generate an array of ${count} high-quality, professional, and medically accurate multiple-choice questions for gastroenterology board exam preparation.
Topic: ${topic}
Language: Professional Medical Spanish. Use perfect, neutral vocabulary. ABSOLUTELY NO gibberish or nonsensical hallucinated adjectives (DO NOT use words like "estelar", "crural", "inter-mensual", "letánico", etc.). Keep the language strictly scientific and academic.

Each question MUST follow exactly this JSON structure:
{
  "id": "q-${topic.replace('_', '-')}-${String(startId).padStart(3, '0')}",
  "topic": "${topic}",
  "difficulty": "Fellow",
  "text": "[Clear, concise medical case or question]",
  "options": [
    "[Correct Option]",
    "[Distractor 1]",
    "[Distractor 2]",
    "[Distractor 3]"
  ],
  "correctIndex": 0,
  "explanation": "[Clear medical explanation of the correct answer]",
  "fisiopato": "[Pathophysiology explanation related to the question]",
  "clinicalPearl": "[A short, extremely practical clinical pearl for memorization]",
  "guideline": "[A real clinical guideline or consensus reference]",
  "whyWrong": {
    "1": "[Why Distractor 1 is wrong]",
    "2": "[Why Distractor 2 is wrong]",
    "3": "[Why Distractor 3 is wrong]"
  },
  "pillar": "Common Cases"
}

Ensure the output is ONLY a valid JSON array of objects. Do not wrap in markdown \`\`\`json. Output nothing but the array.
Note: Adjust the "id" sequentially from ${startId} up to ${startId + count - 1}. Keep "correctIndex" as 0 (the UI will shuffle them). Options array should always have 4 elements.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.1
      }
    });
    let text = response.text().trim();
    if (text.startsWith('\`\`\`json')) {
      text = text.substring(7, text.length - 3).trim();
    } else if (text.startsWith('\`\`\`')) {
      text = text.substring(3, text.length - 3).trim();
    }
    const questions = JSON.parse(text);
    return questions;
  } catch (error) {
    console.error('Error generating:', error);
    return [];
  }
}

async function fixAndAppend() {
  // First, remove broken/gibberish questions
  // celiaca: remove q-celiaca-012 to q-celiaca-030
  // eii_avanzada: remove q-eii-avanzada-020 to q-eii-avanzada-030
  
  const lines = content.split('\n');
  let filteredLines = [];
  let inBadQuestion = false;
  let bracketDepth = 0;
  
  // This is a naive parse to delete specific objects. Since the file is well formatted.
  // Instead of manual regex, let's use the power of JS replace.
  
  // Regex to match question objects. Since some are huge, regex might fail.
  // We can just rely on the fact that each question ends with `  },`
  // Actually, we are just generating and then I can write a custom replace using Node if needed.
  
  // Wait, let's do this:
  const diarreaQs = await generateQuestions('diarrea_cronica', 21, 10);
  
  const celiacaQs = await generateQuestions('celiaca', 19, 12);
  
  const eiiQs = await generateQuestions('eii_avanzada', 11, 20);
  
  const allGenerated = [...diarreaQs, ...celiacaQs, ...eiiQs];
  fs.writeFileSync('generated_qs.json', JSON.stringify(allGenerated, null, 2));
  console.log('Saved to generated_qs.json');
}

fixAndAppend();
