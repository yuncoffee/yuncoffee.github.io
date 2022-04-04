import React, { Children } from "react"
import styles from "../../../../styles/layout/_Modal.module.scss"

interface iModalHeader {
    name: string
    children: React.ReactNode
}

function ModalHeader({ name, children }: iModalHeader) {
    return (
        <section className={styles.modal__header}>
            <h4>{name}</h4>
            {children}
        </section>
    )
}

export default ModalHeader
