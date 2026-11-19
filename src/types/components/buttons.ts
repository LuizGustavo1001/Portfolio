import {
    ACTION_BUTTON_VARIANTS,
    BUTTON_TAGS,
    BUTTONS,
    ICON_BTN_VARIANTS
} from "../../constants/components/buttons"

export type ButtonComponent = typeof BUTTONS[keyof typeof BUTTONS]
export type ButtonTag = typeof BUTTON_TAGS[keyof typeof BUTTON_TAGS]
export type ActionBtnType = typeof ACTION_BUTTON_VARIANTS[keyof typeof ACTION_BUTTON_VARIANTS]
export type IconBtnType = typeof ICON_BTN_VARIANTS[keyof typeof ICON_BTN_VARIANTS]