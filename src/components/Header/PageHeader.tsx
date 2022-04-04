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
            <div className={styles.mainHeader__deco}></div>
            <div className={styles.mainHeader__deco__box}>
                <h5 s-font-weight="600">{title}</h5>
            </div>
            <div>
                {/* <StaticImage
                    src="../images/logo/my_logo.png"
                    alt="커피곰의 로고입니다."
                /> */}
            </div>
            <nav s-box="h-box">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/info">About</Link>
                    </li>
                </ul>
            </nav>
            <div>{title}</div>
        </header>
    )
}

export default PageHeader
