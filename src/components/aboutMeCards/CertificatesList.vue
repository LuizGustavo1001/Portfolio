<template>
  <ul class="certificates-card about-me-card flex-list">
    <li
        v-for="item in aboutMeCategory.categories.certificates.content"
        :key="item.id"
        class="flex gap-05 align-center"
    >
      <VerticalLine variant="translucent" />

      <div class="flex align-center gap-05 w-full">
        <div class="flex gap-03 flex-column flex-grow-1">
          <h3 class="item-title">{{ getData(item.id).title }}</h3>
          <p class="text-muted item-description">
            {{ getData(item.id).subtitle }}
            <span v-if="item.period">• {{ item.period }}</span>
          </p>

          <p v-if="getData(item.id).description">
            {{ getData(item.id).description }}
          </p>
        </div>

        <IconBtn
          v-if="item.href"
          :icon="icons['certificate-fill']"
          variant="reverse"
          :href="item.href"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped></style>

<script setup lang="ts">
  import { aboutMeCategory } from "../../locales/portfolioConfig"
  import { ABOUT_ME } from "../../constants/aboutMeCard"
  import { useUtils } from "../../composables/useUtils.ts"
  import { icons } from "../../assets/icons/icons.ts"

  import VerticalLine from "../common/VerticalLine.vue"
  import IconBtn from "../buttons/IconBtn.vue"

  // COMPOSABLES
  const utils = useUtils()

  // FUNCTIONS
  const getData = (certificateId: string) => {
    const key = `aboutMe.categories.${ABOUT_ME.CERTIFICATES}.content.${certificateId}`

    return {
      title: utils.getTranslate(`${key}.title`),
      subtitle: utils.getTranslate(`${key}.subtitle`),
      description: utils.getTranslate(`${key}.description`)
    }
  }
</script>