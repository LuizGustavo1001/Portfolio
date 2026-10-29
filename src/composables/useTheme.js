import { ref } from "vue"

export const THEMES = {
    LIGHT: "light",
    DARK: "dark"
}

export const THEME_PREFERENCES = {
    ...THEMES,
    SYSTEM: "system"
}

const themePreferences = Object.values(THEME_PREFERENCES)
let themeIndex = 0

const currentTheme = ref(THEMES.LIGHT) // current applied theme
const currentPreference = ref(THEME_PREFERENCES.SYSTEM) // user's preference selection

export function useTheme() {
    /**
     * Sets the current theme preference from:
     * 1. Session Storage
     * 2. System Default
     **/
    const initToggleTheme = () => {
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

        if(preference === THEME_PREFERENCES.SYSTEM){
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

        if(nextPreference === THEME_PREFERENCES.SYSTEM){
            setSystemPreference()
            return
        }

        setBodyClass(nextPreference)
    }

    /**
     * Set the `body` element class representing the selected theme and update current apllied theme
     *
     * @param { String } nextTheme
     **/
    const setBodyClass = (nextTheme) => {
        if(!Object.values(THEMES).includes(nextTheme) ) return

        // Remove all theme classes from body and add current one
        document.body.classList.remove(...Object.values(THEMES))
        document.body.classList.add(nextTheme)

        // Update current applied theme
        currentTheme.value = nextTheme
    }

    const setSessionStorage = (nextTheme) => {
        sessionStorage.setItem("theme", nextTheme)
    }

    const setSystemPreference = () => {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        setBodyClass(systemDark
            ? THEMES.DARK
            : THEMES.LIGHT
        )
    }

    const getFormatted = (theme) => {
        if(theme === "darkTheme") return THEMES.DARK
        if(theme === "lightTheme") return THEMES.DARK

        return theme
    }

    return { initToggleTheme, currentTheme, currentPreference, toggleTheme }
}