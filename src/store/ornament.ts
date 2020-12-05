import { writable, get } from "svelte/store";

export const ornamentType = {
  bell: "bell",
  star: "star",
  tree: "tree",
  cat: "cat",
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
    setOrnament: (type: keyof typeof ornamentType, colorHex: stri) => {
      self.update((value) => (value = { type, colorHex, size: value.size }));
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
