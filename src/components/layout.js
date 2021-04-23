import * as React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div className="px-4">
        <main className="max-w-4xl mx-auto py-4 md:py-6 lg:py-8">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
