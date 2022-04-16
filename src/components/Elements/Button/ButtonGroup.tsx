import React, { useState } from "react"
import styles from "../../../../styles/elements/_Button.module.scss"
import { iButtonGroup } from "../../../models/components"

const ButtonGroup = ({
    buttons,
    size = "sm",
    type = "block",
    className,
    defaultButton,
    icon = false,
    iconNames,
    iconPosition = "before",
    onClick,
}: iButtonGroup) => {
    const [clickedId, setClickedId] = useState(-1)
    const [isDefault, setIsDefault] = useState("true")

    const handleClick = (event: any, id: number) => {
        setIsDefault("false")
        setClickedId(id)
        onClick!(event)
    }

    return (
        <>
            <div
                s-display="flex"
                s-padding="2px"
                s-gap="4px"
                s-radius="4px"
                className={
                    className
                        ? styles.buttongroup + " " + className
                        : styles.buttongroup
                }
            >
                {buttons.map((buttonLabel: string, i: number) => (
                    <button
                        key={i}
                        ly-type={type}
                        ly-use="default"
                        ly-size={size}
                        style={{ width: `100%` }}
                        name={buttonLabel}
                        ly-default={
                            defaultButton === buttons[i] ? isDefault : "false"
                        }
                        onClick={(event) => handleClick(event, i)}
                        className={
                            i === clickedId
                                ? styles.button + " " + styles.isActive
                                : styles.button
                        }
                    >
                        {iconPosition === "after" ? buttonLabel : ""}
                        {/* 아이콘이 있을 경우만 생성 */}
                        {icon ? (
                            <div className="icon">
                                <i className={iconNames![i] + " ri-1x"}></i>
                            </div>
                        ) : (
                            ""
                        )}
                        {iconPosition === "before" ? buttonLabel : ""}
                    </button>
                ))}
            </div>
        </>
    )
}

export default ButtonGroup
