import React from "react"
import styles from "../../../../styles/elements/_Field.module.scss"
import { iTextArea } from "../../../models/components"

const Textarea = ({
    s_type = "block",
    size = "sm",
    name,
    className,
    placeholder,
    invalid,
    ly_ref,
    disabled,
    ly_focus,
    length,
    height,
    onClick,
    onChange,
    ly_value,
    readOnly,
}: iTextArea) => {
    return (
        <>
            <textarea
                className={
                    className
                        ? styles.textarea + " " + className
                        : styles.textarea
                }
                name={name}
                placeholder={placeholder}
                ly-size={size}
                ly-type={s_type}
                ly-invalid={invalid}
                disabled={disabled}
                ly-focus={ly_focus}
                style={{ width: `${length}`, height: `${height}` }}
                onClick={onClick}
                onChange={onChange}
                defaultValue={ly_value}
                ref={ly_ref}
                readOnly={readOnly}
            />
        </>
    )
}

export default Textarea
