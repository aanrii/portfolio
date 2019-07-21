const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileName = createFilePath({ node, getNode, basePath: `pages` }).replace('/', '')
    const date = node.frontmatter.date
    createNodeField({
      node,
      name: `slug`,
      value: `/articles/${date}-${fileName}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articles = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  articles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/article.tsx`),
      context: { slug },
    })
  })
}
