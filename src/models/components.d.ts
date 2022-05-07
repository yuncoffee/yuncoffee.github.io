import React from "react"

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

type fieldStyleType =
    | "box"
    | "box-line"
    | "block"
    | "block-line"
    | "round"
    | "round-line"
    | "text"
    | "underline"

interface ibtnStyle {
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
    name: string
    iconPosition?: "before" | "after"
}

export interface iIcon extends ibtnStyle {}

export interface iField {
    type: string
    s_type: fieldStyleType
    size?: btnSize
    name?: string
    disabled?: boolean
    className?: string
    placeholder?: string
    invalid?: string
    length?: string
    ly_focus?: string
    ly_value?: string
    ly_ref?: React.LegacyRef<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
    autoComplete?: string
    readOnly?: boolean
}
