import type { LANGUAGES } from "../constants/sysLanguages"

export type SysLanguage = typeof LANGUAGES[keyof typeof LANGUAGES]