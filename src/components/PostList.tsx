import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

function PostList({ data }: any) {
    return (
        <article>
            {data.allMdx.nodes.map((node: any) => {
                return (
                    <div key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <Link to={`/${node.slug}/`}>go to</Link>
                    </div>
                )
            })}
        </article>
    )
}

export default PostList
