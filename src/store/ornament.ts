import { writable, get } from "svelte/store";

export const ornamentType = {
  tree: "tree",
  bell: "bell",
};

function createOrnament() {
  const defaultState = ornamentType.tree;
  const self = writable(defaultState);

  return {
    subscribe: self.subscribe,
    get: () => get(self) as keyof typeof ornamentType,
    setTree: () => {
      self.set(ornamentType.tree);
    },
    setBell: () => {
      self.set(ornamentType.bell);
    },
  };
}

export const ornament = createOrnament();
