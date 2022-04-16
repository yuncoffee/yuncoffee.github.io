import { Link } from "gatsby"
import React from "react"
import * as styles from "../../styles/layout/_Header.module.scss"
import { StaticImage } from "gatsby-plugin-image"
interface iPageHeader {
    title: string
}

function PageHeader({ title }: iPageHeader) {
    return (
        <header className={styles.mainHeader}>
            <div s-box="h-box" s-justify="space-between" s-padding-right="16px">
                <div s-box="h-box" s-align="center">
                    <Link to="/">
                        <StaticImage
                            src="../images/logo/my_logo.png"
                            alt="커피곰의 로고입니다."
                        />
                    </Link>
                </div>
            </div>
            {/* <h5 s-font-weight="600">{title}</h5> */}
        </header>
    )
}

export default PageHeader
