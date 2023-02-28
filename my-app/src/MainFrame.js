import React, { useState } from "react";
import "./MainFrame.css";
import Rock from "./images/Rock.svg";
import Paper from "./images/Paper.svg";
import Scissors from "./images/Scissors.svg";
import QuestionMark from "./images/QuestionMark.svg";
import HumanFrame from "./HumanFrame";
import MachineFrame from "./MachineFrame";
import ScoreFrame from "./ScoreFrame";
import Header from "./Header";
import Footer from "./Footer";
//import Modal from "./Modal";

export default function MainFrame() {
  const [choiceHuman, setChoiceHuman] = useState("QuestionMark");
  const [choiceMachine, setChoiceMachine] = useState("QuestionMark");
  const [scoreHuman, setScoreHuman] = useState(0);
  const [scoreMachine, setScoreMachine] = useState(0);
  const [result, setResult] = useState("");
  const [loader, setLoader] = useState(false);
  const [able, setAble] = useState(false);
  //const [modalActive, setModalActive] = useState(true);

  const arr = ["Rock", "Scissors", "Paper"];

  const images = {
    Rock,
    Scissors,
    Paper,
    QuestionMark,
  };

  function handlePlayClick() {
    const rand = Math.floor(Math.random() * arr.length);
    const choice = choiceHuman + arr[rand];
    setAble(true);
    setLoader(true);
    if (
      choice === "PaperPaper" ||
      choice === "ScissorsScissors" ||
      choice === "RockRock"
    ) {
      setTimeout(() => {
        setResult("DRAW!");
        setLoader(false);
        setChoiceMachine(arr[rand]);
      }, 2000);
    } else if (
      choice === "PaperRock" ||
      choice === "ScissorsPaper" ||
      choice === "RockScissors"
    ) {
      setTimeout(() => {
        setResult("You WIN!");
        setScoreHuman((prev) => prev + 1);
        setLoader(false);
        setChoiceMachine(arr[rand]);
      }, 2000);
    } else if (
      choice === "PaperScissors" ||
      choice === "ScissorsRock" ||
      choice === "RockPaper"
    ) {
      setTimeout(() => {
        setResult("You LOSE!");
        setScoreMachine((prev) => prev + 1);
        setLoader(false);
        setChoiceMachine(arr[rand]);
      }, 2000);
    }

    setTimeout(() => {
      setChoiceHuman("QuestionMark");
      setChoiceMachine("QuestionMark");
      setResult("");
      setAble(false);
    }, 6000);
  }

  function incrementValue() {
    const increment = {
      Rock: arr[1],
      Scissors: arr[2],
      Paper: arr[0],
      QuestionMark: arr[0],
    };
    return setChoiceHuman(increment[choiceHuman]);
  }

  function decrementValue() {
    const decrement = {
      Rock: arr[2],
      Scissors: arr[0],
      Paper: arr[1],
      QuestionMark: arr[2],
    };
    return setChoiceHuman(decrement[choiceHuman]);
  }

  return (
    <>
      <Header />
      <div className="mainFrame">
        <HumanFrame
          img={images[choiceHuman]}
          choice={choiceHuman}
          able={able}
          onDecrementValue={decrementValue}
          onIncrementValue={incrementValue}
        />
        <ScoreFrame
          scoreHuman={scoreHuman}
          scoreMachine={scoreMachine}
          able={able}
          onHandlePlayClick={handlePlayClick}
          choiceHuman={choiceHuman}
          active={result}
        />
        <MachineFrame
          img={images[choiceMachine]}
          choice={choiceMachine}
          result={result}
          loader={loader}
          able={able}
        />
      </div>
      <Footer />
      </>
  );
}
