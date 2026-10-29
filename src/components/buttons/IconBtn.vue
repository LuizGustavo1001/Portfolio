<template>
  <component
    :is="tag"
    :href="link || undefined"
    :target="!isButton ? target : undefined"
    :rel="target === '__blank' ? 'external' : 'internal'"
    class="icon-wrapper"
    :class="{ reverse: reverseClr }"
    v-html="icon"
  >
  </component>
</template>

<style scoped>
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    padding: 0.5em;
    border-radius: 8px;

    color: var(--color-text-primary);

    border: none;
    background: transparent;

    cursor: pointer;
    width: fit-content;
    transition: 0.2s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .icon-wrapper:hover {
    background: var(--color-bg-primary-hover);
    transform: scale(1.1);
  }

  .icon-wrapper.reverse {
    background: var(--color-bg-reverse);
    color: var(--color-text-reverse);
  }
  .icon-wrapper.reverse:hover {
    background: var(--color-bg-reverse-hover);
  }

  .icon-wrapper :deep(svg) {
    width: v-bind(size);
    height: v-bind(size);
  }
</style>

<script setup>
  import { computed } from "vue"

  const props = defineProps({
    tag: {
      type: String,
      default: 'a'
    },
    icon: {
      type: String,
      required: 'true'
    },
    link: {
      type: String,
      default: '#'
    },
    reverseClr: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: 'external'
    },
    size: {
      type: [String, Number],
      default: '20px'
    }
  })

  const isButton = computed(() => props.tag === 'button')
</script>