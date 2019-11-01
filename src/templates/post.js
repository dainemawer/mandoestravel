import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    let featuredImgFluid = frontmatter.image.childImageSharp.fluid
    return (
    <Layout>
        <SEO title={frontmatter.title} />
        <div className="blog-post-container">
            <div className="blog-post">
                <Img fluid={featuredImgFluid} />
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.date}</p>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
      </div>
    </Layout>

    )
  }
  export const pageQuery = graphql`
    query($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
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
  `
