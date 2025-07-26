import { atom } from "jotai";

export interface LifePoints {
  player1: number;
  player2: number;
}

export const lifePoints = atom<LifePoints>({
  player1: 8000,
  player2: 8000,
});
