import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const article: React.SFC<{data}> = ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h2>{post.frontmatter.title} <span>— {post.frontmatter.date}</span></h2> 
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
