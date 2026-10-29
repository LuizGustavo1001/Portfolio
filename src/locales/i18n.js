import { watch } from "vue"
import { createI18n } from "vue-i18n"
import ptBR from "/src/locales/pt-BR.js"
import enUS from "/src/locales/en-US.js"
import { currentLanguage, LANGUAGES } from "../composables/useLanguage.js"

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: currentLanguage.value,
    fallbackLocale: LANGUAGES["EN_US"],
    messages: {
        ptBR,
        enUS
    }
})

// Watch language update
watch(currentLanguage, (newLanguage) => {
    i18n.global.locale.value = newLanguage
})
