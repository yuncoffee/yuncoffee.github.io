import React, { useState } from "react"
import styles from "../../../../styles/elements/_Card.module.scss"
import listStyles from "../../../../styles/elements/_List.module.scss"
import fieldStyles from "../../../../styles/elements/_Field.module.scss"
import Icon from "../Button/Icon"
import Tag from "../Tag"
import Textarea from "../Field/Textarea"

function TemplateCard({ template, cardLayout, cardRef, index, onClick }: any) {
    const [cardIsActive, setCardIsActive] = useState(false)

    return (
        <article
            className={styles.templateCard}
            s-column={
                cardLayout === 0
                    ? "column2"
                    : cardLayout === 1
                    ? "column4"
                    : "column6"
            }
            onClick={onClick}
            ref={cardRef}
        >
            {/* info */}
            <div className={styles.templateCard__info}>
                <div s-box="v-box" s-gap="4px">
                    <h3 s-color="sy-gray-07" s-font-weight="600">
                        {template.title}
                    </h3>
                </div>
                {/* btn, options */}
            </div>
            <div className={styles.templateCard__img}>
                <div
                    className={styles.templateCard__img__background}
                    style={{
                        background: `url(${template.img}) no-repeat center /cover `,
                    }}
                />
                <Icon
                    className={styles.icon_zoom}
                    size="lg"
                    iconName="ri-zoom-in-line"
                />
            </div>
            <Textarea
                s_type="block"
                size="lg"
                readOnly={true}
                ly_value={template.detail}
            />
        </article>
    )
}

export default TemplateCard
