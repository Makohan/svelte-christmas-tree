<script lang="ts">
  import { onMount } from "svelte";
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";
  import Icon from "../atoms/Icon.svelte";
  import { ornament } from "../../store/ornament";
  import type { Ornament } from "../../store/ornament";
  import { treeOrnaments } from "../../store/treeOrnaments";
  import type { TreeOrnament } from "../../store/treeOrnaments";

  const DEFAULT_TREE_COLOR = "#a2C09e";
  const DEFAULT_BELL_COLOR = "#D60068";
  const DEFAULT_STAR_COLOR = "#ECF71E";

  onMount(() => {
    handleClickBell();
    createMainTree();
  });

  function createMainTree() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerWidth / 2;
    const ornament: Ornament = {
      type: "tree",
      colorHex: DEFAULT_TREE_COLOR,
      size: "20xl",
    };

    treeOrnaments.push(centerX - 110, centerY + 40, ornament);
  }

  function handleClickBell() {
    ornament.setBell();
    ornament.setColor(DEFAULT_BELL_COLOR);
  }
  function handleClickStar() {
    ornament.setStar();
    ornament.setColor(DEFAULT_STAR_COLOR);
  }
  function handleChangeColor(event: any) {
    ornament.setColor(event.target.value);
  }
  function handleClickCanvas(event: MouseEvent) {
    treeOrnaments.push(event.pageX, event.pageY, ornament.get());
  }

  let isActiveStar = false;
  let isActiveBell = false;
  let defaultColor: string;

  ornament.subscribe((currentOrnament) => {
    isActiveStar = currentOrnament.type === "star";
    isActiveBell = currentOrnament.type === "bell";
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
  {handleChangeColor}
  {handleClickCanvas}
  {isActiveBell}
  {isActiveStar}
  {defaultColor}>
  {#each allOrnaments as treeOrnament (treeOrnament.id)}
    <span
      class="absolute"
      style="left: {treeOrnament.x}px; top: {treeOrnament.y}px;">
      <Icon
        id={treeOrnament.ornament.type}
        colorHex={treeOrnament.ornament.colorHex}
        size={treeOrnament.ornament.size} />
    </span>
  {/each}
</ChristmasTreePresentation>
