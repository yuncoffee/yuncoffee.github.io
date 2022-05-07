import React, { useEffect, useRef } from "react"
import * as styles from "../../../styles/elements/_Field.module.scss"

const Toggle = ({
    toggleState = false,
    setToggleState,

    className,
    ly_size = "sm",
    disabled,
    ly_ref,
}: any) => {
    const toggleRef = useRef<any>()
    let isDisabled = disabled

    useEffect(() => {
        let height = toggleRef.current.getBoundingClientRect().height
        toggleRef.current.style.width = `${height}px`

        if (toggleState) {
            toggleRef.current.style.transform = `translateX(50%)`
        } else {
            toggleRef.current.style.transform = `translateX(-50%)`
        }
    })

    const handleToggle = (e: any) => {
        let value = e.currentTarget.dataset.value

        if (value === "true") {
            setToggleState(false)
        } else {
            setToggleState(true)
        }
    }

    const blockClick = (e: any) => {
        if (isDisabled) {
            e.stopPropagation()
        }
    }

    return (
        <button
            className={
                className ? styles.toggle + " " + className : styles.toggle
            }
            s-display="flex"
            s-padding="2px"
            ly-size={ly_size}
            onClick={(e) => {
                handleToggle(e)
            }}
            data-value={toggleState}
            disabled={disabled}
        >
            <div
                className={styles.toggle__item}
                onClick={(e) => {
                    blockClick(e)
                }}
                ref={toggleRef}
            ></div>
        </button>
    )
}

export default Toggle
