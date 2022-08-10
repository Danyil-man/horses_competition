import React from "react";
import HorseItem from "../HorseItem/HorseItem";
import style from "./HorseTable.module.css";

const HorseTable = ({ horses }) => {
  return (
    <div className={style.container}>
      {horses.map(horse => (
        <HorseItem key={horse.name} horse={horse} />
      ))}
    </div>
  );
};

export default HorseTable;
