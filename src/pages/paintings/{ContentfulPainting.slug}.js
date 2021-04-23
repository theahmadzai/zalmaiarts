import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

export const query = graphql`
  query($id: String!) {
    painting: contentfulPainting(id: { eq: $id }) {
      title
      slug
      date
      images {
        title
        gatsbyImageData
      }
    }
  }
`

export default function PaintingPage({ data: { painting } }) {
  return (
    <Layout>
      <h1>{painting.title}</h1>
      {painting.images.map((image) => (
        <GatsbyImage
          key={image.title}
          image={image.gatsbyImageData}
          alt={image.title}
        />
      ))}
    </Layout>
  )
}
