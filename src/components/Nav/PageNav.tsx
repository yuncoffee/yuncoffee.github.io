import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import * as styles from "../../styles/layout/_Nav.module.scss"
import Button from "../Elements/Button/Button"
import { Router } from "@reach/router"
import Field from "../Elements/Field/Field"
import Icon from "../Elements/Button/Icon"

interface iPageNav {
    windowWidthState: number
    handleToggleMainNav: () => void
}

function PageNav({ windowWidthState, handleToggleMainNav }: iPageNav) {
    const [pathState, setPathState] = useState(window.location.pathname)

    useEffect(() => {
        console.log(windowWidthState)
        setPathState(window.location.pathname)
        console.log(pathState)
    }, [pathState])

    return (
        <nav className={styles.pageNav}>
            <div>
                {windowWidthState > 757 ? (
                    <div s-box="h-box" s-gap="4px">
                        <Field
                            type="text"
                            s_type="block-line"
                            placeholder="검색"
                        />
                        <Button type="block" name="검색" />
                        {/* <Link to="/">
                            <Button
                                name="Home"
                                type={
                                    pathState === "/" ? "block" : "block-ghost"
                                }
                            />
                        </Link>
                        <Link to="/info">
                            <Button
                                name="About"
                                type={
                                    pathState === "/info"
                                        ? "block"
                                        : "block-ghost"
                                }
                            />
                        </Link> */}
                    </div>
                ) : (
                    <div>
                        <Icon
                            iconName="ri-menu-fill"
                            type="block-ghost"
                            onClick={() => {
                                handleToggleMainNav()
                            }}
                        />
                    </div>
                )}
            </div>
            {/* <form s-box="h-box" s-gap="4px" s-length="100%">
                <Field
                    length={windowWidthState > 757 ? "" : "100%"}
                    s_type="block-line"
                    type="text"
                    placeholder="검색하시던가요"
                />
                <Button name="검색" />
            </form> */}
        </nav>
    )
}

export default PageNav
