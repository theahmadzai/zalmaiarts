import * as React from 'react'
import { Link } from 'gatsby'
import usePaintings from '../hooks/use-paintings'
import Layout from '../components/layout'

const IndexPage = () => {
  const paintings = usePaintings()

  return (
    <Layout>
      {paintings.map(painting => (
        <Link to={`/paintings/${painting.slug}`} key={painting.slug}>
          <p>{painting.title}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage
