import * as React from "react"
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

// markup
const IndexPage = ({ data }: any) => {
    return (
        <>
            <Helmet>
                <title>coffee.log</title>
            </Helmet>
            <Layout pageTitle="coffee.log">
                {/* profile */}
                <aside className={styles.main__nav}>
                    <h1>대 공사중!</h1>
                </aside>

                {/* post */}
                <section className={styles.main__contents}>
                    <PostList data={data} />
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
