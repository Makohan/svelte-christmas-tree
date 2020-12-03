<script lang="ts">
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";
  import { ornament } from "../../store/ornament";
  import { treeOrnaments } from "../../store/tree";
  import type { TreeOrnament } from "../../store/tree";
  import Ornament from "../atoms/Ornament.svelte";

  function handleClickTree() {
    ornament.setTree();
  }
  function handleClickBell() {
    ornament.setBell();
  }
  function handleClickCanvas(event: MouseEvent) {
    const x = event.pageX; // 水平の位置座標
    const y = event.pageY; // 垂直の位置座標
    treeOrnaments.push(x, y, ornament.get());
  }

  let isActiveTree = false;
  let isActiveBell = false;

  ornament.subscribe((currentOrnament) => {
    isActiveTree = currentOrnament === "tree";
    isActiveBell = currentOrnament === "bell";
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
  {handleClickCanvas}
  {isActiveTree}
  {isActiveBell}>
  {#each allOrnaments as treeOrnament}
    <div
      class="absolute"
      style="left: {treeOrnament.x}px; top: {treeOrnament.y}px;">
      <Ornament id={treeOrnament.ornament} color={treeOrnament.color} />
    </div>
  {/each}
</ChristmasTreePresentation>
