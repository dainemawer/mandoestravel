module.exports = {
    siteMetadata: {
        title: `Man Does Travel`,
        description: `Man Does Travel`,
        author: `@mandoestravel`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  showCaptions: true,
                  wrapperStyle: { marginBottom: '1rem' },
                  maxWidth: 700,
                },
              },
            ],
          },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-plugin-manifest`,
            options: {
              name: `man-does-travel`,
              short_name: `man-does-travel`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#663399`,
              display: `minimal-ui`,
          },
        },
        {
          resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `markdown-pages`,
            path: `${__dirname}/src/markdown`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/images`,
          },
        },
    ]
}
