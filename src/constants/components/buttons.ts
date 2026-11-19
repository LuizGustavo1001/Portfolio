import ActionButtonSwap from "../../components/buttons/ActionButtonSwap.vue"
import IconBtn from "../../components/buttons/IconBtn.vue"
import Icon from "../../components/common/Icon.vue"

export const BUTTONS = {
    ACTION_BUTTON: ActionButtonSwap,
    ICON_BUTTON: IconBtn,
    ICON: Icon
} as const

export const BUTTON_TAGS = {
    BUTTON: "button",
    LINK: "a"
}

export const ACTION_BUTTON_VARIANTS = {
    REVERSE: "reverse",
    PRIMARY: "primary"
} as const

export const ICON_BTN_VARIANTS = {
    REVERSE: "reverse",
    TRANSPARENT: "transparent",
    SUBTLE: "subtle",
    PRIMARY: "primary"
} as const