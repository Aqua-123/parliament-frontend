import { ENDPOINT } from "../../Constants";

export const SpeechToText = async (audioBlob, lang) => {
  const formData = new FormData();
  formData.append("audio", audioBlob);
  formData.append("lang", lang);
  const response = await fetch(`${ENDPOINT}/asr`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    console.error("Failed to convert speech to text");
    return null;
  }

  const data = await response.json();
  return data.text;
};
