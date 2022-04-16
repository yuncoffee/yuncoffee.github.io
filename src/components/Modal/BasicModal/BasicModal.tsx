import React, { Children } from "react"
import styles from "../../../../styles/layout/_Modal.module.scss"
import mainStyles from "../../../../styles/layout/_Main.module.scss"
import ModalHeader from "./ModalHeader"
import ModalFooter from "./ModalFooter"
import ModalBody from "./ModalBody"

interface iBasicModal {
    name: string
    children: React.ReactNode
    backgroundClassName?: string
    modalClassName?: string
}

function BasicModal({
    name,
    children,
    backgroundClassName,
    modalClassName,
}: iBasicModal) {
    let childrenArr = React.Children.toArray(children)

    return (
        <div
            className={
                backgroundClassName
                    ? mainStyles.modalBackground + " " + backgroundClassName
                    : mainStyles.modalBackground
            }
        >
            <article
                className={
                    modalClassName
                        ? styles.modal + " " + modalClassName
                        : styles.modal
                }
            >
                <ModalHeader name={name}>{childrenArr[0]}</ModalHeader>
                <ModalBody>{childrenArr[1]}</ModalBody>
                <ModalFooter>{childrenArr[2]}</ModalFooter>
            </article>
        </div>
    )
}

export default BasicModal
