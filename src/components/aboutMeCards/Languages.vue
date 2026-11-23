<template>
  <ul class="academic-backgrounds-card about-me-card flex-list">
    <li
        v-for="language in aboutMeCategory.categories.languages.content"
        :key="language.id"
        class="flex gap-05 align-center"
    >
      <VerticalLine variant="translucent" />

      <div class="flex gap-03 flex-column">
        <h3 class="item-title">{{ getData(language.id).title }}</h3>
        <p class="text-muted item-description">
          {{ getData(language.id).subtitle }}
        </p>

        <p v-if="getData(language.id).description">
          {{ getData(language.id).description }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>

<script setup lang="ts">
  import { aboutMeCategory } from "../../locales/portfolioConfig"
  import { ABOUT_ME } from "../../constants/components/aboutMeCard.ts"
  import { useUtils } from "../../composables/useUtils.ts"
  import VerticalLine from "../common/VerticalLine.vue"

  // COMPOSABLES
  const utils = useUtils()

  // FUNCTIONS
  const getData = (languageId: string) => {
    const key = `aboutMe.categories.${ABOUT_ME.LANGUAGES}.content.${languageId}`

    return {
      title: utils.getTranslate(`${key}.title`),
      subtitle: utils.getTranslate(`${key}.subtitle`),
      period: utils.getTranslate(`${key}.period`),
      description: utils.getTranslate(`${key}.description`)
    }
  }
</script>