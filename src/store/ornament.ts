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
    set: (updateValues: {
      type?: keyof typeof ornamentType;
      colorHex?: string;
      size?: string;
    }) => {
      self.update((value) => (value = { ...value, ...updateValues }));
    },
  };
}

export const ornament = createOrnament();
