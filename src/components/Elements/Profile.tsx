import React from "react"
import styles from "../../../styles/elements/_List.module.scss"
import { iProfileIcon } from "../../models/components"

function Profile({ firendProfile, userState }: iProfileIcon) {
    return (
        <div>
            <div
                className={
                    userState === "isEdit"
                        ? styles.con_profileImg + " " + styles.isEdit
                        : userState === "isOnline"
                        ? styles.con_profileImg + " " + styles.isOnline
                        : userState === "isOffline"
                        ? styles.con_profileImg + " " + styles.isOffline
                        : styles.con_profileImg
                }
            >
                <div
                    className={styles.profileImg}
                    style={
                        firendProfile
                            ? {
                                  // TODO: 이미지 절대경로 위치 바뀔 수 있음
                                  background: `url(/images/${firendProfile}.png) no-repeat center /
                        cover`,
                              }
                            : {}
                    }
                />
            </div>
        </div>
    )
}

export default Profile
