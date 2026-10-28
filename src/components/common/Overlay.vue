<template>
  <div
      id="overlay"
      :class="{ active: isOverlayActive }"
  />
</template>

<style scoped>
  #overlay {
    display: none;
    position: fixed;

    height: 100dvh;
    width: 100dvw;

    background: var(--shadow);

    backdrop-filter: blur(10px);
    z-index: 4;
  }
  #overlay.active {
    display: block;
    animation: fade-in 0.3s ease-in-out
  }

  @keyframes fade-in {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
</style>

<script setup>
  import { useOverlay } from "../../composables/useOverlay.js"
  import { computed } from "vue"

  const overlay = useOverlay()
  const isOverlayActive = computed(() => overlay.isActive.value)
</script>