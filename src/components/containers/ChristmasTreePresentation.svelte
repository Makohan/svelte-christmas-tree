<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import Canvas from "../common/Canvas.svelte";

  export let handleClickTree: () => void;
  export let handleClickBell: () => void;
  export let handleClickCanvas: (MouseEvent) => void;
</script>

<div class="m-2">
  <Button on:click={handleClickTree} color="green">tree</Button>
  <Button on:click={handleClickBell} color="yellow">bell</Button>
</div>
<div class="w-full h-full rounded bg-indigo-800">
  <Canvas on:click={(event) => handleClickCanvas(event)} />
</div>
