<template>
  <!-- AppHeader -->
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
          :icon="icons.sidebar"
          tag="button"
          size="25px"
          id="sidebar-toggle-btn"
          @click="toggleAside"
      />
    </div>
  </header>
</template>

<style scoped>
  .header{
    position: fixed;

    padding: 0.5em;

    box-shadow: 0 4px 10px 2px var(--shadow-lighter);
    backdrop-filter: blur(8px);

    z-index: 3;
  }

  .content{
    max-width: 1500px;
    margin-inline: auto;
  }

  .header::before{
    content: '';
    position: absolute;
    inset: 0;

    background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
    opacity: 1;
    z-index: -1;
  }

  @media(min-width: 1024px){
    .header{
      padding-inline: 3em;
    }
  }

  /* Dark Mode */
  .dark-theme .header {
    box-shadow: 0 4px 10px 2px var(--shadow);
  }
</style>

<script setup>
  import { icons } from "/src/assets/icons/icons.js"

  import IconBtn from "/src/components/buttons/IconBtn.vue"
  import Icon from "/src/components/common/Icon.vue"

  const emits = defineEmits(["toggle-aside"])

  const toggleAside = () => { emits("toggle-aside") }
</script>