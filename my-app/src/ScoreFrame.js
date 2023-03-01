import React from "react";

export default function ScoreFrame({
  scoreMachine,
  scoreHuman,
  choiceHuman,
  able,
  onHandlePlayClick,
  active
}) {
  if (active === "") {
  return (
    <div className="scoreFrame">
      <div className="score">
      <p>
{scoreHuman}:{scoreMachine}
        </p>
        </div>
      <p className="text-name">VS</p>
      <button
        className="btn-play"
        disabled={able || choiceHuman === "QuestionMark"}
        onClick={onHandlePlayClick}
      >
        Play
      </button>
    </div>
  );
  } else {
    return (
      <div className="scoreFrame active text">
        <p>
          {active}
        </p>
      </div>
    );
  }
}
