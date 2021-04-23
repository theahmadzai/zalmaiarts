import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <figure class="flex flex-col md:flex-row border border-black overflow-hidden rounded-xl p-8 md:p-0">
        <StaticImage
          className="w-32 h-32 md:w-6/12 md:h-auto md:rounded-none rounded-full mx-auto"
          src="../images/author.jpg"
          alt="Author"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg">
              I'm Bashir Ahmadi, a professional portrait painter from
              Afghanistan who has been to many countries that includes Germany
              and Russia.
            </p>
            <p class="text-lg">
              I have more than 20 years of professional experience in portrait
              painting &amp; calligraphy. I can create portrait paintings with
              graphite, charcoal, or colored pencils.
            </p>
            <p class="text-lg">
              Please do not hesitate to contact me. I'll provide you with
              quality services with the best possible discounts. Your
              satisfaction will be my guarantee.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-green-600">Bashir Ahmadi</div>
            <div class="text-gray-500">Professional Artist</div>
          </figcaption>
        </div>
      </figure>
    </Layout>
  )
}
