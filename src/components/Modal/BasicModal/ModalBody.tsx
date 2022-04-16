import React, { Children } from "react"
import styles from "../../../../styles/layout/_Modal.module.scss"

interface iModalBody {
    children: React.ReactNode
}

function ModalBody({ children }: iModalBody) {
    return <section className={styles.modal__body}>{children}</section>
}

export default ModalBody
