<template>
  <!-- Sidebar -->
  <aside class="sidebar flex gap-05 flex-column">
    <!-- Main Sidebar Content -->
    <div class="flex-grow-1 flex gap-2 flex-column">
      <nav
          v-for="nav in sidebar"
          :key="nav.id"
          class="flex gap-05 flex-column"
      >
        <h2 class="title medium-weight text-muted"> {{ $t(`sidebar.sections.${nav.id}.title`) }}</h2>

        <ul class="flex gap-05 flex-column">
          <li v-for="item in nav.items">
            <template v-if="item.id in personalLinks && item.id !== 'resume'" :key="item.id">
              <ActionButtonAlt
                  :leftIcon="personalLinks[item.id].icon"
                  :label="$t(`personalLinks.${item.id}`)"
                  :rightIcon="icons.externalLink"
                  :link="personalLinks[item.id].href"
                  class="w-full"
              />
            </template>

            <template v-else-if="item.id === 'resume'">
              <ActionButton
                  tag="a"
                  :leftIcon="personalLinks[item.id].icon"
                  :label="$t(`sidebar.resume`)"
                  :link="personalLinks[item.id].href"
                  style="justify-content: flex-start"
                  :right-icon="icons.externalLink"
                  class="action-btn w-full"
              />
            </template>

            <template v-else-if="item.id === 'toggleLanguage'">
              <ActionButton
                  :leftIcon="icons.translate"
                  :right-icon="icons.switch"
                  :label="$t(`sidebar.language`)"
                  style="justify-content: flex-start"
                  class="reverse action-btn w-full"
                  @click="toggleLang"
              />
            </template>

            <template v-else>
              <ActionButton
                  :leftIcon="props.theme === 'lightTheme'? icons.moonFilled : icons.sunFilled"
                  :right-icon="icons.switch"
                  :label="$t(`sidebar.${props.theme}`)"
                  style="justify-content: flex-start"
                  class="reverse action-btn w-full"
                  @click="toggleTheme"
              />
            </template>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Sidebar AppFooter -->
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
  import { personalLinks, sidebar } from "/src/locales/portfolioConfig.js"
  import { icons } from "/src/assets/icons/icons.js"
  import ActionButton from "/src/components/buttons/ActionButton.vue"
  import ActionButtonAlt from "/src/components/buttons/ActionButtonAlt.vue"

  const emit  = defineEmits(['toggle-language', 'toggle-theme'])
  const props = defineProps(['theme'])

  const toggleLang  = () => emit("toggle-language")
  const toggleTheme = () => emit("toggle-theme")
</script>