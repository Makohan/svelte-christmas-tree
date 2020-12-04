<script lang="ts">
  export let id: string;
  export let color = "";
  export let colorHex = "";
  export let size = "xl";

  let classValue = `fas fa-${id} text-${size}`;
  if (color) {
    classValue += color;
  }

  let style = "";
  if (colorHex) {
    style += `color: ${colorHex};`;
  }
</script>

<i class={classValue} {style} />
