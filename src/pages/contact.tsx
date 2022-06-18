import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { lowerCase } from "lodash"
import React, { useContext, useEffect, useRef, useState } from "react"
import Button from "../components/Elements/Button/Button"
import CarrerCard from "../components/Elements/Card/CarrerCard"
import Layout from "../components/Layout/Layout"
import { windowContext } from "../components/Provider/Provider"
import * as styles from "../styles/layout/_Main.module.scss"

function Contact() {
    const stackRef = useRef<HTMLDivElement[]>([])

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
        { name: "Ps", src: "ps" },
        { name: "Ai", src: "ai" },
        { name: "Id", src: "id" },
        { name: "Figma", src: "figma" },
        { name: "React", src: "react" },
        { name: "HTML", src: "html" },
        { name: "CSS", src: "css" },
        { name: "JS", src: "js" },
        { name: "SCSS", src: "scss" },
        { name: "TS", src: "ts" },
    ]

    const [isHoverStack, setIsHoverStack] = useState(-1)

    const handleStackMouseOver = (index: number) => {
        setIsHoverStack(index)
    }

    return (
        <Layout pageTitle="Contact">
            {/* profile */}
            <>
                <section
                    className={styles.pageContact__section}
                    s-align="center"
                >
                    <article className={styles.profile} />
                    <Button name="Contact" size="lg" />
                </section>
                <section className={styles.pageContact__section}>
                    <h3 s-font-weight="300">Stack</h3>
                    <section className={styles.con_stack}>
                        {STACKINFOLIST.map((stackinfo, index) => {
                            return (
                                <div
                                    className={
                                        isHoverStack === index
                                            ? `${styles.stack} ${styles.isActive}`
                                            : styles.stack
                                    }
                                    ref={(el) => {
                                        if (el) {
                                            stackRef.current[index] = el
                                        }
                                    }}
                                    onMouseOver={() => {
                                        handleStackMouseOver(index)
                                    }}
                                    onMouseLeave={() => {
                                        setIsHoverStack(-1)
                                    }}
                                    data-name={stackinfo.name}
                                    key={index}
                                >
                                    <div data-name={stackinfo.src} />
                                    <h6>{stackinfo.name}</h6>
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
