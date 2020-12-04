import { writable, get } from "svelte/store";

export const ornamentType = {
  bell: "bell",
  star: "star",
  tree: "tree",
};

export type Ornament = {
  type: keyof typeof ornamentType;
  colorHex: string;
  size: string;
};

function createOrnament() {
  const defaultState: Ornament = {
    type: "bell",
    colorHex: "#000000",
    size: "xl",
  };
  const self = writable(defaultState);

  return {
    subscribe: self.subscribe,
    get: () => get(self),
    setBell: () => {
      self.update(
        (value) =>
          (value = { type: "bell", colorHex: value.colorHex, size: value.size })
      );
    },
    setStar: () => {
      self.update(
        (value) =>
          (value = { type: "star", colorHex: value.colorHex, size: value.size })
      );
    },
    setColor: (colorHex: string) => {
      self.update(
        (value) =>
          (value = { type: value.type, colorHex: colorHex, size: value.size })
      );
    },
  };
}

export const ornament = createOrnament();
