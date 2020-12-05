<script lang="ts">
  import { fade } from "svelte/transition";
  import AppButton from "../atoms/AppButton.svelte";
  import AppColorPicker from "../atoms/AppColorPicker.svelte";
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppCanvas from "../atoms/AppCanvas.svelte";
  import Footer from "../common/Footer.svelte";
  import Header from "../common/Header.svelte";
  import type { TreeOrnament } from "../../store/treeOrnaments";

  // イベント処理
  export let handleClickBell: () => void;
  export let handleClickStar: () => void;
  export let handleClickCat: () => void;
  export let handleChangeColor: (e: any) => void;
  export let handleClickRollback: () => void;
  export let handleClickCanvas: (e: MouseEvent) => void;

  // 全ての飾り付け
  export let allOrnaments: TreeOrnament[];

  // ボタンの非活性
  export let isActiveBell: boolean;
  export let isActiveStar: boolean;
  export let isActiveCat: boolean;

  export let colorPickerColor: string;
</script>

<Header />

<div class="mx-1 my-2">
  <AppButton on:click={handleClickBell} color="red" isActive={isActiveBell}>
    <AppIcon id="bell" />
  </AppButton>
  <AppButton on:click={handleClickStar} color="yellow" isActive={isActiveStar}>
    <AppIcon id="star" />
  </AppButton>
  <AppButton on:click={handleClickCat} color="white" isActive={isActiveCat}>
    <AppIcon id="cat" />
  </AppButton>
  <AppColorPicker on:change={handleChangeColor} value={colorPickerColor} />
  <AppButton on:click={handleClickRollback} classes="float-right mr-2">
    戻す
  </AppButton>
</div>
<div class="h-full mx-2 mb-1 bg-indigo-900 rounded-lg">
  <AppCanvas on:click={(event) => handleClickCanvas(event)}>
    {#each allOrnaments as ornament (ornament.id)}
      <span
        transition:fade
        class="absolute"
        style="left: {ornament.x}px; top: {ornament.y}px;">
        <AppIcon
          id={ornament.ornament.type}
          colorHex={ornament.ornament.colorHex}
          size={ornament.ornament.size} />
      </span>
    {/each}
  </AppCanvas>
</div>

<Footer />
