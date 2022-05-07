import React, { useEffect, useState } from "react"
import * as styles from "../../styles/layout/_Nav.module.scss"

interface iScrollNav {
    scrollRatio?: number
}

function ScrollNav({ scrollRatio }: iScrollNav) {
    useEffect(() => {
        console.log(scrollRatio)
    }, [scrollRatio])

    return (
        <section
            s-length="100%"
            style={{ height: "4px" }}
            className={styles.scrollNav}
        >
            <div
                className={styles.scrollNav__thumb}
                style={
                    scrollRatio ? { width: `${scrollRatio}%` } : { width: 0 }
                }
            />
        </section>
    )
}

export default ScrollNav
