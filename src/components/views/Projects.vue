<template>
  <section class="section-box flex gap-05 align-center  justify-center">
    <div class="container flex gap-2 flex-column">
      <!-- Section Title -->
      <div class="section-title flex gap-05 justify-between flex-wrap">
        <h1 class="medium-weight uppercase">
          {{ getProjectSectionTitleData().medium }}
          <br>
          <strong>{{ getProjectSectionTitleData().bold }}</strong>.
        </h1>

        <ActionButton
            tag="a"
            :href="personalLinks.github.href"
            :rightIcon="icons['external-link']"
            :leftIcon="personalLinks.github.icon"
            :label="t('projectsSection.actions.github')"
            class="action-button"
        />
      </div>

      <!-- Projects Container -->
      <ul class="projects-container">
        <li v-for="project in projects"
            :key="project.id"
            class="project flex gap-05 flex-column"
            :style="{
              '--image': project.href
                  ? project.href
                  : ''
            }"
        >
          <div class="flex gap-05 align-center">
            <p class="project-subtitle text-muted medium-weight flex-grow-1 uppercase">
              {{ getProjectData(project).subtitle }}
            </p>

            <span class="actions flex gap-05" style="justify-content: flex-end">
              <IconBtn
                  v-if="project.demo"
                  tag="a"
                  :link="project.demo"
                  :icon="icons['window-fill']"
                  class="action-button"
                  :reverseClr="true"
              />

              <IconBtn
                  v-if="project.repository"
                  tag="a"
                  :link="project.repository"
                  :icon="icons.github"
                  class="action-button"
                  :reverseClr="true"
              />
            </span>
          </div>

          <!-- Project Title -->
          <div class="flex gap-05 flex-column flex-grow-1">
            <h2 class="project-title">
              {{ getProjectData(project).title }}
            </h2>

            <p class="project-desc text-muted text-justified flex-grow-1">
              {{ getProjectData(project).description }}.
            </p>
          </div>

          <!-- Project Stacks + Image -->
          <div class="flex gap-05 flex-column">
            <ul class="stack-list flex gap-05 align-center flex-wrap">
              <li
                v-for="stack in project.stacks"
                :key="stack.id"
                class="badge medium-weight text-muted"
              >
                {{ stack }}
              </li>
            </ul>

            <div class="project-image relative overflow-hidden"></div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  .container {
    padding: 0;
  }

  .section-title {
    align-items: flex-end;
  }
  .section-title h1 {
    font-size: clamp(3em, 4dvw, 4em);
  }

  .projects-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 550px), 1fr));
    gap: 2em;
  }

  .project {
    padding: 1em 1em 0 1em;
    min-height: 550px;

    background: var(--color-bg-subtle);
    border: 2px solid var(--color-border-secondary);
    box-shadow: 0 0 5px 1px var(--shadow-subtle);

    border-radius: var(--radius-md);
  }

  .project .stack-list .badge {
    padding: 0.3em;
    background: var(--badge-bg-primary);
    border-radius: var(--radius-2xs);
    font-size: clamp(0.8em, 1.5dvw, 0.9em);
  }
  .project .action-btn {
    font-size: 0.9em;
  }

  .project-title {
    font-size: 1.3em;
  }

  .project-subtitle {
    font-size: clamp(0.85em, 1.5dvw, 0.95em)
  }

  .project-desc {
    font-size: clamp(0.85em, 1.5dvw, 0.95em)
  }

  .project-image {
    height: 250px;
    width: 100%;

    background: var(--image) top left;
    background-size: cover;

    border: 2px solid var(--color-border-secondary);
    border-bottom: none;
    border-radius: var(--radius-md) var(--radius-md) 0 0;
  }

  /* DARK MODE */
  .dark .project-image::after {
    content: "";
    position: absolute;

    inset: 0;

    background: var(--black);
    opacity: 0.15;
  }

  .dark .project {
    box-shadow: 0 0 5px 2px var(--shadow-bolder);
  }
</style>

<script setup>
  import { icons } from "/src/assets/icons/icons.js"
  import { personalLinks, projects } from "/src/locales/portfolioConfig.js"

  import { useI18n } from "vue-i18n"

  import IconBtn from "/src/components/buttons/IconBtn.vue"
  import ActionButton from "/src/components/buttons/ActionButton.vue"

  // COMPOSABLES
  const { t } = useI18n()

  // FUNCTIONS
  const getProjectData = (project) => {
    const key = `projects.${project.id}`

    return {
      subtitle: t(`${key}.subtitle`) ?? "",
      title: t(`${key}.title`) ?? "",
      description: t(`${key}.description`) ?? ""
    }
  }

  const getProjectSectionTitleData = () => {
    const key = `projectsSection.title`

    return {
      medium: t(`${key}.medium`) ?? "",
      bold: t(`${key}.bold`) ?? ""
    }
  }
</script>