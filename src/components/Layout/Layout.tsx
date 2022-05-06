import React, {
    useEffect,
    useContext,
    useState,
    useCallback,
    useRef,
    ReactChild,
} from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import PageHeader from "../Header/PageHeader"
import PageFooter from "../Footer/PageFooter"
import * as mainStyles from "../../styles/layout/_Main.module.scss"
import PageNav from "../Nav/PageNav"
import { windowContext } from "../Provider/Provider"
import { throttle } from "lodash"
import * as styles from "../../styles/layout/_Main.module.scss"
import Button from "../../components/Elements/Button/Button"
import Icon from "../../components/Elements/Button/Icon"
import { Helmet } from "react-helmet"
interface iLayout {
    pageTitle?: string
    children: React.ReactChild
}

const Layout = ({ pageTitle, children }: iLayout) => {
    const isBrowser = typeof window !== "undefined"
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const mainNavRef = useRef<HTMLElement>(null)
    const [windowWidthState, setWindowWidthState] = useState<number>()
    const handleWindowSize = useCallback(() => {
        setWindowWidthState(window.innerWidth)
    }, [])

    const handleToggleMainNav = () => {
        if (windowDispatch.windowSizeState.width > 757) {
            mainNavRef.current?.classList.remove(styles.isActive)
            return
        } else {
            mainNavRef.current?.classList.contains(styles.isActive)
                ? mainNavRef.current?.classList.remove(styles.isActive)
                : mainNavRef.current?.classList.add(styles.isActive)
        }
    }

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
        console.log(windowWidthState)
    }, [windowWidthState])

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <PageHeader title={data.site.siteMetadata.title} />
            {isBrowser ? (
                <PageNav windowWidthState={windowWidthState as number} />
            ) : (
                ""
            )}
            <main className={mainStyles.main}>
                {/* profile */}
                <aside className={styles.main__nav} ref={mainNavRef}>
                    <div
                        s-box="h-box"
                        s-justify="space-between"
                        s-align="center"
                    >
                        {windowDispatch.windowSizeState.width < 757 ? (
                            <Icon
                                onClick={() => {
                                    handleToggleMainNav()
                                }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </aside>

                {/* post */}
                <section className={styles.main__contents}>
                    {windowDispatch.windowSizeState.width < 757 ? (
                        <Button
                            name="출력버튼"
                            onClick={() => {
                                handleToggleMainNav()
                            }}
                        />
                    ) : (
                        ""
                    )}
                    <h1>hello</h1>
                    {children}
                </section>
            </main>
            <PageFooter />
        </>
    )
}
export default Layout
