<template>
  <!-- Main Nav Bar -->
  <nav class="flex gap-1">
    <button v-for="item in navbar.items"
            :key="item.id"
            class="medium-weight flex align-center text-muted"
            :class="[item.id === selectedItem ? 'active' : '']"
            :data-id="item.id"
            style="gap: 0.2em"
            @click="toggleSelected(item.id)"
    >
      <Icon
          :icon="item.id === selectedItem
              ? item.iconActive
              : item.icon"
      />
      <span class="label">{{ $t(`navbar.items.${item.id}.label`) }}</span>
    </button>
  </nav>
</template>

<style scoped>
  nav {
    position: fixed;
    bottom: 1.5em;
    left: 50%;
    transform: translateX(-50%);

    width: max-content;
    padding: 0.5em;

    background: var(--color-bg-primary);
    box-shadow: 0 0 5px 3px var(--shadow-lighter);

    border-radius: var(--radius-md);

    z-index: 3;
    animation: fade-in-upper 1s ease;
  }

  button {
    text-decoration: none;
    border: none;
    background: none;

    padding: 0.8em;

    border-radius: 8px;
    font-size: 0.8em;

    transition: 0.2s ease;
    cursor: pointer;
  }

  button.active,
  button:hover,
  button:active {
    background: var(--color-bg-primary-hover);
  }

  button:hover,
  button:active {
    transform: scale(1.05);
  }

  @media(max-width: 768px) {
    nav button .label{
      display: none;
    }
  }

  @keyframes fade-in-upper {
    from{
      opacity: 0;
      transform: translate(-50%, 10dvh);
    }
    to{
      opacity: 1;
      transform:  translate(-50%, 0);
    }
  }

  /* DARK MODE */
  .dark nav {
    box-shadow: 0 0 5px 3px var(--shadow);
  }
</style>

<script setup>
  import { ref, onMounted } from "vue"
  import { gsap } from "gsap"
  import { ScrollToPlugin } from "gsap/ScrollToPlugin"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  import { navbar } from "/src/locales/portfolioConfig.js"

  import Icon from "/src/components/common/Icon.vue"

  const selectedItem = ref(navbar.items[0].id)

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  let isAnimating = false

  const toggleSelected = (newValue) => {
    const element = document.getElementById(newValue)

    if(element){
      selectedItem.value = newValue
      isAnimating = true

      gsap.to(window, {
        duration: 0.8,
        ease: "expo.inOut",
        scrollTo: {
          y: element,
          autoKill: true,
          offsetY: 100
        },
        onComplete: () => {
          isAnimating = false
        },
        onInterrupt: () => {
          isAnimating = false
        }
      })
    }
  }

  let context

  onMounted(() => {
    toggleSelected(selectedItem.value)

    context = gsap.context(() => {
      const mainSections = gsap.utils.toArray('.section-box')

      mainSections.forEach(section => {
        const containerInside = section.querySelector(".container")
        const target = containerInside || section

        gsap.fromTo(
            target, {},
            {
              scrollTrigger: {
                trigger: section,
                start: "start 50%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
                onEnter: () => toggleSelected(section.id),
                onEnterBack: () => toggleSelected(section.id),
              }
            }
        )
      })
    })
  })
</script>