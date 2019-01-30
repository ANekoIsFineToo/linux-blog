import React from 'react';

import { rhythm } from '../utils/typography';
import Header from './header'

class Layout extends React.Component {

  render() {
    const { title, children } = this.props;

    return (
      <div>
        <Header title={title} />

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
