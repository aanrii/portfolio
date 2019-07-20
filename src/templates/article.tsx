import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

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

interface ArticleProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const article: React.SFC<ArticleProps> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h2>
        {post.frontmatter.title} <span>— {post.frontmatter.date}</span>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default article
