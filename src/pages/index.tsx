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

    return (
        <>
            <Helmet>
                <title>coffee.log</title>
            </Helmet>
            <Layout pageTitle="coffee.log">
                <>{isBrowser ? <PostList data={data} /> : ""}</>
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
