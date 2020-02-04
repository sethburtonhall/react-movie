import React from 'react';

// Packages
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

// Styled Components
import { StyledNavigation } from '../styles/StyledNavigation'

const Navigation = ({ title }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{title}</p>
    </div>
  </StyledNavigation>
)

Navigation.propTypes = {
  title: PropTypes.string
}

export default Navigation