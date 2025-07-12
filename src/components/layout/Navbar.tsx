/**
 * Navbar component that provides navigation across the application
 * Used consistently across all pages
 */
import { Music } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

export default function Navbar() {
  const location = useLocation()
  
  // Determine which link is active based on the current path
  const isActive = (path: string) => {
    return location.pathname === path
  }
  
  return (
    <nav className="bg-gradient-to-r from-amber-900 to-amber-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music className="h-6 w-6" />
          <Link to="/" className="text-xl font-semibold">ViolinMaster</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`hover:text-amber-200 transition ${isActive('/') ? 'font-bold border-b-2 border-amber-200 pb-1' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/curriculum" 
            className={`hover:text-amber-200 transition ${isActive('/curriculum') ? 'font-bold border-b-2 border-amber-200 pb-1' : ''}`}
          >
            Curriculum
          </Link>
          <Link 
            to="/resources" 
            className={`hover:text-amber-200 transition ${isActive('/resources') ? 'font-bold border-b-2 border-amber-200 pb-1' : ''}`}
          >
            Resources
          </Link>
          <Link 
            to="/methodology" 
            className={`hover:text-amber-200 transition ${isActive('/methodology') ? 'font-bold border-b-2 border-amber-200 pb-1' : ''}`}
          >
            Teaching Method
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-amber-200 transition ${isActive('/about') ? 'font-bold border-b-2 border-amber-200 pb-1' : ''}`}
          >
            About
          </Link>
        </div>
        <Button variant="outline" className="text-amber-100 border-amber-200 hover:bg-amber-800">
          Sign In
        </Button>
      </div>
    </nav>
  )
}
