import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Header extends React.Component {

  render() {
    const menuItemStyles = {
      margin: 0,
      marginLeft: rhythm(0.5),
      display: 'inline-block'
    };

    return (
      <nav>
        <h1 style={{
          margin: `${rhythm(0.5)} ${rhythm(0.5)} 0`,
          fontSize: scale(1.5),
          display: 'inline-block',
          verticalAlign: 'sub'
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

        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: `0 0 0 ${rhythm(1)}`,
          display: 'inline-block',
          verticalAlign: 'middle'
        }}>
          <li style={menuItemStyles}><Link to={'/bibliography'}>Bibliografía</Link></li>
          <li style={menuItemStyles}><a href="https://how-was-made-linux-blog.ikerperez.es" target="_blank">Presentación</a></li>
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
