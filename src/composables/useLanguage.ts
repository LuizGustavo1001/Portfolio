import { ref } from "vue"
import { LANGUAGES } from "../constants/sysLanguages"
import type { SysLanguage } from "../types/sysLanguages"

const langPreferences: SysLanguage[] = Object.values(LANGUAGES)
let langIndex: number = 0

export const currentLanguage = ref<SysLanguage>(LANGUAGES.PT_BR)

export function useLanguage() {
    const includesLanguage = (language: SysLanguage): boolean => {
        return Object.values(LANGUAGES).some(
            (value) => value === language
        )
    }

    const initLanguage = (): void => {
        const savedLang = sessionStorage.getItem("language")

        if (savedLang && includesLanguage(savedLang as SysLanguage)) {
            setLanguage(savedLang as SysLanguage)
            return
        }

        setSystemPreference()
    }

    const setLanguage = (nextLanguage: SysLanguage): void => {
        if(!includesLanguage(nextLanguage)) return

        currentLanguage.value = nextLanguage

        langIndex = langPreferences.indexOf(nextLanguage)

        sessionStorage.setItem("language", nextLanguage)
    }

    const setSystemPreference = () => {
        const defaultLanguage = navigator.language.startsWith("pt")
            ? LANGUAGES.PT_BR
            : LANGUAGES.EN_US

        setLanguage(defaultLanguage as SysLanguage)
    }

    const toggleLanguage = () => {
        langIndex = (langIndex + 1) % langPreferences.length
        setLanguage(langPreferences[langIndex])
    }

    return { initLanguage, currentLanguage, toggleLanguage, includesLanguage }
}