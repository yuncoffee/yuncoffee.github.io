import React from "react"

import * as styles from "../../../styles/elements/_Button.module.scss"
import { iBtn } from "../../../models/components"

function Button({
    name = "버튼",
    type = "block",
    size = "sm",
    use = "default",
    className,
    length,
    disabled = false,
    icon = false,
    iconName,
    iconPosition = "before",
    customColor,
    ly_ref,
    onClick = () => {
        console.log("default : 전달받은 이벤트가 없어요")
    },
}: iBtn) {
    let defaultColor // 커스텀 기본 색상
    let darkenColor // 커스텀 호버 색상
    let transColor // 커스텀 투명 색상
    let colorClassName // 커스텀 컬러 className

    if (customColor !== undefined) {
        colorClassName = customColor.className
        defaultColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${customColor.lightness}% , 1)`
        darkenColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${
            customColor.lightness - 10
        }% , 1)`
        transColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${customColor.lightness}% , 0)`
    }

    return (
        <>
            <button
                className={
                    className ? styles.button + " " + className : styles.button
                }
                ly-size={size}
                ly-type={type}
                ly-use={use}
                disabled={disabled}
                style={length ? { width: `${length}` } : {}}
                type="button"
                onClick={onClick}
                ref={ly_ref}
            >
                {iconPosition === "after" ? name : ""}
                {/* 아이콘이 있을 경우만 생성 */}
                {icon ? (
                    <div
                        className="icon"
                        s-box="h-box"
                        s-justify="center"
                        s-align="center"
                    >
                        <i className={iconName + " ri-1x"}></i>
                    </div>
                ) : (
                    ""
                )}
                {iconPosition === "before" ? name : ""}
            </button>
        </>
    )
}

export default Button
