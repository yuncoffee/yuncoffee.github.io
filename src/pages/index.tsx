import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/reset.css"
import "../styles/_global.scss"
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
                {/* {data.allMdx.nodes.map((node: any) => (
                        <article key={node.id} className={mdStyles.test}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </article>
                    ))} */}
                <h1>대 공사중!</h1>
                <PostList data={data} />
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
