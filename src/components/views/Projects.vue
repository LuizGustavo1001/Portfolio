<template>
  <section class="section-box flex gap-05 align-center">
    <div class="container flex gap-2 flex-column">
      <!-- Section Title -->
      <div class="section-title flex gap-05 justify-between flex-wrap">
        <h1 class="medium-weight">
          {{ getProjectSectionTitleData().medium }}
          <br>
          <strong>{{ getProjectSectionTitleData().bold }}</strong>.
        </h1>

        <ActionButtonSwap
            :tag="BUTTON_TAGS.LINK"
            :href="socialLinks.github.href"
            :rightIcon="icons['external-link']"
            :leftIcon="socialLinks.github.iconFill"
            variant="reverse"
            :label="utils.getTranslate('projectsSection.actions.github')"
        />
      </div>

      <!-- Projects Container -->
      <ul class="projects-list">
        <li v-for="project in projects"
            :key="project.id"
            class="project flex gap-1 flex-column"
            :style="{'--image': project.href ?? ''}"
        >
          <div class="flex gap-1 align-center">
            <p class="project-subtitle text-muted medium-weight flex-grow-1">
              {{ getProjectData(project.id).subtitle }}
            </p>

            <span class="actions flex gap-05" style="justify-content: flex-end">
              <IconBtn
                  v-if="project.demo"
                  :tag="BUTTON_TAGS.LINK"
                  :href="project.demo"
                  :icon="icons['window-fill']"
                  variant="reverse"
              />

              <IconBtn
                  v-if="project.repository"
                  :tag="BUTTON_TAGS.LINK"
                  :href="project.repository"
                  :icon="icons.github"
                  variant="reverse"
              />
            </span>
          </div>

          <!-- Project Title -->
          <div class="flex gap-05 flex-column flex-grow-1">
            <h3>
              {{ getProjectData(project.id).title }}
            </h3>

            <p class="project-desc text-justified flex-grow-1">
              {{ getProjectData(project.id).description }}.
            </p>
          </div>

          <!-- Project Stacks + Image -->
          <div class="flex gap-05 flex-column">
            <ul class="stack-list flex gap-05 align-center flex-wrap">
              <li
                v-for="(stack, key) in project.stacks"
                :key="key"
              >
                <Badge :label="stack" variant="border" />
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

  .projects-list {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 550px), 1fr));
    gap: 4em;
  }

  .project {
    padding: var(--spacing-md) var(--spacing-md) 0 var(--spacing-md);
    min-height: 550px;

    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border-primary);

    border-radius: var(--radius-md);
  }

  .project-subtitle {
    font-size: var(--font-body-sm);
  }

  .project-desc {
    font-size: var(--font-body-sm);
  }

  .project-image {
    height: 250px;

    background: var(--image) top left;
    background-size: cover;

    border: 1px solid var(--color-border-primary);
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
</style>

<script setup lang="ts">
  import { icons } from "../../assets/icons/icons"
  import { socialLinks, projects } from "../../locales/portfolioConfig"

  import { BUTTON_TAGS } from "../../constants/components/buttons.ts"

  import { useUtils } from "../../composables/useUtils.ts"

  import IconBtn from "../../components/buttons/IconBtn.vue"
  import ActionButtonSwap from "../buttons/ActionButtonSwap.vue"
  import Badge from "../common/Badge.vue"

  // COMPOSABLES
  const utils = useUtils()

  // FUNCTIONS
  const getProjectData = (projectId: string) => {
    const key = `projects.${projectId}`

    return {
      subtitle: utils.getTranslate(`${key}.subtitle`),
      title: utils.getTranslate(`${key}.title`),
      description: utils.getTranslate(`${key}.description`)
    }
  }

  const getProjectSectionTitleData = () => {
    const key = `projectsSection.title`

    return {
      medium: utils.getTranslate(`${key}.medium`),
      bold: utils.getTranslate(`${key}.bold`)
    }
  }
</script>