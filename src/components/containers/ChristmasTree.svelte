<script>
  import ChristmasTree from "../presentaionals/ChristmasTree.svelte";

  function handleClickTree() {
    console.log("handleClickTree");
  }
  function handleClickBell() {
    console.log("handleClickBell");
  }
  function handleClickCanvas() {
    console.log("handleClickCanvas");
  }
</script>

<ChristmasTree
  handleClickTree={() => handleClickTree()}
  handleClickBell={() => handleClickBell()}
  handleClickCanvas={() => handleClickCanvas()} />
