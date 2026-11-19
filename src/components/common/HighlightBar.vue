<template>
  <component
      is="div"
      class="highlight-bar"
      :class="[
          computedVariant,
          props.isActive
            ? 'active'
            : undefined
      ]"
  />
</template>

<style scoped>
  .highlight-bar {
    width: 4px;
    height: 20px;

    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    opacity: 0;
  }
  .highlight-bar.active {
    opacity: 1;
  }

  /* VARIANTS */
  /* 1. Primary */
  .highlight-bar.primary {
    background: var(--color-text-primary);
  }

  /* 2. Translucent */
  .highlight-bar.translucent {
    background: var(--color-text-translucent);
  }

  /* 3. Reverse */
  .highlight-bar.reverse {
    background: var(--color-text-reverse);
  }

</style>

<script setup lang="ts">
  import { computed } from "vue"
  import type { HighlightBar } from "../../types/components/common"
  import { HIGHLIGHT_BAR_VARIANTS } from "../../constants/components/common"

  interface Props {
    isActive?: boolean
    variant?: HighlightBar
  }

  const props = withDefaults(defineProps<Props>(), {
    isActive: false,
    variant: HIGHLIGHT_BAR_VARIANTS.PRIMARY
  })

  const computedVariant = computed(() => {
    return Object.values(HIGHLIGHT_BAR_VARIANTS).includes(props.variant)
        ? props.variant
        : HIGHLIGHT_BAR_VARIANTS.PRIMARY
  })
</script>