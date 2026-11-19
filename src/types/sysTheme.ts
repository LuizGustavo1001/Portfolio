import type { THEME_PREFERENCES, THEMES } from "../constants/sysTheme"

export type SysTheme = typeof THEMES[keyof typeof THEMES]
export type SysThemePref = typeof THEME_PREFERENCES[keyof typeof THEME_PREFERENCES]