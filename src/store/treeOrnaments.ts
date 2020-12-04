import { writable } from "svelte/store";
import type { Ornament } from "./ornament";

export type TreeOrnament = {
  id: string;
  x: number;
  y: number;
  ornament: Ornament;
};

function createId() {
  const number = Math.random();
  return number.toString(36).substr(2, 9);
}

function createTreeOrnaments() {
  const defaultState: TreeOrnament[] = [];
  const { subscribe, update } = writable(defaultState);

  return {
    subscribe,
    push: (x: number, y: number, ornament: Ornament) => {
      const adjustX = x - 10;
      const adjustY = y - 10;
      update((treeOrnament) => [
        ...treeOrnament,
        {
          id: createId(),
          x: adjustX,
          y: adjustY,
          ornament,
        },
      ]);
    },
  };
}

export const treeOrnaments = createTreeOrnaments();
