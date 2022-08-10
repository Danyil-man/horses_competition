import React from "react";
import style from "./Intro.module.css";
import horsesGif from "./horses.gif"

const Intro = () => {
    return(
        <div className={style.container}>
            <img src={horsesGif} alt="" />
            <p className={style.startText}>Let's start the competition!</p>
        </div>
    )
}

export default Intro;
