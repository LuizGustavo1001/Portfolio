<template>
  <section class="section-box flex gap-05 flex-column justify-center align-center relative">
    <div class="container flex gap-2 flex-column align-center text-center">
      <div class="content">
        <!-- Title -->
        <div class="title relative">
          <h1>Portfolio.</h1>
          <div class="markup absolute" />
        </div>

        <div class="subtitle flex gap-05 flex-column text-muted">
          <p><strong>Luiz Gustavo</strong> de Almeida Lopes</p>

          <i18n-t keypath="home.role"
                  tag="p"
                  scope="global"

                  class="right">
            <template #role>
              <strong>Full-Stack</strong>
            </template>
          </i18n-t>
        </div>
      </div>

      <!-- Profile Picture -->
      <img class="pfp" src="/src/assets/images/me.jpg" alt="Profile Picture" />
    </div>

    <div ref="scrollIndicator" class="scroll-indicator flex gap-05 align-center absolute text-muted">
      <Icon
          :icon="icons['swipe-down']"
          size="25px"
      />
      <span aria-hidden="false">{{ $t("home.scrollLabel") }}</span>
    </div>
  </section>
</template>

<style scoped>
  .container {
    padding: 1em 3em;
    animation: fade-in-home 0.75s cubic-bezier(.45,-0.04,0,.95);
  }
  .container h1 {
    font-size: var(--font-hero);
    letter-spacing: 0.5dvw;
  }
  .container p {
    font-size: var(--font-body-lg);
  }
  .container .pfp {
    width: 30dvw;
    min-width: 200px;
    max-width: 400px;

    box-shadow: var(--shadow-xl);
    border-radius: var(--radius-lg);

    animation: pfp 5s cubic-bezier(.45,-0.04,0,.95) infinite;
  }

  .markup {
    bottom: 10px;
    right: 0;
    width: 50%;
    height: 40%;

    background: var(--markup-color);

    z-index: -1;
  }

  .scroll-indicator {
    bottom: 0;
    animation: opacity 3s ease-out infinite;
  }

  /* MEDIA QUERIES */
  @media(min-width: 1024px) {
    .container {
      text-align: inherit;
      justify-content: space-between;
      flex-direction: row;
    }
    .right {
      text-align: right;
    }
  }

  @media(min-width: 1300px) {
    .markup {
      bottom: 20px;
    }
  }

  /* ANIMATIONS */
  @keyframes pfp {
    0%{ transform: rotate(0); }
    25%{ transform: rotate(7deg); }
    50%{ transform: rotate(-7deg); }
    100%{ transform: rotate(0); }
  }

  @keyframes fade-in-home {
    from {
      opacity: 0;
      transform: rotate(7.5deg) translateY(10dvh);
    }
    to {
      opacity: 1;
      transform: rotate(0) translateY(0);
    }
  }
</style>

<script setup lang="ts">
  import { onMounted, onUnmounted, type Ref, ref } from "vue"

  import { icons } from "../../assets/icons/icons"
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  import type { Context } from "node:vm"
  import Icon from "../../components/common/Icon.vue"

  gsap.registerPlugin(ScrollTrigger)

  const scrollIndicator: Ref<HTMLElement | null> = ref(null)
  let context: Context | undefined

  onMounted(() => {
    context = gsap.context(() => {
      gsap.fromTo(
          scrollIndicator.value,
          {
            autoAlpha: 1
          },
          {
            autoAlpha: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scrollIndicator.value,
              start: "top 50%",
              toggleActions: "play none none reverse"
            }
          }
      )
    })

    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    if (context) context.revert()
  })
</script>