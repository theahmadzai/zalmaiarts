import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import usePaintings from '../../hooks/use-paintings'
import Layout from '../../components/layout'

export default function PaintingsPage() {
  const paintings = usePaintings()

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-x-2 gap-y-1 sm:gap-4 md:gap-6 lg:gap-8">
        {paintings.map(painting => (
          <Link to={`/paintings/${painting.slug}`} key={painting.slug}>
            <div className="rotate-12">
              <GatsbyImage
                className="inset-0 border border-black"
                image={painting.images[0].gatsbyImageData}
                alt={painting.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
