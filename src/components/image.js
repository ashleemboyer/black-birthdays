import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "jpg" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) => src === relativePath)
  ), [data, src])

  const fluid = match.childImageSharp.fluid;

  return fluid ? (
    <Img
      fluid={fluid}
      Tag='div'
      {...props}
    />
  ) : null
}
export default Image
