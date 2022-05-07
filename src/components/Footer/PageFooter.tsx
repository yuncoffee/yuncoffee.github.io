import React from "react"
import * as styles from "../../styles/layout/_Footer.module.scss"
function PageFooter() {
    return (
        <footer className={styles.mainFooter}>
            <h6 s-color="sy-gray-07" s-length="100%" s-text-align="center">
                build by gatsby.js 2022.05.08
            </h6>
        </footer>
    )
}

export default PageFooter
