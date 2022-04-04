import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { rcProjectFilterAtom } from "../../../../src/recoil/Project/projectRecoil"
import styles from "../../../../styles/elements/_List.module.scss"
import fieldStyles from "../../../../styles/elements/_Field.module.scss"
import Icon from "../Button/Icon"
import { iFolderList, iUserMadeFolderList } from "../../../models/components"

function FolderList({
    name = "이름 없음",
    className,
    onClick,
    isActive,
}: iFolderList) {
    return (
        <li
            className={
                isActive
                    ? styles.folderList + " " + styles.isActive
                    : styles.folderList
            }
            onClick={onClick}
        >
            {isActive ? (
                <svg
                    className={styles.folderList__deco}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 5 10"
                >
                    <path
                        className="st0"
                        d="M1.7,0H0.5C0.2,0,0,0.2,0,0.5v9C0,9.8,0.2,10,0.5,10h1.2c0.2,0,0.3-0.1,0.4-0.2l2.7-4.5c0.1-0.2,0.1-0.4,0-0.5
        L2.1,0.2C2.1,0.1,1.9,0,1.7,0z"
                    />
                </svg>
            ) : (
                ""
            )}

            <div className={styles.folderList__title}>
                <i className="ri-folder-3-line ri-lg" />
                <span>{name}</span>
            </div>

            {/* <Icon
                className={styles.folderList__btn}
                iconName="ri-more-2-fill"
                size="xs"
            /> */}
        </li>
    )
}

function UserMadeFolderList({
    item,
    index,
    updateFilter,
    toggleSelect,
    selectRefs,
    setNewModalState,
    handleModalActive,
    isActive,
    onClick,
}: iUserMadeFolderList) {
    const [templateFilterAtom, setTemplateFilterAtom] =
        useRecoilState(rcProjectFilterAtom)
    const [style, setStyle] = useState({ left: "0", top: "0" })

    return (
        <li
            className={
                isActive
                    ? styles.folderList + " " + styles.isActive
                    : styles.folderList
            }
            onClick={onClick}
        >
            {isActive ? (
                <svg
                    className={styles.folderList__deco}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 5 10"
                >
                    <path
                        className="st0"
                        d="M1.7,0H0.5C0.2,0,0,0.2,0,0.5v9C0,9.8,0.2,10,0.5,10h1.2c0.2,0,0.3-0.1,0.4-0.2l2.7-4.5c0.1-0.2,0.1-0.4,0-0.5
        L2.1,0.2C2.1,0.1,1.9,0,1.7,0z"
                    />
                </svg>
            ) : (
                ""
            )}
            {/* title */}
            <div className={styles.folderList__title}>
                <i className="ri-folder-3-line ri-lg" />
                <span>{item.name}</span>
            </div>
            {/* Icon */}
            <Icon
                className={styles.folderList__btn}
                iconName="ri-more-2-fill"
                size="xs"
                onClick={(e) => toggleSelect(e, item, index)}
            />
            {/* option */}
            <div className={styles.select}>
                <ul
                    className={
                        fieldStyles.select__customOption +
                        " " +
                        styles.customOption
                    }
                    ref={(el) => (selectRefs.current[index] = el)}
                    ly-type="block-line"
                >
                    {/* TODO: 베타범위 제외 */}
                    {/* <div className="optionItem">
                Duplicate
            </div> */}
                    {/* TODO: 베타 - 기능없음 */}
                    <li
                        className={fieldStyles.select__customOption__item}
                        onClick={(e) => {
                            toggleSelect(e, item, index)
                            setNewModalState(1)
                            handleModalActive("NewFolderModal")
                        }}
                    >
                        이름변경
                    </li>
                    <li
                        className={fieldStyles.select__customOption__item}
                        onClick={(e) => {
                            toggleSelect(e, item, index)
                            handleModalActive("DeleteFolderModal")
                        }}
                    >
                        폴더삭제
                    </li>
                </ul>
            </div>
        </li>
    )
}

export { FolderList, UserMadeFolderList }
