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
    <Home id="home" />

    <AboutMe id="aboutMe" class="scroll-trigger-section" />

    <Projects id="projects" class="scroll-trigger-section" />

    <Contact id="contact" class="scroll-trigger-section" />
  </main>
  <AppFooter/>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, nextTick, computed } from "vue"
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  import { useSidebar } from "./composables/useSidebar.js"
  import { useTheme } from "./composables/useTheme.js"
  import { useLanguage } from "./composables/useLanguage.js"

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

  // COMPUTED PROPERTIES
  const isSidebarOpen = computed(() => sidebar.isActive.value)

  // OTHERS
  const container = ref(null)
  let context
  onMounted(async () => {
    theme.initToggleTheme()
    language.initLanguage()

    await nextTick()

    // scroll trigger main views animation
    context = gsap.context( () => {
      const mainSections = gsap.utils.toArray('.scroll-trigger-section')

      mainSections.forEach(section => {
        const containerInside = section.querySelector(".container")
        const target = containerInside || section

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
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
        )
      })
    }, container.value)

    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    if(context) context.revert()
  })
</script>