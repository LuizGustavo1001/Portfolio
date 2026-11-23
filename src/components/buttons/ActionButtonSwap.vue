<template>
  <component
      :is="tag"
      :href="props.href || undefined"
      :target="!isButton
          ? target
          : undefined"
      :rel="target === '__blank'
          ? 'external'
          : 'internal'"
      :disabled="isButton
          ? props.disabled
          : undefined"
      class="action-btn-swap"
      :class="[computedVariant]"
      :style="[computedFontSize]"
  >
    <span class="btn-content">
      <!-- Left Icon -->
      <slot name="leftIcon">
        <Icon v-if="leftIcon" :icon="leftIcon" class="icon-left" />
      </slot>

      <!-- Text -->
      <span class="btn-text medium-weight">
        <slot name="label"> {{ label }} </slot>
      </span>

      <!-- Right Icon -->
      <slot name="rightIcon">
        <Icon v-if="rightIcon" :icon="rightIcon" class="icon-right" />
      </slot>
    </span>
  </component>
</template>

<style scoped>
 .action-btn-swap {
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: var(--spacing-md) var(--spacing-xl);

    border: none;
    font-weight: bolder;
    border-radius: var(--radius-sm);

    cursor: pointer;
    overflow: hidden;
  }

  .btn-content {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;

    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  .icon-right {
    margin-right: -1.8em;
    opacity: 0;
    filter: blur(5px);
  }

  /* MEDIA QUERIES */
  @media(min-width: 600px) { /* animations not available for mobile */
    .action-btn-swap:hover .btn-content,
    .action-btn-swap:active .btn-content {
      transform: translateX(-1.8em);
    }

    .action-btn-swap:hover .icon-right,
    .action-btn-swap:active .icon-right {
      opacity: 1;
      filter: blur(0);
    }

    .action-btn-swap:hover .icon-left,
    .action-btn-swap:active .icon-left {
      opacity: 0;
      filter: blur(5px);
    }
  }

  /* VARIANTS */
  /* 1. Reverse */
  .action-btn-swap.reverse {
    background: var(--color-bg-reverse);
    color: var(--color-text-reverse);
  }

  /* 2. Primary */
  .action-btn-swap.primary {
    background: var(--color-bg-subtle);
    color: var(--color-text-primary);
  }

  /* 3. Disabled */
  .action-btn-swap:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<script setup lang="ts">
  import { computed } from 'vue'

  import type { ActionBtnType } from "../../types/components/buttons"
  import { icons } from "../../assets/icons/icons"
  import { ACTION_BUTTON_VARIANTS } from "../../constants/components/buttons"

  import Icon from "../common/Icon.vue"

  // INTERFACES
  interface ActionButtonProps {
    leftIcon?: string | null
    rightIcon?: string | null
    label: string
    disabled?: boolean
    variant?: ActionBtnType
    tag?: string
    href?: string
    target?: string
    fontSize?: string
  }

  // PROPS WITH DEFAULTS
  const props = withDefaults(defineProps<ActionButtonProps>(), {
    leftIcon: null,
    rightIcon: icons['arrow-right'],
    disabled: false,
    variant: "primary",
    tag: "button",
    href: "#",
    target: "external",
    fontSize: "normal"
  })

  // COMPUTED PROPERTIES
  const computedVariant = computed(() => {
    return Object.values(ACTION_BUTTON_VARIANTS).includes(props.variant)
        ? props.variant
        : ACTION_BUTTON_VARIANTS.PRIMARY
  })

  const computedFontSize = computed(() => {
    return props.fontSize === "normal"
        ? { fontSize: `var(--font-button-lg)` }
        : { fontSize: `var(--font-button-sm)` };
  })

  const isButton = computed<boolean>(() => props.tag === 'button')
</script>