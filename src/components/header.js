import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import NavLink from './nav-link'

export default function Header() {
  return (
    <header className="b-white px-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="flex flex-col sm:flex-row sm:space-x-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/paintings">Paintings</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
