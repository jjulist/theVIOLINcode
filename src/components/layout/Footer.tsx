/**
 * Footer component that provides consistent footer across the application
 * Contains navigation links and copyright information
 */
import { Link } from 'react-router-dom'
import { Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Music className="h-5 w-5" />
              ViolinMaster
            </h3>
            <p className="text-amber-200">
              Your journey to violin mastery starts here.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/curriculum" className="hover:text-white">Curriculum</Link></li>
              <li><Link to="/resources" className="hover:text-white">Practice Resources</Link></li>
              <li><Link to="/methodology" className="hover:text-white">Teaching Method</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">Our Teachers</Link></li>
              <li><Link to="/about" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
          <p>© {new Date().getFullYear()} ViolinMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
