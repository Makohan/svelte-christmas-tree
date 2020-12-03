<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import ColorPicker from "../atoms/ColorPicker.svelte";
  import Ornament from "../atoms/Ornament.svelte";
  import Canvas from "../common/Canvas.svelte";

  export let handleClickTree: () => void;
  export let handleClickBell: () => void;
  export let handleClickCanvas: (MouseEvent) => void;
  export let handleChangeColor: (MouseEvent) => void;

  export let isActiveTree: boolean;
  export let isActiveBell: boolean;

  export let defaultColor: string;
</script>

<div class="m-2">
  <Button on:click={handleClickTree} color="green" isActive={isActiveTree}>
    <Ornament id="tree" />
  </Button>
  <Button on:click={handleClickBell} color="yellow" isActive={isActiveBell}>
    <Ornament id="bell" />
  </Button>
  <ColorPicker on:change={handleChangeColor} value={defaultColor} />
</div>
<div class="w-full h-full rounded bg-gray-200">
  <Canvas on:click={(event) => handleClickCanvas(event)}>
    <slot />
  </Canvas>
</div>
