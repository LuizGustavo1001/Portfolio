<template>
  <ul class="academic-backgrounds-card about-me-card flex-list">
    <li
        v-for="item in aboutMeCategory.categories.backgrounds.content"
        :key="item.id"
        class="flex gap-05 align-center"
    >
      <VerticalLine variant="translucent" />

      <div class="flex gap-03 flex-column">
        <h3 class="item-title">{{ getData(item.id).title }}</h3>
        <p class="text-muted item-description">
          {{ getData(item.id).subtitle }}
          <span v-if="getData(item.id).period">• {{ getData(item.id).period }}</span>
        </p>

        <p v-if="getData(item.id).description">{{ getData(item.id).description }}</p>
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
  const getData = (itemId: string) => {
    const key = `aboutMe.categories.${ABOUT_ME.BACKGROUNDS}.content.${itemId}`

    return {
      title: utils.getTranslate(`${key}.title`),
      subtitle: utils.getTranslate(`${key}.subtitle`),
      period: utils.getTranslate(`${key}.period`),
      description: utils.getTranslate(`${key}.description`)
    }
  }
</script>