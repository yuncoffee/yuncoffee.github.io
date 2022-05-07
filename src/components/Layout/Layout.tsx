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
import ScrollNav from "../Nav/ScrollNav"
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
    const [windowWidthState, setWindowWidthState] = useState<number>(
        window.innerWidth
    )
    const handleWindowSize = useCallback(() => {
        setWindowWidthState(window.innerWidth)
    }, [])

    const [currentScrollHeight, setCurrentScrollHeight] = useState(
        window.scrollY
    )
    const [wholeScrollHeight, setWholeScrollHeight] = useState(0)
    const [scrollRatio, setScrollRatio] = useState(0)

    useEffect(() => {
        window.addEventListener("resize", throttle(handleWindowSize, 200))
        window.addEventListener("load", handleWindowSize)
        window.addEventListener("scroll", () => {
            calcScrollHeight()
        })
        checkScrollHeight()
        return () => {
            window.removeEventListener("resize", handleWindowSize)
            window.removeEventListener("load", handleWindowSize)
            return window.removeEventListener("scroll", () => {
                calcScrollHeight()
            })
        }
    }, [handleWindowSize])

    useEffect(() => {
        let _ratio = Math.floor((currentScrollHeight / wholeScrollHeight) * 100)
        if (_ratio < 0) {
            setScrollRatio(0)
            return
        } else if (_ratio > 100) {
            setScrollRatio(100)
            return
        }
        setScrollRatio(_ratio)
    }, [currentScrollHeight])

    const windowDispatch = useContext(windowContext)

    useEffect(() => {
        windowDispatch.changeWindowSize({
            ...windowDispatch.windowSizeState,
            width: windowWidthState,
        })
        console.log(windowWidthState)
    }, [windowWidthState])

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

    const calcScrollHeight = () => {
        setCurrentScrollHeight(window.scrollY)
        // 현재 스크롤 / 전체 스크롤 = 스크롤 비율
    }

    const checkScrollHeight = () => {
        const _clientHeight = document.documentElement.clientHeight
        const _scrollHeight = document.documentElement.scrollHeight
        const _scrollAbleHeight = _scrollHeight - _clientHeight
        setWholeScrollHeight(_scrollAbleHeight)
    }

    const linkList = ["post", "portfolio", "contact"]

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
                <PageNav
                    windowWidthState={windowWidthState as number}
                    handleToggleMainNav={handleToggleMainNav}
                />
            ) : (
                ""
            )}
            {/* scrollbar */}
            <ScrollNav scrollRatio={scrollRatio} />
            <main className={mainStyles.main}>
                {/* profile */}
                <aside className={styles.main__nav} ref={mainNavRef}>
                    <div className={styles.main__nav__header}>
                        <h3 s-font-weight="300">menu</h3>
                        {windowDispatch.windowSizeState.width < 757 ? (
                            <Icon
                                iconName="ri-close-fill ri-xl"
                                type="text"
                                // size="xl"
                                onClick={() => {
                                    handleToggleMainNav()
                                }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                    <section s-padding-x="16px">
                        {/* profile */}
                        <section
                            className={styles.main__nav__profile}
                        ></section>
                        <ul className={styles.main__nav__list}>
                            {linkList.map((link, index) => {
                                return (
                                    <li
                                        className={styles.main__nav__listItem}
                                        key={index}
                                    >
                                        <h2 s-font-weight="300">{link}</h2>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    <section>{/* icons */}</section>
                </aside>

                {/* post */}
                <section className={styles.main__contents}>
                    <h1
                        s-color="sy-pri"
                        s-font-weight="200"
                        s-margin-btm="16px"
                        s-padding-btm="8px"
                    >
                        My project
                    </h1>
                    {/* {windowDispatch.windowSizeState.width < 757 ? (
                        <Button
                            name="출력버튼"
                            onClick={() => {
                                handleToggleMainNav()
                            }}
                        />
                    ) : (
                        ""
                    )} */}

                    {children}
                </section>
            </main>
            <PageFooter />
        </>
    )
}
export default Layout
