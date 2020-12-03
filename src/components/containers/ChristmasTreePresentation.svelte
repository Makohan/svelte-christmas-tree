<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import Canvas from "../common/Canvas.svelte";

  export let handleClickTree: () => void;
  export let handleClickBell: () => void;
  export let handleClickCanvas: (MouseEvent) => void;

  export let isActiveTree;
  export let isActiveBell;
</script>

<div class="m-2">
  <Button on:click={handleClickTree} color="green" isActive={isActiveTree}>
    tree
  </Button>
  <Button on:click={handleClickBell} color="yellow" isActive={isActiveBell}>
    bell
  </Button>
</div>
<div class="w-full h-full rounded bg-gray-200">
  <Canvas on:click={(event) => handleClickCanvas(event)}>
    <slot />
  </Canvas>
</div>
