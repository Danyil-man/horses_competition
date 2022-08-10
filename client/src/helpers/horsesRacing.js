import { MAX_DISTANCE } from "../consts";

export const finishedRace = (horses) =>
  horses.every((horse) => horse.distance === MAX_DISTANCE);
export const horseWinner = (horses) =>
  horses.findIndex((horse) => horse.distance === MAX_DISTANCE);
