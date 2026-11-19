<template>
  <Overlay />
  <Navbar />

  <Sidebar
      :ref="sidebar.sidebarRef"
      :class="{ active: isSidebarOpen }"
  />

  <AppHeader
      toggleBtnRef="toggleBtnRef"
      @sidebarToggle="sidebar.toggle"
  />

  <main>
    <Home id="home" class="scroll-trigger-section" />
    <AboutMe id="aboutMe" class="scroll-trigger-section" />
    <Projects id="projects" class="scroll-trigger-section" />
    <Contact id="contact" class="scroll-trigger-section" />
  </main>
  <AppFooter/>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick, computed } from "vue"
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  import { useSidebar } from "./composables/useSidebar"
  import { useTheme } from "./composables/useTheme"
  import { useLanguage } from "./composables/useLanguage"

  import Overlay from "./components/common/Overlay.vue"
  import Sidebar from "./components/Sidebar.vue"
  import AppHeader from "./components/AppHeader.vue"
  import Home from "./components/views/Home.vue"
  import Navbar from "./components/Navbar.vue"
  import AboutMe from "./components/views/AboutMe.vue"
  import Projects from "./components/views/Projects.vue"
  import Contact from "./components/views/Contact.vue"
  import AppFooter from "./components/AppFooter.vue"

  gsap.registerPlugin(ScrollTrigger)

  // COMPOSABLES
  const sidebar = useSidebar()
  const theme = useTheme()
  const language = useLanguage()

  // COMPUTED
  const isSidebarOpen = computed<boolean>(() => sidebar.isActive.value)

  // REFERENCES
  const container = ref<HTMLElement | null>(null)

  // GSAP
  let context: gsap.Context | undefined

  function initScrollAnimations(): void {
    if(!container.value) return

    context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".scroll-trigger-section")

      sections.forEach(section => {
        const target = section.querySelector<HTMLElement>(".container") ?? section

        gsap.fromTo(
            target,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
        )
      })
    }, container.value)

    ScrollTrigger.refresh()
  }

  // LIFECYCLE
  onMounted(async () => {
    theme.initToggleTheme()
    language.initLanguage()

    await nextTick()

    initScrollAnimations()
  })

  onUnmounted(() => {
    context?.revert()
  })
</script>