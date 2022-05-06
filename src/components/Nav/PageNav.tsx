import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import * as styles from "../../styles/layout/_Nav.module.scss"
import Button from "../Elements/Button/Button"
import { Router } from "@reach/router"
import Field from "../Elements/Field/Field"

interface iPageNav {
    windowWidthState: number
}

function PageNav({ windowWidthState }: iPageNav) {
    const [pathState, setPathState] = useState(window.location.pathname)

    useEffect(() => {
        setPathState(window.location.pathname)
        console.log(pathState)
    }, [pathState])

    console.log(windowWidthState)

    return (
        <nav className={styles.pageNav}>
            {windowWidthState > 757 ? (
                <div s-box="h-box" s-gap="8px">
                    <Link to="/">
                        <Button
                            name="Home"
                            type={pathState === "/" ? "block" : "block-ghost"}
                        />
                    </Link>
                    <Link to="/info">
                        <Button
                            name="About"
                            type={
                                pathState === "/info" ? "block" : "block-ghost"
                            }
                        />
                    </Link>
                </div>
            ) : (
                ""
            )}
            <form s-box="h-box" s-gap="4px" s-length="100%">
                <Field
                    length={windowWidthState > 757 ? "" : "100%"}
                    s_type="block-line"
                    type="text"
                    placeholder="검색하시던가요"
                />
                <Button name="검색" />
            </form>
        </nav>
    )
}

export default PageNav
