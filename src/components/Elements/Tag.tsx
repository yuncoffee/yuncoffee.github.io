import React from "react"
import styles from "../../../styles/elements/_Badge.module.scss"
import { iTag } from "../../models/components"

function Tag({ data, className, type = "block" }: iTag) {
    return (
        <label
            s-label="label"
            ly-type={type}
            className={className ? styles.tag + " " + className : styles.tag}
        >
            {data}
        </label>
    )
}

export default Tag
