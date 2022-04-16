import React, { useEffect, useRef, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { rcProjectAtom } from "../../../../src/recoil/Project/projectRecoil"
import { rcDirectoryModalAtom } from "../../../../src/recoil/Modal/modalRecoil"
import styles from "../../../../styles/elements/_Card.module.scss"
import listStyles from "../../../../styles/elements/_List.module.scss"
import fieldStyles from "../../../../styles/elements/_Field.module.scss"
import Icon from "../Button/Icon"
import Tag from "../Tag"
import { iProjectCard } from "../../../models/components"

const ProjectCard = ({
    template,
    clickEvent,
    setEl,
    handleModalActive,
}: iProjectCard) => {
    const selectRef = useRef<any>()
    const setProjectAtom = useSetRecoilState(rcProjectAtom)
    const [directoryModalAtom, setDirectoryModalAtom] =
        useRecoilState(rcDirectoryModalAtom)

    const [optionOpenState, setOptionOpenState] = useState(false)

    const toggleSelect = (e: any) => {
        e.stopPropagation()
        setProjectAtom(template)
        if (selectRef.current.classList.length === 2) {
            selectRef.current.classList.add(listStyles.isActive)
            setEl(selectRef.current)
            setOptionOpenState(true)
        } else {
            selectRef.current.classList.remove(listStyles.isActive)
            setOptionOpenState(false)
        }
    }

    const activeModalState = (e: any, id: number) => {
        //TODO:토글시 템플릿 세팅
        toggleSelect(e)
        handleModalActive("ProjectManageModal")
        setDirectoryModalAtom({
            ...directoryModalAtom,
            visible: true,
            state: id,
        })
    }

    const activeDeleteInfra = (e: any) => {
        toggleSelect(e)
        setProjectAtom(template)
        handleModalActive("RemoveInfraModal")
    }

    return (
        <article
            className={styles.projectCard}
            onClick={() => clickEvent(template)}
        >
            <div className={styles.projectCard__visual}>
                <div
                    s-image={template.csp_type}
                    className={styles.projectCard__cspImage}
                />
                <div s-box="h-box" s-gap="4px" s-length="100%" s-align="center">
                    <Tag data="배포중" />
                    <div className={styles.projectCard__indicator}>
                        <div
                            className={styles.projectCard__indicator__value}
                            // TODO: 진행율에 따라 width가 변화할 수 있도록
                            style={{ width: "30%" }}
                        ></div>
                    </div>
                </div>
            </div>
            {/* info */}
            <div className={styles.projectCard__info}>
                <div s-box="v-box" s-gap="4px">
                    <h5>{template.name}</h5>
                    <h6>{template.updated_at}</h6>
                </div>
                {/* btn, options */}
                <div>
                    <Icon
                        iconName="ri-more-2-line"
                        type={optionOpenState ? "block" : "block-ghost"}
                        onClick={(e) => toggleSelect(e)}
                    />
                    {/* options */}
                    <div className={styles.select}>
                        <ul
                            className={
                                fieldStyles.select__customOption +
                                " " +
                                listStyles.customOption
                            }
                            ref={selectRef}
                            ly-type="block-line"
                        >
                            <li
                                className={
                                    fieldStyles.select__customOption__item
                                }
                                onClick={(e) => activeModalState(e, 0)}
                            >
                                프로젝트 복사
                            </li>
                            {/* TODO: 베타범위 제외  - 프로젝트 공유 */}
                            {/* <div className="optionItem">Share</div> */}
                            <li
                                className={
                                    fieldStyles.select__customOption__item
                                }
                                onClick={(e) => activeModalState(e, 1)}
                            >
                                프로젝트 삭제
                            </li>
                            {template.tf_status !== null &&
                                template.tf_status === "planning" &&
                                !template.tf_is_delete && (
                                    <li
                                        className={
                                            fieldStyles.select__customOption__item
                                        }
                                        onClick={(e) => activeDeleteInfra(e)}
                                    >
                                        Remove Infra
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
