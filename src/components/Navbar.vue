<template>
  <!-- Main Nav Bar -->
  <nav class="main-nav-bar flex gap-1">
    <a
        v-for="item in mainNavigation"
        :key="item.id"
        class="nav-item medium-weight flex align-center text-muted gap-03"
        :class="{ active: item.id === selectedItem }"
        :href="item.href"
    >
      <Icon
          :icon="item.id === selectedItem
              ? item.iconActive
              : item.icon"
      />
      <span class="label">{{ utils.getTranslate(`navbar.items.${item.id}.label`) }}</span>
    </a>
  </nav>
</template>

<style scoped>
 .main-nav-bar {
    position: fixed;
    bottom: 1.5em;
    left: 50%;
    transform: translateX(-50%);

    width: max-content;
    padding: var(--spacing-xs);

    background: var(--color-bg-primary);
    box-shadow: var(--shadow-sm);

    border-radius: var(--radius-md);

    z-index: 3;
    animation: fade-in-upper 1s ease;
  }

  .nav-item {
    border: none;
    background: none;

    padding: var(--spacing-sm);

    border-radius: var(--radius-sm);
    font-size: var(--font-button-sm);

    transition: var(--transition-normal);
    cursor: pointer;
  }

  .nav-item.active,
  .nav-item:focus {
    background: var(--color-bg-subtle);
  }

  .nav-item:hover,
  .nav-item:focus {
    background: var(--color-bg-primary-hover);
  }

  .nav-item:hover,
  .nav-item:active {
    transform: scale(1.05);
  }

  @media(max-width: 768px) {
    .nav-item .label {
      display: none;
    }
  }

  @keyframes fade-in-upper {
    from {
      opacity: 0;
      transform: translate(-50%, 10dvh);
    }
    to {
      opacity: 1;
      transform:  translate(-50%, 0);
    }
  }

  /* DARK MODE */
  .dark .main-nav-bar {
    box-shadow: var(--shadow-md);
  }
</style>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue"
  import { gsap } from "gsap"
  import { ScrollToPlugin } from "gsap/ScrollToPlugin"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  import { mainNavigation } from "../locales/portfolioConfig"

  import Icon from "../components/common/Icon.vue"
  import { useUtils } from "../composables/useUtils.ts"

  // COMPOSABLES
  const utils = useUtils()

  // STATE
  const selectedItem = ref(mainNavigation[0].id)

  // GSAP
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  let context: gsap.Context | undefined

  // NAVIGATION
  const selectNavigationItem = (id: string): void => {
    selectedItem.value = id
  }

  onMounted(() => {
    context = gsap.context(() => {
      const mainSections = gsap.utils.toArray<HTMLElement>(".section-box")

      mainSections.forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 60%",

          onEnter: () => selectNavigationItem(section.id),
          onEnterBack: () => selectNavigationItem(section.id)
        })
      })
    })
  })

  onUnmounted(() => {
    context?.revert()
  })
</script>