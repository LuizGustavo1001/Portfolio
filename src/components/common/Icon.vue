<template>
  <i
      class="icon-wrapper"
      :style="[computedPadding]"
      v-html="props.icon"
  />
</template>

<style scoped>
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: fit-content;

    transition: var(--transition-normal);
  }

  .icon-wrapper :deep(svg) {
    display: block;

    width: v-bind(size);
    height: v-bind(size);

    transition: var(--transition-normal);
  }
</style>

<script setup lang="ts">
  import { computed } from "vue"
  import type { PaddingType } from "../../types/styles.ts"
  import { icons } from "../../assets/icons/icons"
  import { useUtils } from "../../composables/useUtils.ts"
  import type { ComponentSize } from "../../types/components/common.ts"

  const utils = useUtils()

  interface IconProps {
    icon: string
    padding?: PaddingType
    size?: ComponentSize
  }

  const props = withDefaults(defineProps<IconProps>(), {
    padding: undefined,
    size: "20px",
    icon: icons.logo
  })

  const computedPadding = computed(() =>
      props.padding
          ? utils.getPaddingStyle(props.padding)
          : {}
  )
</script>