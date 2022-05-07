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
            <div s-box="h-box" s-justify="space-between" s-padding-x="16px">
                <div s-box="h-box" s-align="center">
                    <Link to="/">
                        {/* <StaticImage
                            src="../../images/logo/my_logo.png"
                            alt="커피곰의 로고입니다."
                        /> */}
                        <h2
                            s-font-size="h1"
                            s-font-weight="200"
                            s-color="sy-pri"
                        >
                            coffee.log
                        </h2>
                    </Link>
                </div>
            </div>
            {/* <h5 s-font-weight="600">{title}</h5> */}
        </header>
    )
}

export default PageHeader
