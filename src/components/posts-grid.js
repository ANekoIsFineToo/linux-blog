import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

class PostsGrid extends React.Component {

  render() {
    const { posts } = this.props;

    return posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;

      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p>
            <span
              style={{
                marginRight: rhythm(0.25)
              }}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
            <Link to={node.fields.slug}>
              Leer mas
            </Link>
          </p>
        </div>
      );
    });
  }
}

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostsGrid;
