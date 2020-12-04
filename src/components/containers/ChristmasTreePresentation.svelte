<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import ColorPicker from "../atoms/ColorPicker.svelte";
  import Ornament from "../atoms/Icon.svelte";
  import Icon from "../atoms/Icon.svelte";
  import Canvas from "../common/Canvas.svelte";

  export let handleClickBell: () => void;
  export let handleClickStar: () => void;
  export let handleChangeColor: (e: any) => void;
  export let handleClickCanvas: (e: MouseEvent) => void;

  export let isActiveBell: boolean;
  export let isActiveStar: boolean;

  export let defaultColor: string;
</script>

<div>
  <Icon id="cat" />
  <span>クリックしてツリーを飾るニャ〜</span>
</div>
<div class="m-2">
  <Button on:click={handleClickBell} color="red" isActive={isActiveBell}>
    <Ornament id="bell" />
  </Button>
  <Button on:click={handleClickStar} color="yellow" isActive={isActiveStar}>
    <Ornament id="star" />
  </Button>
  <ColorPicker on:change={handleChangeColor} value={defaultColor} />
</div>
<div class="w-full h-full rounded-lg bg-indigo-900">
  <Canvas on:click={(event) => handleClickCanvas(event)}>
    <slot />
  </Canvas>
</div>
