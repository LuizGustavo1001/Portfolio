<template>
  <component
    :is="tag"
    :href="link || undefined"
    :target="!isButton ? target : undefined"
    :rel="target === '__blank' ? 'external' : 'internal'"
    :disabled="isButton ? props.disabled : undefined"
    :aria-disabled="isButton ? props.disabled : undefined"
    class="action-btn flex gap-05 align-center"
    :class="reverseClr ? 'reverse' : ''"
  >
    <!-- Left Icon -->
    <div class="flex-grow-1 flex gap-05 align-center">
      <slot name="leftIcon">
        <Icon v-if="leftIcon" :icon="leftIcon" />
      </slot>

      <!-- Text -->
      <span class="btn-text medium-weight">
          <slot name="label"> {{ label }} </slot>
      </span>
    </div>

    <!-- Right Icon -->
    <slot name="rightIcon">
      <Icon v-if="rightIcon" :icon="rightIcon" class="text-muted" />
    </slot>
  </component>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  .action-btn {
    padding: 0.8em;

    border: none;
    background: transparent;

    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease;
  }
  .action-btn:hover {
    background: var(--color-bg-primary-hover);
  }
</style>

<script setup>
  import { computed } from "vue"
  import Icon from "/src/components/common/Icon.vue"

  const props = defineProps({
    leftIcon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '',
      required: 'true'
    },
    rightIcon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    reverseClr: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'a'
    },
    link: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: 'external'
    }
  })

  const isButton = computed(() => props.tag === 'button')
</script>