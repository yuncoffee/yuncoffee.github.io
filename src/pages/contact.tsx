import React from "react"
import Button from "../components/Elements/Button/Button"
import CarrerCard from "../components/Elements/Card/CarrerCard"
import Layout from "../components/Layout/Layout"
import * as styles from "../styles/layout/_Main.module.scss"

function Contact() {
    const EDUINFO = {
        term: "2015.02 - 2021.02",
        company: "을지대학교",
        department: "의료홍보디자인학과",
        position: "학사",
    }

    const CARRERINFOLIST = [
        {
            term: "2020.11 - ",
            company: "한국정보보호경영연구소",
            department: "개발팀 UI/UX 디자이너",
            position: "선임",
        },
        {
            term: "2019.07 - 2020.02",
            company: "노원 을지대학병원",
            department: "홍보팀 그래픽 디자이너",
            position: "인턴",
        },
    ]

    const STACKINFOLIST = [
        { name: "Ps", imgPath: "" },
        { name: "Ai", imgPath: "" },
        { name: "Id", imgPath: "" },
        { name: "Figma", imgPath: "" },
        { name: "React", imgPath: "" },
        { name: "HTML", imgPath: "" },
        { name: "CSS", imgPath: "" },
        { name: "JS", imgPath: "" },
        { name: "SCSS", imgPath: "" },
        { name: "TS", imgPath: "" },
    ]

    return (
        <Layout pageTitle="Contact">
            {/* profile */}
            <>
                <section
                    className={styles.pageContact__section}
                    s-align="center"
                >
                    <article className={styles.profile} />
                    <Button name="문의하기" size="xl" />
                </section>
                <section className={styles.pageContact__section}>
                    <h3 s-font-weight="300">Stack</h3>
                    <section className={styles.con_stack}>
                        {STACKINFOLIST.map((stackinfo, index) => {
                            return (
                                <div className={styles.stack} key={index}>
                                    {stackinfo.name}
                                </div>
                            )
                        })}
                    </section>
                </section>
                <section className={styles.pageContact__section}>
                    <h3 s-font-weight="300">career</h3>
                    {CARRERINFOLIST.map((carrerInfo, index) => {
                        return (
                            <CarrerCard key={index} carrerInfo={carrerInfo} />
                        )
                    })}
                </section>
                <section className={styles.pageContact__section}>
                    <h3 s-font-weight="300">level of education</h3>
                    <CarrerCard carrerInfo={EDUINFO} />
                </section>
            </>
        </Layout>
    )
}

export default Contact
