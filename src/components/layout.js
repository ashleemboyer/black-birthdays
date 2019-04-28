/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <main>{children}</main>
            <footer style={{
              marginTop: '100px',
              marginBottom: '32px',
              color: 'white',
              fontSize: '.8rem',
              textAlign: 'center',
            }}>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a style={{ borderBottom: '1px dotted #616161' }} href="https://twitter.com/ashleemboyer">Ashlee</a> with
              {` `}
              <a style={{ borderBottom: '1px dotted #616161' }} href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
