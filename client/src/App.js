import React, { useEffect } from "react";
import style from "./App.module.css";
import { socket } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { setHorses, setWinner } from "./store/slice/horsesSlice";
import { finishedRace, horseWinner } from "./helpers/horsesRacing";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.winner);

  useEffect(() => {
    socket.on("ticker", (horses) => {
      dispatch(setHorses(horses));

      if (finishedRace(horses)) {
        socket.off("ticker");
      }

      if (winner === -1) {
        const winnerIndex = horseWinner(horses);
        if (winnerIndex !== -1) {
          dispatch(setWinner(winnerIndex));
        }
      }

      return () => {
        socket.off("ticker");
      };
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <Home />
    </div>
  );
}

export default App;
