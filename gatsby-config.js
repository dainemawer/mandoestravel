module.exports = {
    siteMetadata: {
        title: `Man Does Travel`,
        description: `Man Does Travel`,
        author: `@mandoestravel`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
    ]
}
