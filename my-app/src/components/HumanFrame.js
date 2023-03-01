import React from "react";

export default function HumanFrame({
  img,
  choice,
  able,
  onDecrementValue,
  onIncrementValue,
}) {
  return (
    <div className="humanFrame">
      <p className="text-name">Human</p>
      <div className="container">
        <button className="btn-left" disabled={able} onClick={onDecrementValue}>
          &lt;
        </button>
        <img src={img} width="200" alt={choice} />
        <button className="btn-right" disabled={able} onClick={onIncrementValue}>
          &gt;
        </button>
      </div>
        <p className="text">{choice === "QuestionMark" ? "Make a choice" : choice}</p>
    </div>
  );
}
