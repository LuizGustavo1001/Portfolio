
<template>
  <transition
      enter-active-class="overlay-enter-active"
      leave-active-class="overlay-leave-active"
      enter-from-class="overlay-enter-from"
      leave-to-class="overlay-leave-to"
  >
    <div
        v-if="isOverlayActive"
        id="overlay"
    />
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useOverlay } from "../../composables/useOverlay"

const overlay = useOverlay()

const isOverlayActive = computed<boolean>(() => overlay.isActive.value)
</script>

<style scoped>
#overlay {
  position: fixed;
  inset: 0;

  background: var(--transparent-gradient);
  backdrop-filter: blur(10px);

  z-index: 4;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
</style>
