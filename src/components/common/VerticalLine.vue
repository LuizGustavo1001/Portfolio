<template>
  <component
      is="div"
      class="vertical-line"
      :class="computedVariant"
  />
</template>

<style scoped>
  .vertical-line {
    width: 4px;
    min-height: 80px;
    height: 100%;

    border-radius: 0 var(--radius-md) var(--radius-md) 0;
  }

  /* VARIANTS */
  /* 1. Primary */
  .vertical-line.primary{
    background: var(--color-text-primary);
  }

  /* 2. Translucent */
  .vertical-line.translucent {
    background: var(--color-text-translucent);
  }

  /* 3. Reverse */
  .vertical-line.reverse{
    background: var(--color-text-reverse);
  }
</style>

<script setup>
  import { computed } from "vue"

  const props = defineProps({
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