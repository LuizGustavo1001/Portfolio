import { ref } from "vue"
import { useOverlay } from "./useOverlay"
import { useClickOutside } from "./useClickOutside"

export function useSidebar() {
    const isActive = ref<boolean>(false)
    const sidebarRef = ref(null)
    const toggleBtnRef = ref(null)

    const overlay = useOverlay()

    const open = (): void => {
        if(!isActive.value) {
            isActive.value = true
            overlay.show()
        }
    }

    const close = (): void => {
        if(isActive.value) {
            isActive.value = false
            overlay.hide()
        }
    }

    const toggle = (): void => {
        isActive.value ? close() : open()
    }

    useClickOutside(sidebarRef, (): void => {
        if(isActive.value) close()
    })

    return { open, close, toggle, isActive, sidebarRef, toggleBtnRef }
}