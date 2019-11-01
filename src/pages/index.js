import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"

export default ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    return (
        <Layout>
            <SEO title="Home" />
            <div>{Posts}</div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
