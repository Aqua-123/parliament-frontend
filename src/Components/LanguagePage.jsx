import React, { useState, useEffect, useRef } from "react";
import Socket from "./Socket";
import TranscriptTile from "./TranscriptTile";
import PushToSpeak from "./PushToSpeak";
import "./LanguagePage.css";

const ROOMID = "parliament";
const USERNAME = "mantri";

const transcriptData = [
  {
    time: "00:01",
    speaker: "Speaker 1",
    text: "Hello, welcome to our presentation.",
  },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
  { time: "00:05", speaker: "Speaker 2", text: "Thank you, happy to be here." },
];

function Language() {
  const handlePermission = () => {
    console.log("Permission requested");
  };

  return (
    <>
      <section className="sessionListSec languageSec">
        <div className="container">
          <h3 className="sessionHdng">2021 - Parliament - 12th July</h3>

          <div className="sessionListdiv">
            <TranscriptTile data={transcriptData} />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <PushToSpeak
                onSpeakingText={(text) => console.log("Speaking text:", text)}
              />
              <br />
              <button
                onClick={handlePermission}
                className="take-permission-button"
              >
                Take Permission
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Language;
