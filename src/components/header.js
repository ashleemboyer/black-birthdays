import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => {
  var is_mobile = false
  if (typeof window !== 'undefined') {
    is_mobile = window.innerWidth <= 700
  }

  return (
    <header style={{
      textAlign: 'center',
      margin: is_mobile ? '48px 16px' : '48px 16px 72px 16px',
    }}>
      <h1 style={{ marginBottom: '8px', fontSize: '3rem' }}>
        <Link to="/" >{siteTitle}</Link>
      </h1>
      <p style={{
        fontSize: '1.3rem',
        color: '#eeeeee',
      }}>{siteDescription}</p>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
