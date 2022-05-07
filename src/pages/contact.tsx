import React from "react"
import Layout from "../components/Layout/Layout"
import * as styles from "../styles/layout/_Main.module.scss"

function Contact() {
    return (
        <Layout pageTitle="Contact">
            {/* profile */}
            <article className={styles.profile}></article>
            <section className={styles.pageContact__section}>
                <h3 s-font-weight="300">Stack</h3>
            </section>
            <section className={styles.pageContact__section}>
                <h3 s-font-weight="300">career</h3>
            </section>
        </Layout>
    )
}

export default Contact
