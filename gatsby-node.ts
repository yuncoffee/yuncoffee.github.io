import { CreatePagesArgs, graphql } from "gatsby"
import path from "path"
import React from "react"
import { RecoilRoot } from "recoil"
const { createFilePath } = require(`gatsby-source-filesystem`)

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions
    const templateComponent = path.resolve("./src/templates/PostTemplate.tsx")
    const { data, errors } = await graphql<any, any>(`
        {
            allMdx {
                nodes {
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    id
                    body
                    slug
                }
            }
        }
    `)

    if (errors) {
        throw errors
    }

    data.allMdx.nodes.forEach((node) => {
        createPage({
            path: node.slug,
            context: {
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                body: node.body,
                id: node.id,
            },

            component: templateComponent,
        })
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode })
        createNodeField({ node, name: "slug", value: slug })
    }
}
