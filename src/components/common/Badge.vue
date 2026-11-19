<template>
  <div
      class="badge text-center"
      :class="[computedVariant]"
      :style="[computedPadding, computedRadius]"
      style="padding-inline: var(--spacing-xs)"
  >
    {{ label }}
  </div>
</template>

<style scoped>
  .badge {
    font-size: var(--font-badge);
  }

  /* VARIANTS */

  /* 1. Reverse */
  .badge.reverse {
    background: var(--color-bg-reverse);
    color: var(--color-text-reverse);
  }

  /* 2. Primary */
  .badge.primary {
    background: var(--color-bg-primary);
  }

  /* 3. Subtle */
  .badge.sublte {
    background: var(--color-bg-subtle);
  }

  /* 4. WBorder */
  .badge.border {
    background: transparent;
    border: 1px solid var(--color-border-reverse-subtle);
  }

  /* 5. Translucent */
  .badge.transparent {
    background: var(--color-bg-translucent);
    color: var(--color-text-reverse);
  }
</style>

<script setup lang="ts">
  import type { BorderType, PaddingType } from "../../types/styles.ts"
  import type { BadgeVariant } from "../../types/components/common.ts"
  import { computed } from "vue"
  import { useUtils } from "../../composables/useUtils.ts"
  import { BADGE_VARIANTS } from "../../constants/components/common.ts"

  const utils = useUtils()

  interface BadgeProps {
    variant?: BadgeVariant
    padding?: PaddingType
    borderRadius?: BorderType
    label: string
  }

  const props = withDefaults(defineProps<BadgeProps>(), {
    variant: "reverse",
    padding: "2xs",
    borderRadius: "full"
  })

  const computedPadding = computed(() =>
      props.padding
          ? utils.getPaddingStyle(props.padding)
          : {}
  )

  const computedRadius = computed(() =>
      props.padding
          ? utils.getBorderRadius(props.borderRadius)
          : {}
  )

  const computedVariant = computed(() => {
    return Object.values(BADGE_VARIANTS).includes(props.variant)
        ? props.variant
        : BADGE_VARIANTS.REVERSE
  })
</script>