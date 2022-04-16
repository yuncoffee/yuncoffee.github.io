import React from "react"
import styles from "../../../../styles/elements/_Field.module.scss"
import { iCheckbox } from "../../../models/components"
const Checkbox = ({
    group,
    ly_value, // 체크박스 이름
    index, // 몇 번째 체크박스인지 확인하기 위함
    className = undefined,
    invalid = undefined,
    disabled = undefined,
    ly_ref,
    onClick,
    onChange,
    checkboxState,
    setCheckboxState,
}: iCheckbox) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let selfcheck = [index]
        let newCheckboxstate
        if (checkboxState.includes(index)) {
            newCheckboxstate = checkboxState.filter((id: number) => {
                return id !== index
            })
        } else {
            newCheckboxstate = selfcheck.concat(checkboxState)
        }
        setCheckboxState(newCheckboxstate)
    }

    return (
        <>
            <div
                className={
                    className
                        ? styles.checkbox + " " + className
                        : styles.checkbox
                }
            >
                <label
                    htmlFor={"checkbox-" + index}
                    className={
                        checkboxState.includes(index)
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
                    id={"checkbox-" + index}
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
                    checked={checkboxState.includes(index)}
                    ref={ly_ref}
                />
            </div>
        </>
    )
}

export default Checkbox
