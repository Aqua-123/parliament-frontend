import { useState, useEffect } from "react";
import { TextToSpeech } from "./Synthesize";
import { LANGUAGES } from "../Speaking/Languages";

function ListeningComponent({ texts }) {
  const [audioText, setAudioText] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const convertTextsToSpeech = async () => {
      const textsWithTranslations = texts.filter(
        (text) => text.translated && text.translated[selectedLanguage]
      );

      const textsToConvert = textsWithTranslations.filter(
        (text) => !audioText.some((audio) => audio.text === text.translated)
      );
      const audioTextPromises = textsToConvert.map(async (text) => {
        try {
          const audio = await TextToSpeech(
            text.translated[selectedLanguage],
            selectedLanguage,
            text.gender
          );

          const audioDiv = new Audio(audio);
          audioDiv.play();

          return { text: text.text, audio, speaker: text.username };
        } catch (error) {
          console.error("Error converting text to speech:", error);
          return null;
        }
      });

      Promise.all(audioTextPromises).then((results) => {
        const validResults = results.filter((result) => result !== null);
        setAudioText((prevAudioText) => [...prevAudioText, ...validResults]);
      });
    };

    if (texts.length > 0) {
      convertTextsToSpeech();
    }
  }, [texts, selectedLanguage, setAudioText, audioText]);

  return (
    <>
      <div className="col-12 form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="form-control"
        ></textarea>
      </div>
      <div className="btmBtnDiv">
        <div className="btmBtnDiv">
          <label htmlFor="language-select">Language</label>
          <select
            id="language-select"
            className="form-control"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">Select Language</option>
            {LANGUAGES.map((language, index) => (
              <option key={index} value={language.LANGUAGE}>
                {language.NAME}
              </option>
            ))}
          </select>
          <br />
          <button className="btnButton playBtn">Play</button>
          <button className="btnButton stopBtn">Stop</button>
        </div>
      </div>
    </>
  );
}

export default ListeningComponent;
