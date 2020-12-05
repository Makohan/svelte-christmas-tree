<script lang="ts">
  import { onMount } from "svelte";
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";
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
    ornament.setOrnament("bell", DEFAULT_BELL_COLOR);
  }
  function handleClickStar() {
    ornament.setOrnament("star", DEFAULT_STAR_COLOR);
  }
  function handleClickCat() {
    ornament.setOrnament("cat", DEFAULT_CAT_COLOR);
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
  let colorPickerColor: string;

  ornament.subscribe((currentOrnament) => {
    isActiveStar = currentOrnament.type === "star";
    isActiveBell = currentOrnament.type === "bell";
    isActiveCat = currentOrnament.type === "cat";
    colorPickerColor = currentOrnament.colorHex;
  });

  let allOrnaments: TreeOrnament[] = [];
  treeOrnaments.subscribe((currentTreeOrnaments) => {
    allOrnaments = currentTreeOrnaments;
  });
</script>

<!--  -->
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
  {colorPickerColor}
  {allOrnaments} />
