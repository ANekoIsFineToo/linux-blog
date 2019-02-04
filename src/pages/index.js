import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostsGrid from '../components/posts-grid'

class BlogIndex extends React.Component {

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout title={siteTitle}>
        <SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        {<PostsGrid posts={posts} />}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD \\d\\e MMMM \\d\\e YYYY", locale: "es")
            title
          }
        }
      }
    }
  }
`;
