import { ENDPOINT } from "../../Constants";

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
