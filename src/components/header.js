import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Header extends React.Component {

  render() {
    return (
      <h1 style={{
        margin: `${rhythm(0.5)} ${rhythm(0.5)} 0`,
        fontSize: scale(1.5)
      }}>
        <Link
          style={{
            backgroundImage: 'none',
            textShadow: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          {this.props.title}
        </Link>
      </h1>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
