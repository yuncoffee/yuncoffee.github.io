import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

interface iLayout {
    pageTitle?: string
    children: React.ReactNode
}

const Layout = ({ pageTitle, children }: iLayout) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <header>{data.site.siteMetadata.title}</header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/info">About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <footer>test2</footer>
        </div>
    )
}
export default Layout
