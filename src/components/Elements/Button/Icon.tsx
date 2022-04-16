import React from "react"
import * as styles from "../../../styles/elements/_Button.module.scss"
import { iIcon } from "../../../models/components"

const Icon = ({
    className = "",
    type = "block",
    size = "sm",
    use = "default",
    iconName = "ri-cloud-fill",
    disabled = false,
    ly_ref,
    onClick = () => {
        console.log("default : 전달받은 이벤트가 없어요")
    },
}: iIcon) => {
    return (
        <>
            <button
                className={
                    className ? styles.icon + " " + className : styles.icon
                }
                ly-size={size}
                ly-type={type}
                ly-use={use}
                disabled={disabled}
                onClick={onClick}
                ref={ly_ref}
            >
                <i className={iconName + " ri-lg"} />
            </button>
        </>
    )
}

export default Icon
