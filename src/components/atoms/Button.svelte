<script lang="ts">
  export let color: "green" | "yellow";
  export let isActive: boolean;

  const green = color === "green";
  const yellow = color === "yellow";
</script>

<style lang="postcss">
  .green {
    @apply bg-green-500;
  }
  .yellow {
    @apply bg-yellow-500;
  }
</style>

<button
  class="text-xl px-4 py-1 m-2 rounded border border-gray-300"
  on:click
  class:green={green && isActive}
  class:yellow={yellow && isActive}>
  <slot />
</button>
