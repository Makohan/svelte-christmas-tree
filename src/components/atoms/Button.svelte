<script lang="ts">
  export let color;
  export let isActive: boolean;

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
  class="text-xl px-4 py-1 m-2 rounded border border-gray-300"
  on:click
  class:green={green && isActive}
  class:yellow={yellow && isActive}
  class:white={white && isActive}
  class:red={red && isActive}>
  <slot />
</button>
