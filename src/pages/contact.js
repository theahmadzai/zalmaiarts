import * as React from 'react'
import Layout from '../components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold leading-6 text-gray-900">
            Have a Query?
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            corrupti ab minima saepe esse, est earum nihil qui magni odio
            laudantium ducimus culpa at sint laborum? Adipisci unde doloribus
            debitis!
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            delectus adipisci nam veritatis sunt voluptatum quae reiciendis
            ratione distinctio? Assumenda voluptas repellat pariatur dicta
            inventore architecto ipsa consequuntur alias ea.
          </p>
        </div>
        <div className="md:col-span-1 mt-8 md:mt-0">
          <form action="#" method="post">
            <div className="grid grid-cols-2 gap-8 p-8 shadow-md overflow-hidden sm:rounded-md">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  <span className="text-red-600">*</span> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Muhammad Ahmed"
                  required
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  <span className="text-red-600">*</span> Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="muhammad@example.com"
                  required
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="+93*********"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  <span className="text-red-600">*</span> Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  placeholder="you@example.com"
                  defaultValue="Your message..."
                  required
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
