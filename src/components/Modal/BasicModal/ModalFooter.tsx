import React, { Children } from "react"
import styles from "../../../../styles/layout/_Modal.module.scss"

interface iModalFooter {
    children: React.ReactNode
}

function ModalFooter({ children }: iModalFooter) {
    return <section className={styles.modal__footer}>{children}</section>
}

export default ModalFooter
