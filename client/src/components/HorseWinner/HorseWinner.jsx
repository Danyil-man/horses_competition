import React from "react";
import style from "./HorseWinner.module.css";
import { useSelector } from "react-redux";

const Winner = () => {
  const { horses, winner } = useSelector((state) => state);

  return (
    winner !== -1 && (
      <div className={style.container}>
        <p className={style.winner}>The winner is {horses[winner].name}</p>
        <img
          className={style.firework}
          src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
          alt="firework"
        />
      </div>
    )
  );
};

export default Winner;
