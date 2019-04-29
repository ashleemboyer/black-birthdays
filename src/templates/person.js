import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  var person = data.allSitePage.edges[0].node.context
  return (
    <Layout>
      <SEO image={person.name.replace(/ |\./g, '') + '.jpg'} title={person.name} keywords={['gatsby', 'application', 'react', 'birthdays', 'black', 'history', 'month', 'dennis', 'edwards']} />
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '16px' }}>
        <h1>{person.name}</h1>
        <h3>{person.birth} &mdash; {person.death}</h3>
        <Image style={{ borderRadius: '4px' }} src={person.name.replace(/ |\./g, '') + '.jpg'} />
        <p style={{ marginTop: '32px' }}>{person.about}</p>
        <p style={{ textAlign: 'right', marginTop: '32px' }}>
          <a style={{ borderBottom: '1px dotted #eeeeee'}} href={person.link}>Read more</a>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
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
`
