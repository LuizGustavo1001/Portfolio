<template>
  <section class="section-box flex gap-05" style="align-items: flex-end">
    <!--  ABOUT ME -->
    <div class="container flex gap-05 justify-center relative scrollTrigger">
      <div class="background-text w-full text-center absolute">
        <span>{{ getSectionTitle().medium }} {{ getSectionTitle().bold }}</span>
      </div>

      <!-- MAIN CONTAINER -->
      <div class="container-body w-full translucent">
        <!-- CATEGORIES LIST -->
        <nav
            class="sidebar flex gap-1 flex-column"
            role="navigation"
        >
          <div class="flex gap-05 flex-column">
            <div class="flex gap-05 align-center">
              <div class="flex gap-05 align-center flex-grow-1">
                <span
                    v-for="dot in aboutMeCategory.controllers"
                    :key="dot.color"
                    class="dot"
                    :style="`--color: ${dot.color}`"
                />
              </div>

              <Icon :icon="icons['id-card-fill']" />
            </div>
            <h1 class="line-overflow menu-title">
              {{ getSectionTitle().medium }}
              <strong>{{ getSectionTitle().bold }}</strong>.
            </h1>
          </div>

          <menu v-if="aboutMeCategory.categories" class="menu flex-grow-1">
            <li
                v-for="item in aboutMeCategory.categories"
                :key="item.id"
                class="menu-item flex gap-05 align-center item medium-weight"
                :class="{
                  active: item.id === selectedItem
                }"
                @click="selectedItem = item.id as AboutMeCardType"
            >
              <HighlightBar
                variant="translucent"
                :isActive="item.id === selectedItem"
              />

              <Icon :icon="item.icon" />

              <p class="flex-grow-1">{{ getMenuOption(item.id) }}</p>
            </li>
          </menu>
        </nav>

        <!-- Content -->
        <div class="content-panel flex gap-1 flex-column flex-grow-1 overflow-auto relative">
          <h2>{{ getContentData(selectedItem).title }}</h2>

          <ProfessionalProfile class="content-panel-animation" v-show="selectedItem === ABOUT_ME.PROFILE" />
          <SkillsGrid class="content-panel-animation" variant="translucent" v-show="selectedItem === ABOUT_ME.SKILLS" />
          <AcademicBackgrounds class="content-panel-animation" v-show="selectedItem === ABOUT_ME.BACKGROUNDS" />
          <CertificatesList class="content-panel-animation" v-show="selectedItem === ABOUT_ME.CERTIFICATES" />
          <Languages class="content-panel-animation" v-show="selectedItem === ABOUT_ME.LANGUAGES" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .background-text {
    top: 0;
    left: 50%;
    transform: translate(-50%, -70%);

    font-size: clamp(3em, 15dvw, 12em);
    font-weight: var(--text-bold-weight);

    z-index: -1;
  }
  .background-text span {
    opacity: 0.5;

    background: linear-gradient(to bottom, var(--color-text-primary), transparent);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .container {
    height: 100dvh;
    max-height: 750px;

    background: radial-gradient(
        var(--color-bg-translucent) 90%, transparent
    ), url("/src/assets/images/paint01.jpg") no-repeat center center;
    background-size: cover;

    box-shadow: var(--shadow-md);
    border-radius: var(--radius-md);
  }

  .container-body {
    display: flex;
    flex-direction: column;
    gap: 1em;

    max-width: 1200px;
    padding: var(--spacing-xs);

    background: var(--transparent-gradient);
    box-shadow: var(--shadow-xl);
    border: 2px solid var(--color-border-translucent-subtle);

    border-radius: var(--radius-md);
    backdrop-filter: blur(15px);
  }

  .sidebar {
    min-height: 0;
    max-height: 100%;

    padding: 0.5em 0.5em 0 0.5em;
  }
  .sidebar h1 {
    padding-bottom: 0.2em;
    border-bottom: 2px solid var(--color-border-translucent-subtle);
    font-weight: var(--text-medium-weight);
  }

  .menu-title {
    font-size: var(--font-heading-2);
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 0.5em;
    overflow: scroll;
  }

  .menu-item {
    padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-sm) 0;

    color: var(--color-text-translucent-muted);

    border-radius: var(--radius-2xs);
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .menu-item.active,
  .menu-item:hover {
    background: var(--color-bg-translucent-hover);
    color: var(--color-text-translucent);
  }

  .content-panel {
    padding: var(--spacing-md);
    max-height: 100%;
    min-height: 0;

    background: var(--transparent-gradient);

    border: 2px solid var(--color-border-translucent-subtle-alt);
    border-radius: var(--radius-lg);
  }

  .content-panel-animation {
    animation: fade-in-item 0.5s cubic-bezier(1, -0.3, 0.3, 0.94);
  }

  /* MEDIA QUERIES */
  @media(min-width: 1024px) {
    .container {
      width: calc(100dvw - 3em);
      height: calc(100dvh - 200px);
      max-height: 750px;

      border-radius: var(--radius-2xl);
    }

    .container-body {
      display: grid;
      grid-template-columns: 300px 1fr;
    }

    .menu {
      display: flex;
      flex-direction: column;
    }

    .content-panel {
      padding: var(--spacing-lg);
    }
  }

  /* ANIMATIONS */
  @keyframes fade-in-item {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<script setup lang="ts">
  import { ref } from "vue"
  import { icons } from "../../assets/icons/icons"
  import { aboutMeCategory } from "../../locales/portfolioConfig"

  import { useI18n } from "vue-i18n"
  import { useUtils } from "../../composables/useUtils.ts"

  import { ABOUT_ME } from "../../constants/aboutMeCard"

  import type { AboutMeCardType } from "../../types/components/AboutMeCard"

  import Icon from "../common/Icon.vue"
  import HighlightBar from "../common/HighlightBar.vue"
  import SkillsGrid from "../aboutMeCards/SkillsGrid.vue"
  import ProfessionalProfile from "../aboutMeCards/ProfessionalProfile.vue"
  import AcademicBackgrounds from "../aboutMeCards/AcademicBackgrounds.vue"
  import CertificatesList from "../aboutMeCards/CertificatesList.vue"
  import Languages from "../aboutMeCards/Languages.vue"

  // COMPOSABLES
  const { tm } = useI18n()
  const utils = useUtils()

  // VARIABLES
  const selectedItem = ref<AboutMeCardType>(ABOUT_ME.PROFILE)

  // FUNCTIONS
  const getSectionTitle = () => {
    const key = `aboutMe.title`

    return {
      medium: utils.getTranslate(`${key}.medium`),
      bold:  utils.getTranslate(`${key}.bold`)
    }
  }

  const getMenuOption = (itemId: string) => {
    const key = `aboutMe.categories.${itemId}.title`
    return utils.getTranslate(key)
  }

  const getContentData = (sectionId: string) => {
    const key = `aboutMe.categories.${sectionId}`

    return {
      title: utils.getTranslate(`${key}.title`),
      paragraphs: tm(`${key}.content.paragraphs`) as string[]
    }
  }
</script>