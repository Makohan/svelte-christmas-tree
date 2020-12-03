<script>
  import Button from "../atoms/Button.svelte";
  import Canvas from "../common/Canvas.svelte";

  export let handleClickTree;
  export let handleClickBell;
  export let handleClickCanvas;
</script>

<div class="m-2">
  <Button on:click={handleClickTree} color="green">tree</Button>
  <Button on:click={handleClickBell} color="yellow">bell</Button>
</div>
<div class="w-full h-full rounded bg-indigo-800">
  <Canvas on:click={handleClickCanvas} />
</div>
