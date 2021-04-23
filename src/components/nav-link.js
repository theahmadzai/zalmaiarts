import * as React from 'react'
import { Link } from 'gatsby'

export default function NavLink({ children, href }) {
  return (
    <Link
      to={href}
      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      activeClassName="text-gray-900"
    >
      {children}
    </Link>
  )
}
