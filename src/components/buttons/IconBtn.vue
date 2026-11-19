<template>
  <component
    :is="tag"
    :href="props.href || undefined"
    :target="!isButton ? target : undefined"
    :rel="target === '__blank' ? 'external' : 'internal'"
    class="icon-button"
    :class="[ computedVariant ]"
  >
    <Icon :icon="props.icon" :size="props.size" />
  </component>
</template>

<style scoped>
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: fit-content;
    padding: var(--spacing-xs);
    border-radius: var(--radius-md);

    border: none;
    cursor: pointer;
    transition: var(--transition-fast);
  }
  .icon-button:hover {
    transform: scale(1.1);
  }

  /* VARIANTS */
  /* 1. Transparent */
  .icon-button.transparent {
    color: var(--color-text-primary);
    background: transparent;
  }
  .icon-button.transparent:hover {
    background: var(--color-bg-primary-hover);
  }

  /* 2. Reverse */
  .icon-button.reverse {
    background: var(--color-bg-reverse);
    color: var(--color-text-reverse);
  }
  .icon-button.reverse:hover {
    background: var(--color-bg-reverse-hover);
  }
  /* 3. Subtle */
  .icon-button.subtle {
    background: var(--color-bg-subtle);
    color: var(--color-text-primary);
  }

  /* 4. Primary */
  .icon-button.primary {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
  }
  .icon-button.primary:hover {
    background: var(--color-bg-primary-hover);
  }
</style>

<script setup lang="ts">
  import { computed } from "vue"

  import type { ButtonTag, IconBtnType } from "../../types/components/buttons"
  import type { ComponentSize }  from "../../types/components/common"

  import { ICON_BTN_VARIANTS } from "../../constants/components/buttons"
  import Icon from "../common/Icon.vue";

  // INTERFACES
  interface IconBtnProps {
    tag?: ButtonTag
    icon: string
    href?: string
    variant?: IconBtnType
    target?: string
    size?: ComponentSize
  }

  // PROPS WITH DEFAULTS
  const props = withDefaults(defineProps<IconBtnProps>(), {
    tag: "a",
    href: "#",
    variant: "transparent",
    target: "external",
    size: "20px"
  })

  // COMPUTED PROPERTIES
  const computedVariant = computed(() => {
    return Object.values(ICON_BTN_VARIANTS).includes(props.variant)
        ? props.variant
        : ICON_BTN_VARIANTS.TRANSPARENT
  })

  const isButton = computed(() => props.tag === 'button')
</script>