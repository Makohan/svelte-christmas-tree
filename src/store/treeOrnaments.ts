import { writable } from "svelte/store";
import type { Ornament } from "./ornament";

export type TreeOrnament = {
  x: number;
  y: number;
  ornament: Ornament;
};

function createTreeOrnaments() {
  const defaultState: TreeOrnament[] = [];
  const { subscribe, update } = writable(defaultState);

  return {
    subscribe,
    push: (x: number, y: number, ornament: Ornament) => {
      console.log(
        `put x=${x} y=${y} ornament:${ornament.type} color:${ornament.colorHex}`
      );
      update((treeOrnament) => [
        ...treeOrnament,
        {
          x,
          y,
          ornament,
        },
      ]);
    },
  };
}

export const treeOrnaments = createTreeOrnaments();
