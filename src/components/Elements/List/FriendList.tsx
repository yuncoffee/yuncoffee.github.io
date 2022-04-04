import React from "react"
import Icon from "../Button/Icon"
import styles from "../../../../styles/elements/_List.module.scss"
import Profile from "../Profile"
import { iFriendList } from "../../../models/components"

function FriendList({
    friendName,
    friendEmail,
    firendProfile,
    userState,
}: iFriendList) {
    return (
        <li className={styles.credentialList}>
            <div s-box="h-box" s-gap="4px" s-align="center">
                {/* profile Image */}
                <Profile userState={userState} firendProfile={firendProfile} />
                <div s-box="v-box">
                    <h5 s-color="sy-gray-07">{friendName}</h5>
                    <h6 s-color="sy-gray-06">{friendEmail}</h6>
                </div>
            </div>
            <Icon
                className={styles.credentialList__btn}
                iconName="ri-more-2-fill"
                type="block-ghost"
            />
        </li>
    )
}

export default FriendList
