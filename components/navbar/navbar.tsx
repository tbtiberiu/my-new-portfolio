import Link from 'next/link'
import { BoldIcon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-24 p-4" href="/">
        <div className="w-16 text-white">
          <BoldIcon />
        </div>
      </Link>
      <div className="flex items-center justify-between space-x-20">
        <NavLinks />
      </div>
      <div className="flex items-center justify-between mx-20">
        <ThemeToggle />
      </div>
    </nav>
  )
}
