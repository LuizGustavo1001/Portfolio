import { ref } from "vue"
import { THEME_PREFERENCES, THEMES } from "../constants/sysTheme"
import type { SysTheme, SysThemePref } from "../types/sysTheme"

const themePreferences: SysThemePref[] = Object.values(THEME_PREFERENCES)
let themeIndex: number = 0

const currentTheme = ref<SysTheme>(THEMES.LIGHT) // current applied theme
const currentPreference = ref<SysThemePref>(THEME_PREFERENCES.SYSTEM) // user's preference selection

export function useTheme() {
    /**
     * Sets the current theme preference from:
     * 1. Session Storage
     * 2. System Default
     **/
    const initToggleTheme = (): void => {
        const savedPreference = getFormatted(sessionStorage.getItem("theme"))

        if(!savedPreference) {
            setSystemPreference()
            return
        }

        const preference = savedPreference && themePreferences.includes(savedPreference)
            ? savedPreference
            : THEME_PREFERENCES.SYSTEM

        themeIndex = themePreferences.indexOf(preference)

        currentPreference.value = preference

        if(preference === THEME_PREFERENCES.SYSTEM) {
            setSystemPreference()
        } else {
            setBodyClass(preference)
        }
    }

    /*
     * Selects the `nextTheme` based on the `themeIndex`
     **/
    const toggleTheme = () => {
        // Go to the next theme preference
        themeIndex = (themeIndex + 1) % themePreferences.length

        // Apply nextPreference
        const nextPreference = themePreferences[themeIndex]

        currentPreference.value = nextPreference
        setSessionStorage(nextPreference)

        if(nextPreference === THEME_PREFERENCES.SYSTEM) {
            setSystemPreference()
            return
        }

        setBodyClass(nextPreference)
    }

    /**
     * Set the `body` element class representing the selected theme and update current apllied theme
     **/
    const setBodyClass = (nextTheme: SysTheme): void => {
        if(!Object.values(THEMES).includes(nextTheme)) return

        // Remove all theme classes from body and add current one
        document.body.classList.remove(...Object.values(THEMES))
        document.body.classList.add(nextTheme)

        // Update current applied theme
        currentTheme.value = nextTheme
    }

    const setSessionStorage = (nextTheme: SysThemePref): void => {
        sessionStorage.setItem("theme", nextTheme)
    }

    const setSystemPreference = (): void => {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        setBodyClass(systemDark
            ? THEMES.DARK
            : THEMES.LIGHT
        )
    }

    const getFormatted = (theme: string | null): SysTheme | null => {
        if(!theme) return null

        if(theme === "darkTheme") return THEMES.DARK
        if(theme === "lightTheme") return THEMES.DARK

        return theme as SysTheme
    }

    return { initToggleTheme, currentTheme, currentPreference, toggleTheme }
}