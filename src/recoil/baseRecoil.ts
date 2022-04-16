import { atom } from "recoil"

export const rcWindowSizeAtom = atom({
    key: "rcWindowSizeAtom", // unique ID (with respect to other atoms/selectors)
    default: {
        width: 0,
        height: null,
    },
})
