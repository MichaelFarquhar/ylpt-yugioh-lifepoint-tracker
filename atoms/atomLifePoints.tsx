import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

// Tuple type: [player1, player2]
export type LifePoints = [number, number];

// Tuple type: [player1, player2] as strings
export type FormattedLifePoints = [string, string];

export const lifePoints = atomWithReset<LifePoints>([8000, 8000]);

// Derived atom for formatted display (4-5 digits with leading zeros)
export const formattedLifePoints = atom<FormattedLifePoints>((get) => {
  const [player1, player2] = get(lifePoints);
  return [player1.toString().padStart(4, "0"), player2.toString().padStart(4, "0")];
});
