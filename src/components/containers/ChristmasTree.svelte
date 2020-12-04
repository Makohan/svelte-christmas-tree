<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";
  import AppIcon from "../atoms/AppIcon.svelte";
  import { ornament } from "../../store/ornament";
  import type { Ornament } from "../../store/ornament";
  import { treeOrnaments } from "../../store/treeOrnaments";
  import type { TreeOrnament } from "../../store/treeOrnaments";

  const DEFAULT_TREE_COLOR = "#a2C09e";
  const DEFAULT_BELL_COLOR = "#D60068";
  const DEFAULT_STAR_COLOR = "#ECF71E";
  const DEFAULT_CAT_COLOR = "#ffffff";

  onMount(() => {
    handleClickBell();
    createMainTree();
  });

  function createMainTree() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const ornament: Ornament = {
      type: "tree",
      colorHex: DEFAULT_TREE_COLOR,
      size: "25xl",
    };

    treeOrnaments.push(centerX - 140, centerY - 150, ornament);
  }

  function handleClickBell() {
    ornament.setIcon("bell");
    ornament.setColor(DEFAULT_BELL_COLOR);
  }
  function handleClickStar() {
    ornament.setIcon("star");
    ornament.setColor(DEFAULT_STAR_COLOR);
  }
  function handleClickCat() {
    ornament.setIcon("cat");
    ornament.setColor(DEFAULT_CAT_COLOR);
  }
  function handleChangeColor(event: any) {
    ornament.setColor(event.target.value);
  }
  function handleClickCanvas(event: MouseEvent) {
    treeOrnaments.push(event.pageX, event.pageY, ornament.get());
  }
  function handleClickRollback() {
    treeOrnaments.rollback();
  }

  let isActiveStar = false;
  let isActiveBell = false;
  let isActiveCat = false;
  let defaultColor: string;

  ornament.subscribe((currentOrnament) => {
    isActiveStar = currentOrnament.type === "star";
    isActiveBell = currentOrnament.type === "bell";
    isActiveCat = currentOrnament.type === "cat";
    defaultColor = currentOrnament.colorHex;
  });

  let allOrnaments: TreeOrnament[] = [];
  treeOrnaments.subscribe((currentTreeOrnaments) => {
    allOrnaments = currentTreeOrnaments;
  });
</script>

<ChristmasTreePresentation
  {handleClickBell}
  {handleClickStar}
  {handleClickCat}
  {handleChangeColor}
  {handleClickRollback}
  {handleClickCanvas}
  {isActiveBell}
  {isActiveStar}
  {isActiveCat}
  {defaultColor}>
  {#each allOrnaments as treeOrnament (treeOrnament.id)}
    <span
      transition:fade
      class="absolute"
      style="left: {treeOrnament.x}px; top: {treeOrnament.y}px;">
      <AppIcon
        id={treeOrnament.ornament.type}
        colorHex={treeOrnament.ornament.colorHex}
        size={treeOrnament.ornament.size} />
    </span>
  {/each}
</ChristmasTreePresentation>
