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
      <button className="btn-score">
{scoreHuman}:{scoreMachine}
        </button>
      <p className="name">VS</p>
      <button
        className={able || choiceHuman === "QuestionMark" ? "btn-play-disable" : "btn-play"}
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
