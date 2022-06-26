import React, { createRef, useEffect } from "react"

export interface Comment {
    repo: string
    theme?: string
}

export default function Comment({ repo, theme }: Comment) {
    const containerRef = createRef<HTMLDivElement>()

    useEffect(() => {
        const utterances = document.createElement("script")
        const attributes = {
            src: "https://utteranc.es/client.js",
            repo,
            "issue-term": "title",
            label: "comment",
            theme: "github-light",
            crossOrigin: "anonymous",
            async: "true",
        }
        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value)
        })
        containerRef.current!.appendChild(utterances)
    }, [repo, theme])
    return <div id="comment" ref={containerRef} />
}
