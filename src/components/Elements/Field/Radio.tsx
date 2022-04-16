import React, { useEffect, useRef, useState } from "react"
import styles from "../../../styles/elements/_Field.module.scss"
import { iRadio } from "../../../models/components"

const Radio = ({
    group,
    name,
    ly_value,
    className,
    invalid,
    ly_ref,
    disabled,
    onClick,
    onChange,
    radioState,
    setRadioState,
}: iRadio) => {
    return (
        <>
            <div
                className={
                    className ? styles.radio + " " + className : styles.radio
                }
            >
                <label
                    htmlFor={name}
                    className={
                        radioState === ly_value
                            ? "radio__label" + " " + styles.isChecked
                            : "radio__label"
                    }
                >
                    {ly_value}
                </label>
                <input
                    className={className}
                    name={group}
                    type="radio"
                    id={name}
                    ly-invalid={invalid}
                    disabled={disabled}
                    value={ly_value}
                    checked={radioState === ly_value}
                    onClick={onClick}
                    onChange={(e: any) => {
                        // update 함수
                        if (e.target.checked) {
                            setRadioState!(e.target.value)
                        }

                        if (onChange !== undefined) {
                            onChange(e)
                        }
                    }}
                    ref={ly_ref}
                />
            </div>
        </>
    )
}

export default Radio
