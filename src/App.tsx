/**
 * Main application component that defines the routing structure
 * Provides navigation to different pages of the violin instruction platform
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'
import Lesson from './pages/Lesson'
import Resources from './pages/Resources'
import TeachingMethod from './pages/TeachingMethod'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/lessons/:id" element={<Lesson />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/methodology" element={<TeachingMethod />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
