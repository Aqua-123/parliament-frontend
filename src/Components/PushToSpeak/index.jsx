import React, { useState, useEffect } from "react";
import "./PushToSpeak.css";

const PushToSpeak = () => {
  const [audioRecorder, setAudioRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  // Request access to the microphone
  useEffect(() => {
    const getMicrophoneAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder = new MediaRecorder(stream);
        setAudioRecorder(recorder);
      } catch (error) {
        console.error("Error accessing the microphone:", error);
      }
    };

    getMicrophoneAccess();
  }, []);

  const startRecording = () => {
    if (audioRecorder && audioRecorder.state === "inactive") {
      audioRecorder.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (audioRecorder && audioRecorder.state === "recording") {
      audioRecorder.stop();
      setIsRecording(false);
      // Here you can handle the recorded audio e.g., sending it to a server
      audioRecorder.ondataavailable = (e) => {
        const audioData = e.data;
        console.log("Audio data available:", audioData);
        // Process audioData here
      };
    }
  };

  return (
    <div>
      <button
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onTouchStart={startRecording} // for touch devices
        onTouchEnd={stopRecording}
        disabled={!audioRecorder}
        className={`push-to-speak-button ${isRecording ? "recording" : ""}`}
      >
        {isRecording ? "Release to Stop" : "Hold to Speak"}
      </button>
    </div>
  );
};

export default PushToSpeak;
