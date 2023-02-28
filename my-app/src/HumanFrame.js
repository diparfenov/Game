import React from "react";
import "./MainFrame.css";

export default function HumanFrame({
  img,
  choice,
  able,
  onDecrementValue,
  onIncrementValue,
}) {
  return (
    <div className="humanFrame">
      <p className="name">Human</p>
      <div className="container">
        <button disabled={able} onClick={onDecrementValue}>
          &lt;
        </button>
        <img className="tenb" src={img} width="200" alt={choice} />
        <button disabled={able} onClick={onIncrementValue}>
          &gt;
        </button>
      </div>
      <div className="buttons">
        <p className="text">{choice === "QuestionMark" ? "Make a choice" : choice}</p>
      </div>
    </div>
  );
}
