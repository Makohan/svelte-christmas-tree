<script lang="ts">
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";
  import { ornament } from "../../store/ornament";
  import { treeOrnaments } from "../../store/treeOrnaments";
  import type { TreeOrnament } from "../../store/treeOrnaments";
  import Ornament from "../atoms/Ornament.svelte";

  const DEFAULT_TREE_COLOR = "#a2C09e";
  const DEFAULT_BELL_COLOR = "#ECF71E";

  function handleClickTree() {
    ornament.setTree();
    ornament.setColor(DEFAULT_TREE_COLOR);
  }
  function handleClickBell() {
    ornament.setBell();
    ornament.setColor(DEFAULT_BELL_COLOR);
  }
  function handleChangeColor(event) {
    ornament.setColor(event.target.value);
  }
  function handleClickCanvas(event: MouseEvent) {
    treeOrnaments.push(event.pageX, event.pageY, ornament.get());
  }

  let isActiveTree = false;
  let isActiveBell = false;
  let defaultColor: string;

  ornament.subscribe((currentOrnament) => {
    isActiveTree = currentOrnament.type === "tree";
    isActiveBell = currentOrnament.type === "bell";
    defaultColor = currentOrnament.colorHex;
  });

  let allOrnaments: TreeOrnament[] = [];
  treeOrnaments.subscribe((currentTreeOrnaments) => {
    allOrnaments = currentTreeOrnaments;
  });
</script>

<Ornament />
<ChristmasTreePresentation
  {handleClickTree}
  {handleClickBell}
  {handleChangeColor}
  {handleClickCanvas}
  {isActiveTree}
  {isActiveBell}
  {defaultColor}>
  {#each allOrnaments as treeOrnament}
    <div
      class="absolute"
      style="left: {treeOrnament.x}px; top: {treeOrnament.y}px;">
      <Ornament
        id={treeOrnament.ornament.type}
        colorHex={treeOrnament.ornament.colorHex} />
    </div>
  {/each}
</ChristmasTreePresentation>
