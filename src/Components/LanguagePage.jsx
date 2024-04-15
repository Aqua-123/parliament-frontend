import React, { useState, useEffect, useRef } from "react";
import SpeakingComponent from "./Speaking";
import Socket from "./Socket";
import ListeningComponent from "./Listening";

const ROOMID = "parliament";
const USERNAME = "mantri";

function Language() {
  const [audioText, setAudioText] = useState([]);
  const socketRef = useRef(null); // useRef to keep the socket instance persistent

  useEffect(() => {
    // Initialize the socket only if it's not already established
    if (!socketRef.current) {
      socketRef.current = new Socket();
      socketRef.current.joinRoom(USERNAME, ROOMID);
    }

    // Set up socket response listener
    socketRef.current.on("response", (data) => {
      const { username, gender, translated } = data;
      setAudioText((prevText) => [
        ...prevText,
        { username, gender, translated },
      ]);
    });

    // Scroll to top on initial render
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Clean up the socket when the component unmounts
    return () => {
      if (socketRef.current) {
        socketRef.current.socket.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  const onSpeakingText = (textData) => {
    if (socketRef.current) {
      socketRef.current.sendMessage(
        USERNAME,
        ROOMID,
        textData,
        "male",
        textData
      );
    }
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
