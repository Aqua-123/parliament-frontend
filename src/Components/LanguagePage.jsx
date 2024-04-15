import React from "react";
import { useState, useEffect } from "react";
import SpeakingComponent from "./Speaking";
import Socket from "./Socket";
import ListeningComponent from "./Listening";

// HARD CODED ROOM ID AND USERNAME
const ROOMID = "parliament";
const USERNAME = "mantri";

function Language() {
  const [audioText, setAudioText] = useState([]);
  // socket connection
  const socket = new Socket();
  socket.joinRoom(USERNAME, ROOMID);
  socket.sendMessage(USERNAME, ROOMID, "Welcome Mantri Ji", "male");
  socket.on("response", (data) => {
    const { username, gender, translated } = data;
    setAudioText((prevText) => [...prevText, { username, gender, translated }]);
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  scrollToTop();

  const onSpeakingText = (textData) => {
    socket.sendMessage(USERNAME, ROOMID, "Mantri Ji:", "male", textData);
  };

  return (
    <>
      <section className="sessionListSec languageSec">
        <div className="container">
          <h2 className="listHdng">Welcome Mantri Ji</h2>
          <div className="sessionListdiv">
            <form action="">
              <ListeningComponent texts={audioText} />
              <SpeakingComponent onAudioText={onSpeakingText} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Language;
