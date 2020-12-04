<script lang="ts">
  export let color = "";
  export let isActive: boolean = false;
  export let classes = "";

  let classValue = `text-xl px-4 py-1 rounded-lg border ${classes}`;

  const green = color === "green";
  const yellow = color === "yellow";
  const red = color === "red";
  const white = color === "white";
</script>

<style type="text/postcss">
  .green {
    @apply bg-green-500;
  }
  .yellow {
    @apply bg-yellow-500;
  }
  .red {
    @apply bg-red-500;
  }
  .white {
    @apply bg-gray-200;
  }
</style>

<button
  class={classValue}
  on:click
  class:green={green && isActive}
  class:yellow={yellow && isActive}
  class:white={white && isActive}
  class:red={red && isActive}>
  <slot />
</button>
