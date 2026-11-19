export const THEMES = {
    LIGHT: "light",
    DARK: "dark"
} as const

export const THEME_PREFERENCES = {
    ...THEMES,
    SYSTEM: "system"
} as const