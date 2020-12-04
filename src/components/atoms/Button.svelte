<script lang="ts">
  export let color: "green" | "yellow" | "red";
  export let isActive: boolean;

  const green = color === "green";
  const yellow = color === "yellow";
  const red = color === "red";
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
</style>

<button
  class="text-xl px-4 py-1 m-2 rounded border border-gray-300"
  on:click
  class:green={green && isActive}
  class:yellow={yellow && isActive}
  class:red={red && isActive}>
  <slot />
</button>
