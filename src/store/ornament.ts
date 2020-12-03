import { writable, get } from "svelte/store";

export const ornamentType = {
  tree: "tree",
  bell: "bell",
};

export type Ornament = {
  type: keyof typeof ornamentType;
  colorHex: string;
};

function createOrnament() {
  const defaultState: Ornament = {
    type: "tree",
    colorHex: "#a2C09e",
  };
  const self = writable(defaultState);

  return {
    subscribe: self.subscribe,
    get: () => get(self),
    setTree: () => {
      self.update(
        (value) => (value = { type: "tree", colorHex: value.colorHex })
      );
    },
    setBell: () => {
      self.update(
        (value) => (value = { type: "bell", colorHex: value.colorHex })
      );
    },
    setColor: (colorHex: string) => {
      self.update(
        (value) => (value = { type: value.type, colorHex: colorHex })
      );
    },
  };
}

export const ornament = createOrnament();
