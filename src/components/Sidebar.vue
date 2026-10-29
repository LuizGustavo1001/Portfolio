<template>
  <aside :ref="sidebar.sidebarRef" class="sidebar flex gap-05 flex-column">
    <div class="flex-grow-1 flex gap-2 flex-column">
      <nav
          v-for="nav in sidebar"
          :key="nav.id"
          class="flex gap-05 flex-column"
      >
        <h2 class="title medium-weight text-muted"> {{ $t(`sidebar.${nav.id}.title`) }}</h2>

        <ul class="flex gap-05 flex-column">
          <li v-for="item in nav.items">
            <component
              :is="item.tag"
              v-bind="getButtonProps(item, nav)"
            />
          </li>
        </ul>
      </nav>
    </div>

    <span class="light-weight text-center text-muted footer">Luiz Gustavo de Almeida Lopes • Portfolio</span>
  </aside>
</template>

<style scoped>
  .sidebar {
    position: fixed;
    right: 0;
    transform: translateX(100%);

    min-height: 100dvh;
    width: 450px;
    max-width: 65dvw;
    padding: 2em 1em 1em 1em;

    background: var(--color-bg-primary);

    z-index: 5;
    transition: transform 0.4s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .sidebar.active {
    transform: translateX(0);
  }

  h2 {
    font-size: clamp(0.9em, 2dvw, 1.2em);
  }

  .action-btn {
    font-size: 0.85em;
  }

  .footer {
    font-size: clamp(0.8em, 2dvw, 1em);
  }
</style>

<script setup>
  import { computed } from "vue"
  import { sidebar } from "/src/locales/portfolioConfig.js"
  import { icons } from "/src/assets/icons/icons.js"
  import { BUTTONS } from "../composables/utils.js"

  import { THEME_PREFERENCES, useTheme } from "../composables/useTheme.js"
  import { useLanguage } from "../composables/useLanguage.js"
  import { useI18n } from "vue-i18n"


  // COMPOSABLES
  const { t, te } = useI18n()
  const theme = useTheme()
  const language = useLanguage()

  // COMPUTED PROPERTIES
  const themesLeftIcon = computed(() => {
    switch(theme.currentPreference.value){
      case THEME_PREFERENCES.LIGHT: return icons.moonFilled
      case THEME_PREFERENCES.DARK: return icons.sunFilled
      default: return icons["desktop-fill"]
    }
  })

  const themeTitle = computed(() => {
    return te(`themes.${theme.currentPreference.value}`)
        ? t(`themes.${theme.currentPreference.value}`)
        : ""
  })

  const langTitle = computed(() => {
    return te(`utils.currentLanguage`)
        ? t(`utils.currentLanguage`)
        : ""
  })

  const getButtonProps = (item, nav) => {
    return {
      leftIcon: getLeftIcon(item),
      rightIcon: item.rightIcon ?? undefined,
      link: item.link ?? undefined,
      label: getItemLabel(item, nav),
      class: "w-full",
      onClick: getButtonEvent(item),
      variant: item.variant ?? undefined,
      tag: item.type ?? undefined,
      style: item.tag === BUTTONS.ACTION_BUTTON ? "justify-content: flex-start" : ""
    }
  }

  const getLeftIcon = (item) => {
    if(item.id === "themes"){
      return themesLeftIcon.value
    }

    return item.leftIcon ?? ""
  }

  const getItemLabel = (item, nav) => {
    if(item.id === "themes"){
      return `${t('utils.theme')} - ${themeTitle.value}`
    }

    if(item.id === "languages"){
      return `${t('utils.language')} - ${langTitle.value}`
    }

    const key = `sidebar.${nav.id}.items.${item.id}.title`

    return te(key) ? t(key) : ""
  }


  const getButtonEvent = (item) => {
    if (["themes", "languages"].includes(item.id)) {
      return (event) => {
        event?.stopPropagation()

        if (item.id === "themes") {
          theme.toggleTheme()
        } else {
          language.toggleLanguage()
        }
      }
    }

    return undefined
  }
</script>