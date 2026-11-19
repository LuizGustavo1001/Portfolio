import { useI18n } from "vue-i18n"
import type { BorderType, PaddingType } from "../types/styles.ts"
import { BORDER_RADIUS, PADDING } from "../constants/styles.ts"

export function useUtils() {
    const { t, te } = useI18n()

    const getTranslate = (key: string): string => {
        const hasTranslation = te(key)
        return hasTranslation ? t(key) : ""
    }

    const getPaddingStyle = (paddingKey: PaddingType) => {
        return Object.values(PADDING).includes(paddingKey)
            ? { padding: `var(--spacing-${paddingKey})` }
            : {}
    }

    const getBorderRadius = (radiusKey: BorderType) => {
        return Object.values(BORDER_RADIUS).includes(radiusKey)
            ? { borderRadius: `var(--radius-${radiusKey})` }
            : {}
    }

    return { getTranslate, getPaddingStyle, getBorderRadius }
}