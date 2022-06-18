import React, {
    useEffect,
    useContext,
    useState,
    useCallback,
    useRef,
    ReactChild,
} from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

import { windowContext } from "../Provider/Provider"
import { debounce, throttle } from "lodash"

import Button from "../../components/Elements/Button/Button"
import Icon from "../../components/Elements/Button/Icon"
import PageHeader from "../Header/PageHeader"
import PageFooter from "../Footer/PageFooter"
import PageNav from "../Nav/PageNav"
import ScrollNav from "../Nav/ScrollNav"
import { Helmet } from "react-helmet"
import * as styles from "../../styles/layout/_Main.module.scss"
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

    useEffect(() => {
        const url = window.location.pathname
        console.log(url)
    }, [])

    const mainNavRef = useRef<HTMLElement>(null)
    const [windowWidthState, setWindowWidthState] = useState<number>(
        isBrowser ? window.innerWidth : 0
    )
    const handleWindowSize = useCallback(() => {
        setWindowWidthState(window.innerWidth)
    }, [])

    const [currentScrollHeight, setCurrentScrollHeight] = useState(
        isBrowser ? window.scrollY : 0
    )
    const [wholeScrollHeight, setWholeScrollHeight] = useState(0)
    const [scrollRatio, setScrollRatio] = useState(0)
    const [currentPage, setCurrentPage] = useState(
        isBrowser ? window.location.pathname : 0
    )
    const conContentsRef = useRef<HTMLElement>(null)
    const contentsHeaderRef = useRef<HTMLDivElement>(null)
    const [isContentsScroll, setIsContentsScroll] = useState(false)

    const calcContentsScroll = () => {
        let topPosition = conContentsRef.current?.scrollTop

        if (topPosition! > 50) {
            setIsContentsScroll(true)
        } else if (isContentsScroll && topPosition! > 50) {
            return
        } else {
            setIsContentsScroll(false)
        }
    }

    useEffect(() => {
        conContentsRef.current?.addEventListener(
            "scroll",
            throttle(calcContentsScroll, 500)
        )
    }, [])

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

    const linkList = ["blog", "project", "contact"]
    const linkIconList = [
        { iconName: "ri-github-fill ri-xl" },
        { iconName: "ri-google-fill ri-xl" },
        { iconName: "ri-kakao-talk-fill ri-xl" },
    ]

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
            <main className={styles.main}>
                {/* profile */}
                <aside className={styles.main__nav} ref={mainNavRef}>
                    <div className={styles.main__nav__header}>
                        <h2
                            s-font-size="h1"
                            s-font-weight="200"
                            s-color="sy-pri"
                            s-padding-btm="8px"
                        >
                            Menu
                        </h2>
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
                    <section
                        s-height="100%"
                        s-box="v-box"
                        s-justify="space-between"
                    >
                        {/* profile */}
                        <section s-padding-x="16px">
                            <section
                                className={styles.main__nav__profile}
                            ></section>
                            <ul className={styles.main__nav__list}>
                                {linkList.map((link, index) => {
                                    return (
                                        <li
                                            className={
                                                currentPage === `/${link}`
                                                    ? `${styles.main__nav__listItem} ${styles.isActive}`
                                                    : styles.main__nav__listItem
                                            }
                                            key={index}
                                        >
                                            <Link to={`/${link}`}>
                                                <h2 s-font-weight="300">
                                                    {link}
                                                </h2>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                        <section className={styles.main__nav__contact}>
                            {/* icons */}
                            <div s-box="h-box" s-gap="2px">
                                {linkIconList.map((linkIcon, index) => {
                                    return (
                                        <Icon
                                            iconName={linkIcon.iconName}
                                            type="text"
                                            size="xl"
                                            key={index}
                                        />
                                    )
                                })}
                            </div>
                        </section>
                    </section>
                </aside>

                {/* post */}
                <section className={styles.main__contents} ref={conContentsRef}>
                    <div
                        className={
                            isContentsScroll
                                ? `${styles.main__contents__header} ${styles.isActive}`
                                : styles.main__contents__header
                        }
                        ref={contentsHeaderRef}
                    >
                        <h1
                            s-length="100%"
                            s-color="sy-pri"
                            s-font-weight="200"
                            s-padding-btm="8px"
                        >
                            {pageTitle === "coffee.log"
                                ? "My project"
                                : pageTitle}
                        </h1>
                    </div>
                    <div className={styles.main__contents__body}>
                        {children}
                    </div>
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
                </section>
            </main>
            <PageFooter />
        </>
    )
}
export default Layout
