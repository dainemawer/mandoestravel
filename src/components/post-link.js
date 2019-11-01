import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostLink = ({ post }) => (
  <div>
      <Link to={post.frontmatter.path}>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      </Link>
      <h3>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title}
        </Link>
      </h3>
      <span>({post.frontmatter.date})</span>
      <p>{post.frontmatter.description}</p>
  </div>
)
export default PostLink
