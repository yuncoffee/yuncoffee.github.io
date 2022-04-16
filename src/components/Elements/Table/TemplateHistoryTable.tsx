import React, { Children, useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
    rcProjectAtom,
    rcProjectHistorySelector,
    rcProjectListAtom,
} from "../../../../src/recoil/Project/projectRecoil"
import {} from "../../../../src/recoil/Modal/modalRecoil"
import { iProject } from "../../../../src/models/project"
import Table from "./Table"
import Button from "../Button/Button"
import styles from "../../../../styles/elements/_Table.module.scss"
import "dayjs/locale/ko"
import dayjs from "dayjs"
import Tag from "../Tag"

function TemplateHistoryTable() {
    dayjs.locale("ko")
    const projectHistorySelector = useRecoilValue(rcProjectHistorySelector)
    const setProjectAtom = useSetRecoilState(rcProjectAtom)
    const projectListAtom = useRecoilValue(rcProjectListAtom)

    const activeProjectDetail = (project: iProject) => {
        setProjectAtom(project)
        document.body.setAttribute("data-theme", project.csp_type!)
    }

    let calcTimeStateNumber = 0
    const handleCalcTime = (projectTime: string) => {
        const currentTime = dayjs().format("YYYY-MM-DD HH:mm")
        let resultTime = 0
        const calcTime = dayjs(currentTime).diff(projectTime)
        if (calcTime > 86400000) {
            resultTime = dayjs(currentTime).diff(projectTime, "days")
            calcTimeStateNumber = 0
        } else if (calcTime > 3600000) {
            resultTime = dayjs(currentTime).diff(projectTime, "hours")
            calcTimeStateNumber = 1
        } else if (calcTime > 60000) {
            resultTime = dayjs(currentTime).diff(projectTime, "minutes")
            calcTimeStateNumber = 2
        } else {
            resultTime = dayjs(currentTime).diff(projectTime, "seconds")
            calcTimeStateNumber = 3
        }
        return resultTime
    }

    return (
        <Table
            className={styles.table_templateHistory}
            header={
                <>
                    <th className={styles.th}>INDEX</th>
                    <th className={styles.th}>CSP</th>
                    <th className={styles.th}>프로젝트명</th>
                    <th className={styles.th}>사용일자</th>
                    <th className={styles.th}>사용내역</th>
                    <th className={styles.th}>바로가기</th>
                </>
            }
            body={
                projectHistorySelector.length > 0 ? (
                    projectHistorySelector.map(
                        (project: iProject, index: number) => {
                            const projectArr = project.updated_at?.split(",")
                            const projectTime =
                                projectArr![0] + projectArr![1].slice(0, 6)
                            const resultTime = handleCalcTime(projectTime)

                            return (
                                <tr className={styles.tr} key={index}>
                                    <td className={styles.td}>{index + 1}</td>
                                    <td className={styles.td}>
                                        <div
                                            className={styles.cspImg}
                                            s-image={project.csp_type}
                                        />
                                    </td>
                                    <td className={styles.td}>
                                        {project.name}
                                    </td>
                                    <td className={styles.td}>
                                        {calcTimeStateNumber === 0
                                            ? `${resultTime}days ago`
                                            : calcTimeStateNumber === 1
                                            ? `${resultTime}hours ago`
                                            : calcTimeStateNumber === 2
                                            ? `${resultTime}minutes ago`
                                            : "just before"}
                                    </td>
                                    <td className={styles.td}>
                                        <Tag
                                            data={
                                                project.tf_status !== null
                                                    ? project.tf_status
                                                    : "null"
                                            }
                                            type="block-line"
                                        />
                                    </td>
                                    <td className={styles.td}>
                                        <Button
                                            name="열기"
                                            size="xs"
                                            type="text"
                                            onClick={() => {
                                                activeProjectDetail(project)
                                            }}
                                        />
                                    </td>
                                </tr>
                            )
                        }
                    )
                ) : projectListAtom.length > 0 ? (
                    <h2>검색결과가 없습니다.</h2>
                ) : (
                    <h4>프로젝트 만드세요</h4>
                )
            }
        />
    )
}

export default TemplateHistoryTable
