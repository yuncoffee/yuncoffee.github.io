import React from "react"
import Icon from "../Button/Icon"
import styles from "../../../../styles/elements/_List.module.scss"
import { iCredential } from "../../../models/components"

function CredentialList({ cspType, credentialName }: iCredential) {
    return (
        <li className={styles.credentialList}>
            <div s-box="h-box" s-gap="4px">
                <div className={styles.cspImg} s-image={`${cspType}`}></div>
                <h5 s-color="sy-gray-07">{credentialName}</h5>
            </div>
            <Icon
                className={styles.credentialList__btn}
                iconName="ri-more-2-fill"
                type="block-ghost"
            />
        </li>
    )
}

export default CredentialList
