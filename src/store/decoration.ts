import { writable } from "svelte/store";

const Decoration = {
  tree: "tree",
  bell: "bell",
};

const defaultState = Decoration.tree;
const { set } = writable(defaultState);

const setTree = () => {
  set(Decoration.tree);
};
const setBell = () => {
  set(Decoration.bell);
};

export default { setTree, setBell };
