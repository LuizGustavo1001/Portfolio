<template>
  <!-- AppFooter -->
  <footer class="footer reverse">
    <div class="container flex gap-2 flex-column">
      <!-- Top Div -->
      <div class="top flex gap-2 flex-wrap justify-between">
        <!-- Left -->
        <div class="left flex gap-05 flex-column">
          <div class="flex flex-column">
            <h2 class="medium-weight"><strong>Luiz Gustavo</strong> <br> de Almeida Lopes</h2>

            <i18n-t
                keypath="home.role"
                tag="p"
                scope="global"
                class="right text-muted"
            >
              <template #role>
                <strong>Full-Stack</strong>
              </template>
            </i18n-t>
          </div>

          <nav class="nav flex gap-1 align-center">
            <IconBtn
              v-for="item in footer.personal"
              :key="item.id"

              :icon="item.iconFill"
              :href="item.href"
              size="25px"
              variant="primary"
            />
          </nav>
        </div>

        <!-- Right -->
        <div class="right flex gap-2 justify-between flex-wrap">
          <nav v-for="section in footer.section" :key="section.id" class="flex gap-05 flex-column">
            <h4>{{ utils.getTranslate(`footer.section.${section.id}.title`) }}</h4>

            <span class="flex gap-05 flex-column">
            <a v-for="link in section.links" :href="link.href"
               class="text-muted">{{ utils.getTranslate(`footer.section.${section.id}.links.${link.id}.label`) }}</a>
          </span>
          </nav>
        </div>
      </div>

      <hr>

      <!-- Bottom Div -->
      <div class="bottom">
        <span class="text-muted"> {{ utils.getTranslate(`footer.thanks`) }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    padding: 2em;
    margin-top: 256px;
  }

  a {
    text-decoration: none;
    font-size: 0.9em;
  }
  a:hover {
    text-decoration: underline;
  }

  hr {
    color: var(--horizontal-line-color);
  }

  .container {
    max-width: 1500px;
    margin: 0 auto;
  }
</style>

<script setup lang="ts">
  import { footer } from "../locales/portfolioConfig"
  import IconBtn from "../components/buttons/IconBtn.vue"
  import { useUtils } from "../composables/useUtils.ts"

  const utils = useUtils()
</script>