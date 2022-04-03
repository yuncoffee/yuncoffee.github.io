import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as mdStyles from "../styles/md.module.scss"
import Layout from "../components/Layout/Layout"
import Button from "../components/Elements/Button"
const PostTemplate = (props: any) => {
    return (
        <Layout pageTitle={props.pageContext.title}>
            <MDXRenderer>{props.pageContext.body}</MDXRenderer>
        </Layout>
    )
}

export default PostTemplate
