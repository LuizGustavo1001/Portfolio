<template>
  <section class="section-box flex gap-05 align-center justify-center">
    <div class="container flex gap-05 justify-center translucent relative scrollTrigger">
      <div class="background-text absolute">
        <span>{{ getSectionTitle() }}</span>
      </div>

      <div class="container-body w-full">
        <!-- Sidebar -->
        <nav
            class="sidebar flex gap-1 flex-column"
            role="navigation"
        >
          <div class="flex gap-05 flex-column">
            <div class="flex gap-05 align-center">
              <div class="flex gap-05 align-center flex-grow-1">
                <span
                    v-for="dot in aboutMe.controllers"
                    :key="dot.color"
                    class="dot"
                    :style="`--color: ${dot.color}`"
                />
              </div>

              <Icon :icon="icons.userIdFilled" />
            </div>
            <h1 class="line-overflow">{{ $t(`aboutMe.title.medium`) }} <strong>{{ $t(`aboutMe.title.bold`) }} </strong>.</h1>
          </div>

          <menu v-if="aboutMe.sections" class="menu">
            <li
                v-for="item in aboutMe.sections"
                :key="item.id"
                class="menu-item translucent flex gap-05 align-center item medium-weight"
                :class="item.id === selectedItem
                    ? 'active'
                    : undefined"
                :data-id="item.id"
                @click="toggleSelected(item.id)"
            >
              <HighlightBar
                variant="translucent"
                :isActive="item.id === selectedItem"
              />

              <Icon :icon="item.icon" />

              <p class="flex-grow-1">{{ $t(`aboutMe.sections.${item.id}.title`) }}</p>
            </li>
          </menu>
        </nav>

        <!-- Content -->
        <div class="content-panel flex gap-05 flex-column flex-grow-1 overflow-hidden relative">
          <div v-for="section in aboutMe.sections"
                :key="section.id"
                v-show="section.id === selectedItem"
                class="flex gap-15 flex-column content-panel-animation overflow-hidden"
          >
            <h2>{{ $t(`aboutMe.sections.${section.id}.title`) }}</h2>
            <div class="content flex-grow-1 overflow-auto"
                  :class="[
                     section.type === 'grid-list' ? 'grid-list' : undefined,
                     section.type === 'text' ? ['flex', 'gap-05', 'flex-column'] : undefined,
                     section.type === 'regular-list' ? ['flex', 'gap-05', 'flex-column', 'regular-list'] : undefined
                  ]"
            >
              <!-- Regular Text Section Type -->
              <template v-if="section.type === 'text'">
                <template
                    v-for="paragraph in $tm(`aboutMe.sections.${section.id}.content.paragraphs`)"
                    :key="paragraph.tag"
                >
                  <component
                      :is="paragraph.tag ?? 'p'"
                      :class="paragraph.classes ?? ''"
                      class="paragraph"
                  >
                    {{ paragraph.content ?? '' }}.
                  </component>
                </template>
              </template>

              <!-- Grid List Section Type -->
              <template v-else-if="section.type === 'grid-list'">
                <div v-for="skill in skills" :key="skill.id" class="grid-item flex gap-05 align-center">
                  <Icon :icon="skill.icon" size="35px" />

                  <div class="flex flex-column">
                    <h3>{{ skill.name }}</h3>
                    <p class="text-muted medium-weight">{{ $t(`skills.content.${skill.id}.category`) }}</p>
                  </div>
                </div>
              </template>

              <!-- Flex List Section Type -->
              <template v-else-if="section.type === 'regular-list'">
                <div v-for="item in section.content" :key="item.id" class="flex gap-05 align-center">
                  <VerticalLine variant="translucent" />

                  <div class="flex gap-03 flex-column">
                    <h3>{{ $tm(`aboutMe.sections.${section.id}.content.${item.id}.title`) }}</h3>
                    <p class="text-muted medium-weight">
                      {{ $tm(`aboutMe.sections.${section.id}.content.${item.id}.subtitle`) }}

                      <span v-if="$t(`aboutMe.sections.${section.id}.content.${item.id}.period`)">
                        • <em>({{ $t(`aboutMe.sections.${section.id}.content.${item.id}.period`) }})</em>
                      </span>
                    </p>

                    <p v-if="$te(`aboutMe.sections.${section.id}.content.${item.id}.description`)">
                      {{ $t(`aboutMe.sections.${section.id}.content.${item.id}.description`) }}
                    </p>

                    <a
                        v-if="$te(`aboutMe.sections.${section.id}.content.${item.id}.link`)"
                       :href="$t(`aboutMe.sections.${section.id}.content.${item.id}.link`)"
                       rel="noopener noreferrer"
                       target="_blank"
                       style="width: fit-content"
                       class="text-muted medium-weight"
                    >
                      {{ $t(`utils.certificate`) }}
                    </a>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .background-text {
    top: 0;
    left: 50%;
    transform: translate(-50%, -70%);

    width: 100%;

    font-size: clamp(3em, 15dvw, 12em);
    font-weight: bold;
    text-align: center;

    z-index: -1;
  }
  .background-text span {
    opacity: 0.4;

    background: linear-gradient(to bottom, var(--color-text-primary), transparent);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .container {
    height: 100dvh;
    max-height: 750px;

    background: radial-gradient(
        var(--color-bg-transparent) 90%, transparent
    ), url("/src/assets/images/paint04.webp") no-repeat center center;
    background-size: cover;

    box-shadow: 0 5px 10px var(--shadow-bolder);
    border-radius: var(--radius-md);
  }

  .container-body {
    display: flex;
    flex-direction: column;
    gap: 1em;

    max-width: 1200px;
    padding: 0.5em;

    background: var(--transparent-gradient);
    box-shadow: 0 0 5px var(--shadow);

    border: 2px solid var(--color-border-transparent-subtle);
    border-radius: var(--radius-md);

    backdrop-filter: blur(20px);
  }

  .sidebar {
    min-height: 0;
    max-height: 100%;

    padding: 0.5em 0.5em 0 0.5em;
  }
  .sidebar h1 {
    padding-bottom: 0.2em;
    border-bottom: 2px solid var(--color-border-transparent-subtle);
    font-weight: var(--text-medium-weight);
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    overflow: scroll;
  }

  .menu-item {
    padding: 0.6em 0.6em 0.6em 0;

    color: var(--color-text-translucent);

    border-radius: var(--radius-2xs);
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .menu-item.active,
  .menu-item:hover {
    background: var(--color-bg-transparent-hover);
    color: var(--white);
  }

  .content-panel {
    padding: 1em;
    max-height: 100%;
    min-height: 0;

    background: var(--transparent-gradient);

    border: 2px solid var(--color-border-transparent-subtle-alt);
    border-radius: var(--radius-lg);
  }
  .content-panel h2 {
    font-size: clamp(1.5em, 3dvw, 1.8em);
    padding-bottom: 0.2em;
    border-bottom: 3px dashed var(--color-border-transparent-subtle);
  }
  
  .content-panel-animation {
    animation: fade-in-item 0.5s cubic-bezier(1, -0.3, 0.3, 0.94);
  }

  .content h3 {
    font-size: clamp(0.9em, 2dvw, 1em);
  }
  .content p {
    font-size: clamp(0.8em, 1.5dvw, 0.9em);
  }
  .content .paragraph {
    text-align: justify;
    font-size: clamp(0.9em, 2vw, 1.1em);
    word-spacing: 5px;
    line-height: 1.7em;
  }

  .grid-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;
  }
  .grid-item {
    padding: 0.5em;
    background: var(--color-border-transparent-subtle);
    border-radius: var(--radius-2xs);
  }
  .grid-item h3 {
    font-size: 0.9em;
  }
  .grid-item p {
    font-size: 0.75em;
  }

  .regular-list {
    gap: 1em;
  }

  /* MEDIA QUERIES */
  @media(min-width: 1024px) {
    .container {
      width: calc(100dvw - 3em);
      height: calc(100dvh - 200px);
      max-height: 750px;

      border-radius: var(--radius-2xl);
    }

    .container-body {
      display: grid;
      grid-template-columns: 300px 1fr;
    }

    .menu {
      display: flex;
      flex-direction: column;
    }

    .content-panel {
      padding: 2em;
    }
  }

  /* ANIMATIONS */
  @keyframes fade-in-item {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<script setup>
  import { ref } from "vue"
  import { icons } from "/src/assets/icons/icons.js"
  import { aboutMe, skills } from "/src/locales/portfolioConfig.js"

  import { useI18n } from "vue-i18n"

  import Icon from "/src/components/common/Icon.vue"
  import HighlightBar from "../common/HighlightBar.vue"
  import VerticalLine from "../common/VerticalLine.vue"

  // COMPOSABLES
  const { t } = useI18n()

  const selectedItem = ref(localStorage.getItem("selectedItemAboutMe") ?? aboutMe.sections[0].id)

  const toggleSelected = (newValue) => {
    localStorage.setItem("selectedItemAboutMe", newValue)
    selectedItem.value = newValue
  }

  const getSectionTitle = () => {
    return `${t(`aboutMe.title.medium`) ?? ""} ${t(`aboutMe.title.bold`) ?? ""}`
  }
</script>