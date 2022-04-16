import { Link } from "gatsby"

import React, { useEffect, useState } from "react"
import * as styles from "../../styles/layout/_Nav.module.scss"
import Button from "../Elements/Button/Button"
import { Router } from "@reach/router"

function PageNav() {
    const [pathState, setPathState] = useState(window.location.pathname)

    useEffect(() => {
        setPathState(window.location.pathname)
        console.log(pathState)
    }, [pathState])

    return (
        <nav className={styles.pageNav}>
            <Link to="/">
                <Button
                    name="Home"
                    type={pathState === "/" ? "block" : "block-ghost"}
                />
            </Link>
            <Link to="/info">
                <Button
                    name="About"
                    type={pathState === "/info" ? "block" : "block-ghost"}
                />
            </Link>
        </nav>
    )
}

export default PageNav
