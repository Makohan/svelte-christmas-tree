<script lang="ts">
  import AppButton from "../atoms/AppButton.svelte";
  import AppColorPicker from "../atoms/AppColorPicker.svelte";
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppCanvas from "../atoms/AppCanvas.svelte";
  import Footer from "../common/Footer.svelte";
  import Header from "../common/Header.svelte";

  export let handleClickBell: () => void;
  export let handleClickStar: () => void;
  export let handleClickCat: () => void;
  export let handleChangeColor: (e: any) => void;
  export let handleClickRollback: () => void;
  export let handleClickCanvas: (e: MouseEvent) => void;

  export let isActiveBell: boolean;
  export let isActiveStar: boolean;
  export let isActiveCat: boolean;

  export let defaultColor: string;
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
  <AppColorPicker on:change={handleChangeColor} value={defaultColor} />
  <AppButton on:click={handleClickRollback} classes="float-right mr-2">
    戻す
  </AppButton>
</div>
<div class="h-full rounded-lg bg-indigo-900 mx-2 mb-1">
  <AppCanvas on:click={(event) => handleClickCanvas(event)}>
    <slot />
  </AppCanvas>
</div>

<Footer />
