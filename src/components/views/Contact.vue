<template>
  <!-- Contact Section -->
  <section class="section-box flex gap-05 align-center justify-center">
    <div class="container flex gap-1 flex-column align-center justify-between translucent">
      <!-- Island -->
      <div class="island flex gap-05 align-center justify-between medium-weight">
        <span>{{ $t(`contact.island`)}}</span>
        <Icon :icon="icons.soundwaves"></Icon>
      </div>

      <!-- Content -->
      <div class="container-body flex gap-2 flex-column align-center justify-between">
        <div class="title flex gap-05 flex-column align-center text-center">
          <h1 class="line-overflow medium-weight">{{ $t(`contact.title.medium`) }} <strong>{{ $t(`contact.title.bold`) }} </strong>.</h1>
          <p class="text-muted">{{ $t(`contact.subtitle`) }}.</p>
        </div>

        <img src="/images/me.jpg" alt="Profile Picture" class="pfp">

        <ul class="content flex gap-05 flex-column w-full">
          <template
              v-for="item in personalLinks"
              :key="item.id"
          >
            <li v-if="item.id !== 'resume'" class="item">
              <a :href="item.href" rel="external" target="_blank" class="flex gap-05 align-center">
                <div class="flex gap-05 align-center flex-grow-1">
                  <Icon
                      :have-padding="true"
                      padding="8px"
                      :icon="item.icon"
                      size="30px"
                      class="icon"
                  />

                  <div class="flex flex-column flex-grow-1">
                    <span class="text-muted"> {{ $t(`personalLinks.${item.id}`) }}</span>
                    <span class="medium-weight">{{ item.value }}</span>
                  </div>
                </div>

                <Icon :icon="icons.externalLink" style="align-self: flex-start"/>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .container{
    min-height: 800px;

    background: radial-gradient(var(--alpha-black-30) 90%, transparent), url("/images/paint03.webp") no-repeat center center;
    background-size: cover;

    box-shadow: 0 0 10px 5px var(--shadow-subtle);
    border-radius: var(--radius-md);
  }

  a {
    text-decoration: none;
  }

  .island {
    padding: 0.8em;
    min-width: 200px;

    background: var(--black);
    box-shadow: 0 0 10px 5px var(--shadow);

    border-radius: 12px;
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
    box-shadow: 0 0 5px var(--shadow);
    border: 2px solid var(--color-border-transparent-subtle-alt);

    border-radius: var(--radius-md);
    backdrop-filter: blur(20px);
  }
  .container-body .title h1 {
    font-size: clamp(1.5em, 3dvw, 2em);
  }
  .container-body .title p {
    font-size: clamp(0.8em, 2dvw, 1em);
  }
  .container-body .pfp {
    width: 150px;
    border-radius: var(--radius-md);
    box-shadow: 0 0 5px 5px var(--shadow-subtle);
  }

  .content .item {
    padding: 0.5em;

    background: var(--transparent-gradient);
    border: 2px solid var(--color-border-transparent-subtle-alt);

    border-radius: 8px;
    font-size: clamp(0.8em, 2dvw, 0.9em);

    transition: 0.3s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .content .item:hover {
    transform: scale(1.03);
  }

  .content .item .icon {
    background: var(--color-bg-transparent);
    border-radius: var(--radius-sm);
  }
</style>

<script setup>
  import { icons } from "/src/assets/icons/icons.js"
  import { personalLinks } from "/src/locales/portfolioConfig.js"

  import Icon from "/src/components/common/Icon.vue"
</script>
