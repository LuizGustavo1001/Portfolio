<template>
  <div class="professional-profile-card about-me-card flex gap-1 flex-column">
    <!-- Professional Profile Card -->
    <template
      v-for="(paragraph, index) of aboutMeCategory.categories.profile.content.paragraphs"
      :key="index"
    >
      <component
          :is="paragraph.tag ?? 'p'"
          class="paragraph"
      >
        {{ getTranslatedParagraph(index) }}.
      </component>
    </template>
  </div>
</template>

<style scoped>
  .paragraph {
    text-align: justify;
    line-height: 1.7em;
  }
</style>

<script setup lang="ts">
  import { useUtils } from "../../composables/useUtils.ts"
  import { aboutMeCategory } from "../../locales/portfolioConfig"
  import { ABOUT_ME } from "../../constants/components/aboutMeCard.ts"

  // COMPOSABLES
  const utils = useUtils()

  // FUNCTIONS
  const getTranslatedParagraph = (index: number): string => {
    const translationKey = `aboutMe.categories.${ABOUT_ME.PROFILE}.content.paragraphs[${index}]`
    return utils.getTranslate(translationKey)
  }
</script>
