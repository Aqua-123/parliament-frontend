import { LANGUAGES } from "../Speaking/Languages";
import { ENDPOINT } from "../../Constants";

async function TranslateText(text, sourceLang) {
  const languagesToTranslateIn = LANGUAGES.filter(
    (lang) => lang !== sourceLang
  );

  const translatedTexts = {};

  await Promise.all(
    languagesToTranslateIn.map(async (lang) => {
      const response = await fetch(
        `${ENDPOINT}/translate?text=${text}&lang=${lang.LANGUAGE}`
      );
      if (!response.ok) {
        console.error("Failed to translate text");
        translatedTexts[lang.LANGUAGE] = null;
      } else {
        const translatedText = await response.text();
        translatedTexts[lang.LANGUAGE] = translatedText;
      }
    })
  );

  translatedTexts[sourceLang] = text;
  return translatedTexts;
}

export default TranslateText;
