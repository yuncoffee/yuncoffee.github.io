import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as styles from "../styles/elements/_List.module.scss"
import Button from "./Elements/Button/Button"
function PostList({ data }: any) {
    return (
        <article className={styles.postList}>
            {data.allMdx.nodes.map((node: any) => {
                return (
                    <Link
                        key={node.id}
                        to={`/post/${node.slug}/`}
                        className={styles.post}
                    >
                        <article>
                            <div className={styles.post__img}></div>
                            <div
                                s-padding="8px"
                                s-box="h-box"
                                s-align="flex-end"
                                s-justify="space-between"
                            >
                                <div>
                                    <h2>{node.frontmatter.title}</h2>
                                    <p>Posted: {node.frontmatter.date}</p>
                                </div>
                                <Button name="바로가기" type="text" />
                                {/* <Link to={`/post/${node.slug}/`}>go to</Link> */}
                            </div>
                        </article>
                    </Link>
                )
            })}
        </article>
    )
}

export default PostList
