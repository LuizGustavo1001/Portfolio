<template>
  <section class="section-box flex gap-05" style="align-items: flex-end">
    <div class="container flex gap-1 flex-column align-center justify-between translucent">
      <!-- Island -->
      <div class="island flex gap-05 align-center medium-weight">
        <span class="flex-grow-1">{{ getIslandContent().title }}</span>
        <Icon :icon="icons.soundwaves" />
      </div>

      <!-- Content -->
      <div class="container-body flex gap-2 flex-column align-center">
        <div class="title flex gap-05 flex-column align-center text-center">
          <h2 class="line-overflow medium-weight">{{ getPageTitleContent().medium }} <strong>{{ getPageTitleContent().bold }} </strong>.</h2>
          <p class="text-muted medium-weight">{{ getPageTitleContent().subtitle }}.</p>
        </div>

        <img src="/src/assets/images/me.jpg" alt="Profile Picture" class="pfp">

        <ul class="content buttons-wrapper w-full">
          <template
              v-for="item in contactCategory.buttons"
              :key="item.id"
          >
            <li class="item">
              <a :href="item.href" rel="external" target="_blank" class="flex gap-05 align-center">
                <div class="flex gap-05 align-center flex-grow-1">
                  <Icon
                      padding="xs"
                      :icon="item.iconLine"
                      size="30px"
                      class="icon"
                  />

                  <div class="flex flex-column flex-grow-1">
                    <span class="text-muted medium-weight">{{ getPersonaLinkContent(item.id).title }}</span>
                    <span class="medium-weight">{{ item.value }}</span>
                  </div>
                </div>

                <Icon :icon="icons['external-link']" style="align-self: flex-start"/>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .container {
    min-height: 800px;

    background: url("/src/assets/images/paint02.jpg") no-repeat center center;
    background-size: cover;

    box-shadow: var(--shadow-lg);
    border-radius: var(--radius-md);
  }

  .island {
    padding: var(--spacing-sm);
    min-width: 200px;

    background: var(--black);
    box-shadow: var(--shadow-lg);

    border-radius: var(--radius-md);
    cursor: default;

    transition: 0.3s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .island:hover {
    transform: scale(1.1);
  }

  .container-body {
    padding: 1em;
    width: fit-content;

    background: var(--transparent-gradient);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--color-border-translucent-subtle);

    border-radius: var(--radius-md);
    backdrop-filter: blur(15px);
  }

  .container-body .pfp {
    width: 150px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }

  .content .item {
    padding: var(--spacing-xs);

    background: var(--transparent-gradient);
    font-size: var(--font-body-sm);

    transition: 0.3s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .content .item:hover {
    transform: scale(1.03);
  }

  .content .item .icon {
    background: var(--color-bg-translucent);
    border-radius: var(--radius-md);
  }
</style>

<script setup lang="ts">
  import { icons } from "../../assets/icons/icons"
  import { contactCategory } from "../../locales/portfolioConfig"
  import { useUtils } from "../../composables/useUtils.ts"

  import Icon from "../../components/common/Icon.vue"

  // COMPOSABLES
  const utils = useUtils()

  // FUNCTIONS
  const getIslandContent = () => {
    return {
      title: utils.getTranslate(`contact.island`),
    }
  }

  const getPageTitleContent = () => {
    const titleKey = `contact.title`

    return {
      medium: utils.getTranslate(`${titleKey}.medium`),
      bold: utils.getTranslate(`${titleKey}.bold`),
      subtitle: utils.getTranslate(`contact.subtitle`)
    }
  }

  const getPersonaLinkContent = (itemId: string) => {
    const key = `personalLinks.${itemId}`

    return {
      title: utils.getTranslate(key)
    }
  }
</script>
