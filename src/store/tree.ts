import { writable } from "svelte/store";
import type { ornamentType } from "./ornament";

export type TreeOrnament = {
  x: number;
  y: number;
  ornament: keyof typeof ornamentType;
  color: string;
};

function createTreeOrnaments() {
  const defaultState: TreeOrnament[] = [];
  const { subscribe, update } = writable(defaultState);

  return {
    subscribe,
    push: (x: number, y: number, ornament: keyof typeof ornamentType) => {
      console.log(`put x=${x} y=${y} ornament:${ornament}`);
      update((treeOrnament) => [
        ...treeOrnament,
        {
          x,
          y,
          ornament,
          color: "green-300",
        },
      ]);
    },
  };
}

export const treeOrnaments = createTreeOrnaments();
