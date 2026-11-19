<template>
  <header class="header w-full">
    <div class="content flex gap-05 align-center w-full">
      <!-- Logo -->
      <div class="flex gap-05 align-center flex-grow-1">
        <Icon
            :icon="icons.logo"
            size="45px"
            class="icon"
        />
      </div>

      <!-- Sidebar Icon -->
      <IconBtn
          :ref="props.toggleBtnRef"
          :icon="icons.sidebar"
          tag="button"
          size="25px"
          @click.stop="$emit('sidebar-toggle')"
      />
    </div>
  </header>
</template>

<style scoped>
  .header {
    position: fixed;

    padding: var(--spacing-xs);

    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(8px);

    z-index: 3;
  }

  .content {
    max-width: 1500px;
    margin-inline: auto;
  }

  .header::before {
    content: '';
    position: absolute;
    inset: 0;

    background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
    opacity: 1;
    z-index: -1;
  }

  @media(min-width: 1024px) {
    .header {
      padding-inline: 3em;
    }
  }

  /* Dark Mode */
  .dark .header {
    box-shadow: var(--shadow-md);
  }
</style>

<script setup lang="ts">
  import { icons } from "../assets/icons/icons"

  import IconBtn from "../components/buttons/IconBtn.vue"
  import Icon from "../components/common/Icon.vue"

  // PROPS
  interface AppHeaderProps {
    toggleBtnRef: string
  }

  const props = defineProps<AppHeaderProps>()
</script>