import { graphql, useStaticQuery } from 'gatsby'

export default function usePaintings() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPainting {
        nodes {
          title
          slug
          date
          images {
            title
            gatsbyImageData(layout: CONSTRAINED, height: 293, width: 293)
          }
        }
      }
    }
  `)

  return data.allContentfulPainting.nodes
}
