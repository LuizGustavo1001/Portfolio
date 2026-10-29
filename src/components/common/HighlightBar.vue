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

<script setup>
  import { computed } from "vue"

  const props = defineProps({
    isActive: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary'
    }
  })

  const VARIANTS = ['primary', 'translucent', 'reverse']

  const computedVariant = computed(() => {
    if(!VARIANTS.includes(props.variant)){
      return 'primary'
    }

    return props.variant
  })
</script>