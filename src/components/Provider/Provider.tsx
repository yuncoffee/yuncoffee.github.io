import React, { Dispatch, useState } from "react"

export const windowContext = React.createContext<any>({})
interface iWindowSize {
    width: number
    height: number
}

const Provider = (props: any) => {
    const [isTheme, setTheme] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [windowSizeState, setWindowSizeState] = useState<iWindowSize>({
        width: 0,
        height: 0,
    })

    return (
        <windowContext.Provider
            value={{
                windowSizeState,
                changeWindowSize: (size: iWindowSize) =>
                    setWindowSizeState(size),
                isTheme,
                changeTheme: (theme: boolean) => {
                    setTheme(theme)
                },
                isMobile,
                changeDevice: (result: boolean) => {
                    setIsMobile(result)
                },
            }}
        >
            {props.children}
        </windowContext.Provider>
    )
}

export default ({ element }: any) => <Provider>{element}</Provider>
