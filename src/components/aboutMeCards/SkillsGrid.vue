<template>
  <ul class="skills-list about-me-card" :class="[props.variant]">
    <li
      v-for="skill in skills"
      :key="skill.id"
      class="skill flex gap-05 align-center"
    >
      <Icon :icon="skill.icon" size="35px" />

      <div class="flex flex-column">
        <h3>{{ skill.name }}</h3>
        <p class="text-muted medium-weight">{{ getSkillLabel(skill.id) }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  .skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.5em;
  }
  .skill {
    padding: var(--spacing-xs);
    border-radius: var(--radius-xs);
  }
  .skill h3 {
    font-size: var(--font-body-sm);
  }
  .skill p {
    font-size: var(--font-caption);
  }

  /* VARIANTS */
  /* 1. Translucent */
  .skills-list.translucent .skill {
    background: var(--transparent-gradient);
  }

  /* 2. Subtle */
  .skills-list.subtle .skill {
    background: var(--color-bg-subtle);
  }
</style>

<script setup lang="ts">
  import { skills } from "../../locales/portfolioConfig.ts"
  import Icon from "../common/Icon.vue"
  import { useUtils } from "../../composables/useUtils.ts"

  // COMPOSABLES
  const utils = useUtils()

  // INTERFACES
  interface Props {
    variant?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: "subtle"
  })

  // FUNCTIONS
  const getSkillLabel = (skillId: string) => {
    const key = `skills.content.${skillId}.category`
    return utils.getTranslate(key)
  }
</script>