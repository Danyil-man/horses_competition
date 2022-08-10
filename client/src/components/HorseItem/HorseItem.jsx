import React from "react";
import style from "./HorseItem.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { MAX_DISTANCE } from "../../consts";

const HorseItem = ({horse}) => {
    const completed = Math.ceil((horse.distance / MAX_DISTANCE) * 100);
    return(
        <div className={style.horseItem}>
            <p className={style.horseName}>{horse.name}</p>
            <ProgressBar bgColor="green" className={style.progressBar} completed={completed} />
        </div>
    )
}

export default HorseItem;
