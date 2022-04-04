import React from "react"
import "../../styles/element/_Badge.scss"

import { iBadge } from "../../models/components"

const Badge = ({
    data,
    className,
    type = "block",
    use = "default",
}: iBadge) => {
    return (
        <label
            ly-type={type}
            ly-use={use}
            className={className ? "badge " + className : "badge"}
        >
            {data}
        </label>
    )
}

export default Badge
