import React from "react";
import "./TranscriptTile.css";

const TranscriptTile = ({ data }) => {
  return (
    <>
      <div className="transcript-header">
        <div className="header-time">Time</div>
        <div className="header-speaker">Speaker</div>
        <div className="header-text">Text</div>
        <div className="header-action">Action</div>
      </div>
      <div className="transcript-container">
        {data.map((item, index) => (
          <div key={index} className="transcript-tile">
            <div className="time">{item.time}</div>
            <div className="speaker">{item.speaker}</div>
            <div className="text">{item.text}</div>
            <button className="play-button">Play</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TranscriptTile;
