import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `coffee.log`,
        siteUrl: `https://yuncoffee.github.io/`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `./src/contents`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `./src/contents/`,
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `./src/images/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `./src/pages/`,
            },
        },
    ],
}

export default config
