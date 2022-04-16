import React, { useState, useEffect, useContext, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/reset.css"
import "../styles/_global.scss"
import * as styles from "../styles/layout/_Main.module.scss"
import * as mdStyles from "../styles/md.module.scss"
import { Helmet } from "react-helmet"
import PostList from "../components/PostList"
import Layout from "../components/Layout/Layout"
import { windowContext } from "../components/Provider/Provider"
import Button from "../components/Elements/Button/Button"
import Icon from "../components/Elements/Button/Icon"

// markup
const IndexPage = ({ data }: any) => {
    const isBrowser = typeof window !== "undefined"
    const windowDispatch = useContext(windowContext)
    const mainNavRef = useRef<HTMLElement>(null)

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

    return (
        <>
            <Helmet>
                <title>coffee.log</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <Layout pageTitle="coffee.log">
                {/* profile */}
                <aside className={styles.main__nav} ref={mainNavRef}>
                    <div
                        s-box="h-box"
                        s-justify="space-between"
                        s-align="center"
                    >
                        <h1>대 공사중!</h1>
                        <Icon
                            onClick={() => {
                                handleToggleMainNav()
                            }}
                        />
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
                    {isBrowser ? <PostList data={data} /> : ""}
                </section>
            </Layout>
        </>
    )
}

export default IndexPage

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
                id
                body
                slug
            }
        }
    }
`
