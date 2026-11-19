import { watch } from "vue"
import { createI18n } from "vue-i18n"
import ptBR from "../locales/pt-BR"
import enUS from "../locales/en-US"
import { currentLanguage } from "../composables/useLanguage.ts"
import { LANGUAGES } from "../constants/sysLanguages.ts"

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
