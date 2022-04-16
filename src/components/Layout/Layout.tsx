import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PageHeader from "../Header/PageHeader"
import PageFooter from "../Footer/PageFooter"
import * as mainStyles from "../../styles/layout/_Main.module.scss"
import PageNav from "../Nav/PageNav"
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
        <>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <PageHeader title={data.site.siteMetadata.title} />
            <PageNav />

            <main className={mainStyles.main}>{children}</main>
            <PageFooter />
        </>
    )
}
export default Layout
