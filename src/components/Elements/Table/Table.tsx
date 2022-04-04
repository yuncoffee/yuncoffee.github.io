import React, { Children } from "react"
import styles from "../../../../styles/elements/_Table.module.scss"

import { iTable } from "../../../models/components"

function Table({ header, body, className }: iTable) {
    return (
        <table className={styles.table + " " + className}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>{header}</tr>
            </thead>
            <tbody className={styles.tbody} s-box="v-box" s-gap="2px">
                {body}
            </tbody>
        </table>
    )
}

export default Table
