import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/Layout/Layout"
import * as mdStyles from "../../styles/_md.module.scss"

const Item = ({ data }: any) => {
    console.log("hello")

    // const item = data.item
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <>
                <p>{data.mdx.slug}</p>
                <div className={mdStyles.document}>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </div>
            </>
        </Layout>
    )
}

export default Item

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
            slug
        }
    }
`
