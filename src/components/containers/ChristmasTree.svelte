<script lang="ts">
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";
  import { ornament } from "../../store/ornament";
  import { treeOrnaments } from "../../store/treeOrnaments";
  import type { TreeOrnament } from "../../store/treeOrnaments";
  import Ornament from "../atoms/Ornament.svelte";

  function handleClickTree() {
    ornament.setTree();
  }
  function handleClickBell() {
    ornament.setBell();
  }
  function handleChangeColor(event) {
    ornament.setColor(event.target.value);
  }
  function handleClickCanvas(event: MouseEvent) {
    const x = event.pageX; // 水平の位置座標
    const y = event.pageY; // 垂直の位置座標
    treeOrnaments.push(x, y, ornament.get());
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
