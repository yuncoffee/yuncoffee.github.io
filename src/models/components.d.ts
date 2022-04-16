type btnStyleType =
    | "box"
    | "box-line"
    | "block"
    | "block-line"
    | "round"
    | "round-line"
    | "text"
    | "box-ghost"
    | "block-ghost"
    | "round-ghost"
type btnSize = "xs" | "sm" | "mid" | "lg" | "xl"
type btnUse = "default" | "cancel" | "warning"

interface ibtnStyle {
    name: string
    type?: btnStyleType
    size?: btnSize
    use?: btnUse
    className?: string
    customColor?: {
        className: string
        hue: number
        saturation: number
        lightness: number
    }
    length?: string
    icon?: boolean
    disabled?: boolean
    iconName?: string
    ly_ref?: React.RefObject<HTMLButtonElement>
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    dataName?: string
    dataValue?: string
}

export interface iBtn extends ibtnStyle {
    iconPosition?: "before" | "after"
}

export interface iIcon extends ibtnStyle {}
