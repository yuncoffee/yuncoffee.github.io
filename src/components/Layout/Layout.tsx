import React, { useEffect, useContext, useState, useCallback } from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import PageHeader from "../Header/PageHeader"
import PageFooter from "../Footer/PageFooter"
import * as mainStyles from "../../styles/layout/_Main.module.scss"
import PageNav from "../Nav/PageNav"
import { windowContext } from "../Provider/Provider"
import { throttle } from "lodash"
interface iLayout {
    pageTitle?: string
    children: React.ReactNode
}

const Layout = ({ pageTitle, children }: iLayout) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [windowWidthState, setWindowWidthState] = useState(0)

    const handleWindowSize = useCallback(() => {
        setWindowWidthState(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", throttle(handleWindowSize, 200))
        window.addEventListener("load", handleWindowSize)

        return () => {
            window.removeEventListener("resize", handleWindowSize)
            window.removeEventListener("load", handleWindowSize)
        }
    }, [handleWindowSize])

    const windowDispatch = useContext(windowContext)

    useEffect(() => {
        windowDispatch.changeWindowSize({
            ...windowDispatch.windowSizeState,
            width: windowWidthState,
        })
    }, [windowWidthState])

    return (
        <>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <PageHeader title={data.site.siteMetadata.title} />
            <PageNav />
            <main className={mainStyles.main}>{children}</main>
            <PageFooter />
        </>
    )
}
export default Layout
