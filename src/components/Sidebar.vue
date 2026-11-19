<template>
  <aside ref="sidebarRef" class="sidebar flex gap-05 flex-column">
    <div class="flex-grow-1 flex gap-2 flex-column">
      <nav
          v-for="nav in sidebar"
          :key="nav.id"
          class="flex gap-05 flex-column"
      >
        <h4 class="title text-muted" style="text-transform: uppercase"> {{ $t(`sidebar.${nav.id}.title`) }}</h4>

        <ul class="flex gap-05 flex-column">
          <li v-for="item in nav.items" :key="item.id">
            <component
              :is="item.component"
              v-bind="getButtonProps(item, nav.id)"
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
    padding: var(--spacing-lg);
    padding-top: var(--spacing-xl);

    background: var(--color-bg-primary);

    z-index: 5;
    transition: transform 0.4s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .sidebar.active {
    transform: translateX(0);
  }
</style>

<script setup lang="ts">
  import { computed, ref } from "vue"
  import { sidebar } from "../locales/portfolioConfig"
  import { icons } from "../assets/icons/icons"

  import { useTheme } from "../composables/useTheme"
  import { useLanguage } from "../composables/useLanguage"
  import { useI18n } from "vue-i18n"
  import { useUtils } from "../composables/useUtils.ts"

  import { THEME_PREFERENCES } from "../constants/sysTheme"
  import { BUTTONS } from "../constants/components/buttons"
  import type { ActionBtnType, ButtonComponent, ButtonTag } from "../types/components/buttons"

  // COMPOSABLES
  const { t } = useI18n()
  const theme = useTheme()
  const language = useLanguage()
  const utils = useUtils()

  // INTERFACES
  interface SidebarItem {
    id: string
    component?: ButtonComponent
    tag?: ButtonTag
    href?: string
    leftIcon?: string
    iconFill?: string
    rightIcon?: string
    variant?: ActionBtnType
  }

  const sidebarRef = ref<HTMLElement | null>(null)

  // COMPUTED PROPERTIES
  const themesLeftIcon = computed(() => {
    switch(theme.currentPreference.value){
      case THEME_PREFERENCES.LIGHT: return icons["moon-fill"]
      case THEME_PREFERENCES.DARK: return icons["sun-fill"]
      default: return icons["desktop-fill"]
    }
  })

  const themeTitle = computed(() => {
    const key = `themes.${theme.currentPreference.value}`
    return utils.getTranslate(key)
  })

  const langTitle = computed(() => {
    const key = `utils.currentLanguage`
    return utils.getTranslate(key)
  })

  const getButtonProps = (item: SidebarItem, navId: string) => {
    return {
      leftIcon: getLeftIcon(item),
      rightIcon: item.rightIcon,
      href: item.href,
      label: getItemLabel(item.id, navId),
      class: "w-full",
      onClick: getButtonEvent(item.id),
      variant: item.variant,
      tag: item.tag,
      fontSize: "small",
      style: item.component === BUTTONS.ACTION_BUTTON
          ? "justify-content: flex-start"
          : undefined
    }
  }

  const getLeftIcon = (item: SidebarItem) => {
    if(item.id === "themes") {
      return themesLeftIcon.value
    }

    return item.leftIcon ?? item.iconFill ?? ""
  }

  const getItemLabel = (itemId: string, navId: string): string => {
    if(itemId === "themes") {
      return `${t('utils.theme')} - ${themeTitle.value}`
    }

    if(itemId === "languages") {
      return `${t('utils.language')} - ${langTitle.value}`
    }

    const key = `sidebar.${navId}.items.${itemId}.title`
    return utils.getTranslate(key)
  }

  const getButtonEvent = (itemId: string) => {
    switch (itemId) {
      case "themes":
        return theme.toggleTheme

      case "languages":
        return language.toggleLanguage

      default:
        return undefined
    }
  }
</script>