import { ref } from "vue"

export const LANGUAGES = {
    PT_BR: "ptBR",
    EN_US: "enUS"
}

const langPreferences = Object.values(LANGUAGES)
let langIndex = 0

export const currentLanguage = ref(LANGUAGES.PT_BR)

export function useLanguage() {
    const initLanguage = () => {
        const savedLang = sessionStorage.getItem("language")

        if (savedLang && langPreferences.includes(savedLang)) {
            setLanguage(savedLang)
            return
        }

        setSystemPreference()
    }

    const setLanguage = (nextLanguage) => {
        if(!Object.values(LANGUAGES).includes(nextLanguage)) return

        currentLanguage.value = nextLanguage

        langIndex = langPreferences.indexOf(nextLanguage)

        sessionStorage.setItem("language", nextLanguage)
    }

    const setSystemPreference = () => {
        const defaultLanguage = navigator.language.startsWith("pt")
            ? LANGUAGES.PT_BR
            : LANGUAGES.EN_US

        setLanguage(defaultLanguage)
    }

    const toggleLanguage = () => {
        langIndex = (langIndex + 1) % langPreferences.length

        setLanguage(langPreferences[langIndex])
    }

    return { initLanguage, currentLanguage, toggleLanguage }
}