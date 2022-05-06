import React, { useEffect } from "react"
import * as styles from "../../../styles/elements/_Field.module.scss"
// import { iAllCheckbox } from "../../../models/components"
function AllCheckbox({
    checkboxInfo,
    checkedState,
    setCheckedState,
    className,
    index,
    ly_value,
    group,
    invalid,
    disabled,
    ly_ref,
    onClick,
    onChange,
}: any) {
    const handleOnChange = (e: any) => {
        if (checkedState.length === checkboxInfo.length) {
            setCheckedState([])
        } else {
            const allCheck = Object.keys(checkboxInfo).map((key) => {
                return parseInt(key)
            })
            setCheckedState(allCheck)
        }
    }

    return (
        <div
            className={
                className ? styles.checkbox + " " + className : styles.checkbox
            }
        >
            <label
                htmlFor={"checkbox-all-" + index}
                className={
                    checkedState.length === checkboxInfo.length
                        ? "checkbox__label" + " " + styles.isChecked
                        : "checkbox__label "
                }
            >
                {ly_value}
            </label>
            <input
                className={className}
                name={group}
                type="checkbox"
                id={"checkbox-all-" + index}
                ly-invalid={invalid}
                disabled={disabled}
                value={ly_value}
                onClick={onClick}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    // update 함수
                    handleOnChange(e)
                    if (onChange !== undefined) {
                        onChange(e)
                    }
                }}
                checked={checkedState.length === checkboxInfo.length}
                ref={ly_ref}
            />
        </div>
    )
}

export default AllCheckbox
