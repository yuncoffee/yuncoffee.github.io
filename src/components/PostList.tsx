import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as styles from "../styles/elements/_List.module.scss"
function PostList({ data }: any) {
    return (
        <article className={styles.postList}>
            {data.allMdx.nodes.map((node: any) => {
                return (
                    <Link to={`/post/${node.slug}/`} className={styles.post}>
                        <article key={node.id}>
                            <div className={styles.post__img}></div>
                            <div s-padding="8px">
                                <h2>{node.frontmatter.title}</h2>
                            </div>

                            <p>Posted: {node.frontmatter.date}</p>
                            <Link to={`/post/${node.slug}/`}>go to</Link>
                        </article>
                    </Link>
                )
            })}
        </article>
    )
}

export default PostList
