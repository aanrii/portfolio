import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
interface IndexProps {
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: Array<{
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
          }
          fields: {
            slug: string
          }
        }
      }>
    }
  }
}

const index: React.SFC<IndexProps> = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h2>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{' '}
          <span>— {node.frontmatter.date}</span>
        </h2>
      </div>
    ))}
  </Layout>
)

export default index
