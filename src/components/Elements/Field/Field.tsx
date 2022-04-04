import React from "react"
import styles from "../../../../styles/elements/_Field.module.scss"
import { iField } from "../../../models/components"

const Field = ({
    type,
    s_type,
    size = "sm",
    name,
    disabled,
    className,
    placeholder,
    invalid,
    length,
    ly_focus,
    ly_value,
    ly_ref,
    onClick,
    onChange,
    onKeyDown,
    autoComplete,
    readOnly,
}: iField) => {
    return (
        <>
            {type === "radio" ? (
                // input : radio
                <></>
            ) : type === "checkbox" ? (
                // input : checkbox
                <></>
            ) : (
                // input : text...
                <input
                    className={
                        className
                            ? styles.input + " " + className
                            : styles.input
                    }
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    ly-size={size}
                    ly-type={s_type}
                    ly-invalid={invalid}
                    disabled={disabled}
                    ly-focus={ly_focus}
                    style={length ? { width: `${length}` } : {}}
                    defaultValue={ly_value}
                    onClick={onClick}
                    onChange={onChange}
                    ref={ly_ref}
                    onKeyDown={onKeyDown}
                    readOnly={readOnly}
                />
            )}
        </>
    )
}

export default Field
