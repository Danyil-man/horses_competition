import React from "react";
import style from "./Home.module.css";
import { socket } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { setStartedRace } from "../../store/slice/horsesSlice";
import HorseTable from "../HorseTable/HorseTable";
import Winner from "../HorseWinner/HorseWinner";
import Intro from "../Intro/Intro";

const Home = () => {
  const dispatch = useDispatch();
  const raceInProgress = useSelector((state) => state.raceStarted);
  const horses = useSelector((state) => state.horses);
  const startRace = () => {
    socket.emit("start");
    dispatch(setStartedRace(true));
  };

  return (
    <div className={style.container}>
      <button
        disabled={raceInProgress}
        className={style.startBtn}
        onClick={startRace}
      >
        Start
      </button>
      {horses.length > 0 ? <HorseTable horses={horses} /> : <Intro />}
      <Winner />
    </div>
  );
};

export default Home;
