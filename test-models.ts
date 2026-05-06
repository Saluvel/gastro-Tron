import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function testModel(model: string) {
  try {
    await ai.models.generateContent({ model, contents: 'hi' });
    console.log(model, 'works');
  } catch(e: any) {
    console.log(model, e.message);
  }
}

async function run() {
  await testModel('gemini-2.5-flash');
  await testModel('gemini-2.0-flash');
  await testModel('gemini-3.0-flash');
  await testModel('gemini-3-flash');
}

run();
