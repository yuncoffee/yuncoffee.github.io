export const checkDeviceType = (width: number) => {
    if (width > 0) {
        if (width < 757) {
            return 0
        }
        if (width >= 757 && width < 1280) {
            return 1
        }
        if (width >= 1280) {
            return 2
        }
    } else {
        return null
    }
}
