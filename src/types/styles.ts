import { BORDER_RADIUS, PADDING } from "../constants/styles.ts"

export type PaddingType = typeof PADDING[keyof typeof PADDING]
export type BorderType = typeof BORDER_RADIUS[keyof typeof BORDER_RADIUS]