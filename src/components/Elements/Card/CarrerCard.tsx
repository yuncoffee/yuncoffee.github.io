import React from "react"
import * as styles from "../../../styles/elements/_Card.module.scss"

interface iCarrerCard {
    carrerInfo: {
        term: string
        company: string
        department: string
        position: string
    }
}

function CarrerCard({ carrerInfo }: iCarrerCard) {
    return (
        <article className={styles.carrerCard}>
            <h4 s-color="sy-pri">{carrerInfo.term}</h4>
            <div s-box="v-box" s-align="flex-end">
                <h4 s-font-weight="500" s-color="sy-gray-07">
                    {carrerInfo.company}
                </h4>
                <h6 s-color="sy-gray-05">{carrerInfo.department}</h6>
                <h6 s-color="sy-gray-05">{carrerInfo.position}</h6>
            </div>
        </article>
    )
}

export default CarrerCard
