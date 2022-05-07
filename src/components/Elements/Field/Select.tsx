import React, { useEffect, useRef, useState } from "react"
import * as styles from "../../../styles/elements/_Field.module.scss"

// import { iSelect } from "../../../models/components"

const Select = ({
    name,
    options,
    selectState,
    setSelectState,
    className,
    defaultSelected,
    ly_size = "sm",
    ly_type = "block",
    ly_optionType = "block-line",
    ly_ref,
    index,
    onChange,
}: any) => {
    // 각 list-item에 state 바인딩
    const handleSelectItem = (e: any) => {
        if (setSelectState !== undefined) {
            setSelectState(e.target.dataset.value)
        }
        if (onChange !== undefined) {
            onChange(e)
        }
    }
    // select__box toggle state
    const [isActive, setIsActive] = useState<boolean>(false)

    const optionRef = useRef<any>()
    const boxRef = useRef<any>()

    // select animation
    useEffect(() => {
        if (isActive) {
            let optionsHeight = optionRef.current.scrollHeight + 3
            let boxHeight = boxRef.current.scrollHeight

            optionRef.current.style.height = `${optionsHeight}px`
            optionRef.current.style.transform = `translate(0 ,${
                boxHeight + 4
            }px)`
        } else {
            optionRef.current.style.height = `1px`
            optionRef.current.style.transform = `translate(0, 0)`
        }
    }, [isActive])

    return (
        <>
            <div
                className={
                    className ? styles.select + " " + className : styles.select
                }
                onClick={(e) => {
                    setIsActive(!isActive)
                }}
                data-focus={isActive ? "true" : "false"}
                data-index={index}
                ref={ly_ref}
            >
                <select
                    name={name}
                    onChange={(e) => {
                        handleSelectItem(e)
                    }}
                >
                    {options.map((option: any, i: number) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        )
                    })}
                </select>
                <div
                    className={
                        isActive
                            ? styles.select__customBox + " " + styles.isActive
                            : styles.select__customBox
                    }
                    ref={boxRef}
                    ly-size={ly_size}
                    ly-type={ly_type}
                    data-focus={isActive ? "true" : "false"}
                >
                    {selectState}
                    <div className={styles.select__icon}>
                        <i className="ri-arrow-drop-down-fill ri-1x"></i>
                    </div>
                    <ul
                        // className={styles.select__customOption}
                        ref={optionRef}
                        ly-type={ly_optionType}
                    >
                        {options.map((option: any, i: number) => {
                            return (
                                <li
                                    key={i}
                                    // className={
                                    //     styles.select__customOption__item
                                    // }
                                    onClick={(e) => {
                                        handleSelectItem(e)
                                    }}
                                    data-value={option.value}
                                >
                                    {option.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Select
