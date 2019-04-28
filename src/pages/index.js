import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, StaticQuery, graphql } from "gatsby";
import Image from "../components/image"

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { width: props.width }
  }

  componentWillMount() {
    this.setState({
      width: typeof window !== 'undefined' ? window.innerWidth : 1000
    })
  }

  render() {
    const is_mobile = this.state.width < 700;
    return (
      <StaticQuery
        query={graphql`
          query {
            allSitePage {
              edges {
                node {
                  path
                  context {
                    name
                    birth
                    death
                    about
                    link
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <SEO title="Home" keywords={['gatsby', 'application', 'react', 'birthdays', 'black', 'history', 'month']} />
            <div style={{ textAlign: 'center' }}>
              {
                data.allSitePage.edges.filter(({ node }) => {
                  return !!(node && node.context && node.context.name)
                }).map(({ node }, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        position: 'relative',
                        width: is_mobile ? '90%' : '272px',
                        height: (272 + 32) + 'px',
                        display: 'inline-block',
                        margin: '8px'
                      }}
                    >
                      <Link to={node.path}>
                        <Image
                          style={{
                            width: '100%',
                            height: '272px',
                            borderRadius: '2px 2px 0 0',
                          }}
                          src={node.context.name.replace(/ |\./g, '') + '.jpg'}
                        />
                        <p style={{
                          height: '32px',
                          lineHeight: '32px',
                          verticalAlign: 'middle',
                          textAlign: 'center',
                          color: 'white',
                          backgroundColor: '#212121',
                          borderRadius: '0 0 2px 2px',
                        }}
                        >
                          {node.context.name}
                        </p>
                        <div
                          onMouseEnter={(e) => e.target.style.opacity = '0.2'}
                          onMouseLeave={(e) => e.target.style.opacity = '0'}
                          style={{
                            backgroundColor: 'lavenderblush',
                            opacity: '0',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                          }}
                        ></div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </Layout>
        )}
      />
    )
  }
}

Index.defaultProps = {
  width: 1000
}
