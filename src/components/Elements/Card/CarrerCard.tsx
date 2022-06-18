import _ from "lodash"
import React, { useContext, useEffect, useState } from "react"
import * as styles from "../../../styles/elements/_Card.module.scss"
import { checkDeviceType } from "../../../utils/checkDevice"
import { windowContext } from "../../Provider/Provider"

interface iCarrerCard {
    carrerInfo: {
        term: string
        company: string
        department: string
        position: string
    }
}

function CarrerCard({ carrerInfo }: iCarrerCard) {
    const [deviceType, setDeviceType] = useState<number | undefined | null>(
        null
    )

    const windowDispatch = useContext(windowContext)

    useEffect(() => {
        const currentDeviceType = checkDeviceType(
            windowDispatch.windowSizeState.width
        )
        if (deviceType === currentDeviceType) {
            return
        } else {
            setDeviceType(currentDeviceType)
        }
        console.log(currentDeviceType)
    }, [windowDispatch])

    useEffect(() => {
        console.log(deviceType)
    }, [deviceType])

    return (
        <article className={styles.carrerCard}>
            <h4 s-color="sy-pri">{carrerInfo.term}</h4>
            <div
                s-box="v-box"
                s-align="flex-end"
                s-length={deviceType === 0 ? "100%" : undefined}
                // s-length={
                //     windowDispatch.windowSizeState.width < 757 ? "100%" : ""
                // }
            >
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
