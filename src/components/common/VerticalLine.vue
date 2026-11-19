<template>
  <component
      is="div"
      class="vertical-line"
      :class="computedVariant"
  />
</template>

<style scoped>
  .vertical-line {
    width: 3px;
    min-height: 80px;
    height: 100%;

    flex-shrink: 0;

    border-radius: 0 var(--radius-md) var(--radius-md) 0;
  }

  /* VARIANTS */
  /* 1. Primary */
  .vertical-line.primary {
    background: var(--color-text-primary);
  }

  /* 2. Translucent */
  .vertical-line.translucent {
    background: var(--color-text-translucent);
  }

  /* 3. Reverse */
  .vertical-line.reverse {
    background: var(--color-text-reverse);
  }
</style>

<script setup lang="ts">
  import { computed } from "vue"
  import type { VerticalLine } from "../../types/components/common"
  import { VERTICAL_LINE_VARIANTS } from "../../constants/components/common"

  interface Props {
    variant?: VerticalLine
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: VERTICAL_LINE_VARIANTS.PRIMARY
  })

  const computedVariant = computed(() => {
    return Object.values(VERTICAL_LINE_VARIANTS).includes(props.variant)
        ? props.variant
        : VERTICAL_LINE_VARIANTS.PRIMARY
  })
</script>