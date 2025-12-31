
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { GenerationResult, UserInput } from "../types";

export const generateReplies = async (input: UserInput): Promise<GenerationResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Message received: "${input.receivedMessage}"
    Context provided: "${input.context || 'None'}"
    
    Please provide 2-3 gentle reply options following your tone guidelines.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            replies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ["text", "explanation"]
              }
            }
          },
          required: ["replies"]
        }
      }
    });

    const result = JSON.parse(response.text || '{"replies": []}');
    return result as GenerationResult;
  } catch (error) {
    console.error("Error generating replies:", error);
    throw new Error("I'm having a little trouble thinking right now. Could you try again in a moment?");
  }
};
