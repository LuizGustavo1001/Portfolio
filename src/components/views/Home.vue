<template>
  <section class="section-box flex gap-05 flex-column justify-center align-center relative">
    <div class="container flex gap-2 flex-column align-center text-center">
      <div class="content">
        <!-- Title -->
        <div class="title relative">
          <h1>Portfolio.</h1>
          <div class="markup absolute"></div>
        </div>

        <div class="sub-title flex gap-05 flex-column text-muted">
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

    <div ref="scrollIndicator" class="scroll-indicator flex gap-05 align-center absolute">
      <Icon :icon="icons['swipe-down']" size="30px" />
      <span aria-hidden="false">{{ $t("home.scrollLabel") }}</span>
    </div>
  </section>
</template>

<style scoped>
  .container {
    padding: 1em 3em;
    text-align: center;
    justify-content: center;

    animation: fade-in-home 0.75s cubic-bezier(.45,-0.04,0,.95);
  }
  .container h1 {
    font-family: var(--font-styling);
    font-size: clamp(3.8em, 8vw, 8em);
    letter-spacing: 0.5dvw;
  }
  .container p {
    font-size: clamp(1em, 2dvw, 1.2em);
  }
  .container .pfp {
    width: 30dvw;
    min-width: 200px;
    max-width: 400px;

    box-shadow: 0 0 20px var(--shadow);
    border-radius: var(--radius-lg);

    animation: pfp 5s cubic-bezier(.45,-0.04,0,.95) infinite;
  }

  .title {
    width: fit-content;
    margin: 0 auto;
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
    color: var(--color-text-muted);
    animation: opacity 3s ease-out infinite;
  }

  /* MEDIA QUERIES */
  @media(min-width: 1024px) {
    .container {
      text-align: inherit;
      justify-content: space-between;
      flex-direction: row;
    }
    .content {
      width: fit-content;
    }
    .right {
      text-align: right;
    }
  }

  @media(min-width: 1300px) {
    .markup {
      bottom: 25px;
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

<script setup>
  import { onMounted, onUnmounted, ref } from "vue"

  import { icons } from "/src/assets/icons/icons.js"
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  import Icon from "/src/components/common/Icon.vue"

  gsap.registerPlugin(ScrollTrigger)

  const scrollIndicator = ref(null)
  let context

  onMounted(async () => {
    context = gsap.context(() => {
      gsap.fromTo(
          scrollIndicator.value,
          {
            display: "inherit"
          },
          {
            display: "none",
            duration: 0.75,
            ease: 'power2.out',
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