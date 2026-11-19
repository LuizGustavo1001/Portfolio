import {BADGE_VARIANTS, HIGHLIGHT_BAR_VARIANTS, type VERTICAL_LINE_VARIANTS} from "../../constants/components/common"

export type VerticalLine = typeof VERTICAL_LINE_VARIANTS[keyof typeof VERTICAL_LINE_VARIANTS]
export type HighlightBar = typeof HIGHLIGHT_BAR_VARIANTS[keyof typeof HIGHLIGHT_BAR_VARIANTS]
export type BadgeVariant = typeof BADGE_VARIANTS[keyof typeof BADGE_VARIANTS]

export type ComponentSize = `${number}px` | `${number}rem` | `${number}em` | `${number}%`