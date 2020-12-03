<script lang="ts">
  import ChristmasTreePresentation from "./ChristmasTreePresentation.svelte";

  function handleClickTree() {
    console.log("handleClickTree");
  }
  function handleClickBell() {
    console.log("handleClickBell");
  }
  function handleClickCanvas(event: MouseEvent) {
    const x = event.pageX; // 水平の位置座標
    const y = event.pageY; // 垂直の位置座標

    console.log(`handleClickCanvas x=${x} y=${y}`);
  }
</script>

<ChristmasTreePresentation
  {handleClickTree}
  {handleClickBell}
  {handleClickCanvas} />
