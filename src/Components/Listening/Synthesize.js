import { ENDPOINT } from "../../Constants";

// app.get("/tts", async (req, res) => {
//     const { text, gender, lang } = req.query;
//     if (!text || !gender || !lang)
//       return res.status(400).send("Invalid request");

//     const audio = await TextToSpeechAzure(text, lang, gender);

//     if (!audio) return res.status(500).send("Failed to convert text to speech");

//     res.setHeader("Content-Type", "audio/wav");
//     return res.send(audio);
//   });
export const TextToSpeech = async (text, lang, gender) => {
  const response = await fetch(
    `${ENDPOINT}/tts?text=${text}&lang=${lang}&gender=${gender}`
  );
  if (!response.ok) {
    console.error("Failed to convert text to speech");
    return null;
  }
  return await response.blob();
};
