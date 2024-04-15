import { useState, useRef } from "react";
import { LANGUAGES } from "./Languages";
import { SpeechToText } from "./SpeechToText";
import TranslateText from "../Listening/Translate";

const MAX_AUDIO_LENGTH = 5000;

function SpeakingComponent({ onAudioText }) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioText, setAudioText] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const audioChunks = useRef([]);
  const mediaRecorderRef = useRef(null);
  const recordingIntervalRef = useRef(null);

  const processAudioChunks = async () => {
    if (audioChunks.current.length === 0) {
      console.log("No audio chunks to process.");
      return;
    }

    const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
    console.log("Generated audioBlob:", audioBlob);
    audioChunks.current = [];

    try {
      const text = await SpeechToText(audioBlob, selectedLanguage);
      const translatedTexts = await TranslateText(text, selectedLanguage);

      console.log("translatedTexts", translatedTexts);
      setAudioText((prevText) => [...prevText, text]);

      onAudioText(translatedTexts);
    } catch (error) {
      console.error("Error converting speech to text:", error);
    }
  };

  const startRecording = async () => {
    if (!selectedLanguage) {
      alert("Please select a language");
      return;
    }
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunks.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          processAudioChunks();
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);

        recordingIntervalRef.current = setInterval(() => {
          console.log(
            "recordingIntervalRef.current",
            recordingIntervalRef.current
          );
          if (
            mediaRecorderRef.current &&
            mediaRecorderRef.current.state === "recording"
          ) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.start();
          }
        }, MAX_AUDIO_LENGTH);
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      clearInterval(recordingIntervalRef.current);
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const handlePushToSpeakMouseDown = () => {
    startRecording();
  };

  const handlePushToSpeakMouseUp = () => {
    stopRecording();
  };

  return (
    <>
      <div className="btmBtnDiv languagediv">
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
      </div>

      <div className="btmBtnDivBtm">
        <button
          className="btnButton langBtn"
          onMouseDown={handlePushToSpeakMouseDown}
          onMouseUp={handlePushToSpeakMouseUp}
          onTouchStart={handlePushToSpeakMouseDown} // for touch devices
          onTouchEnd={handlePushToSpeakMouseUp}
          disabled={isRecording}
          type="button"
        >
          Push to Speak
        </button>
        <button
          className="btnButton playBtn"
          onMouseDown={startRecording}
          disabled={isRecording}
          type="button"
        >
          Start
        </button>
        <button
          className="btnButton stopBtn"
          onClick={stopRecording}
          disabled={!isRecording}
          type="button"
        >
          Stop
        </button>
      </div>
      {audioText && (
        <p>
          {audioText.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      )}
    </>
  );
}

export default SpeakingComponent;
