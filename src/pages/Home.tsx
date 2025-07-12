/**
 * Home page component for the violin instruction platform
 * Serves as the landing page with introduction and highlights
 */
import { ArrowRight, BookOpen, Music, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <span className="text-xl font-semibold">ViolinMaster</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-amber-200 transition">Home</Link>
            <Link to="/curriculum" className="hover:text-amber-200 transition">Curriculum</Link>
            <Link to="/lessons" className="hover:text-amber-200 transition">Lessons</Link>
            <Link to="/resources" className="hover:text-amber-200 transition">Resources</Link>
            <Link to="/about" className="hover:text-amber-200 transition">About</Link>
          </div>
          <Button variant="outline" className="text-amber-100 border-amber-200 hover:bg-amber-800">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">Master the Violin at Your Own Pace</h1>
            <p className="text-lg text-amber-800">
              From beginner to intermediate, our structured curriculum helps you build skills step by step with expert guidance.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-amber-800 hover:bg-amber-700">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-100">
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/39e01cd3-f714-4bf1-9e8a-f2365bf60e25.jpg" 
              alt="Violin player" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Why Learn With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="h-10 w-10 text-amber-700" />}
              title="Structured Curriculum"
              description="Progressive lessons designed by professional violinists to build skills systematically from the basics to intermediate techniques."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-amber-700" />}
              title="Expert Guidance"
              description="Learn from experienced instructors who provide detailed feedback and personalized tips to improve your playing."
            />
            <FeatureCard 
              icon={<Music className="h-10 w-10 text-amber-700" />}
              title="Practice Resources"
              description="Access sheet music, backing tracks, and specialized exercises to enhance your practice sessions and accelerate learning."
            />
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Learning Paths</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <LearningPathCard
              level="Beginner"
              description="Start your violin journey with proper posture, basic bow techniques, and simple melodies. Perfect for those with no prior experience."
              imageSrc="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/88671551-5b6a-4118-b9af-e6ab5704956c.jpg"
            />
            <LearningPathCard
              level="Intermediate"
              description="Advance your skills with more complex techniques, vibrato, shifting positions, and challenging musical pieces for those with basic fundamentals."
              imageSrc="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/ac3da255-e678-4bc0-8f80-3b4a8c41cd98.jpg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="After trying multiple ways to learn violin, this platform finally helped me make real progress. The step-by-step approach makes all the difference."
              name="Sarah J."
              role="Beginner Student"
              avatar="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/a09cee00-10b9-493a-a926-11c5decd7a50.jpg"
            />
            <TestimonialCard
              quote="The intermediate courses helped me overcome the plateau I was experiencing. Now I can play pieces I never thought possible!"
              name="Michael T."
              role="Intermediate Student"
              avatar="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/4872b53f-b296-45ef-964e-2aa0973d9bd9.jpg"
            />
            <TestimonialCard
              quote="As a parent, I'm amazed at how quickly my daughter has progressed using these lessons. The instructor explains concepts in a way children understand."
              name="Lisa M."
              role="Parent of Student"
              avatar="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/2f1777f8-5f8a-4119-8e64-6fe7693ad3fc.jpg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Violin Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have discovered the joy of playing violin through our structured learning platform.
          </p>
          <Button className="bg-white text-amber-800 hover:bg-amber-100">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link to="/lessons" className="hover:text-white">Lessons</Link></li>
                <li><Link to="/resources" className="hover:text-white">Practice Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-white">Our Teachers</Link></li>
                <li><Link to="/methodology" className="hover:text-white">Teaching Method</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
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
    </div>
  )
}

/**
 * Feature card component to display platform benefits
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </div>
  )
}

/**
 * Learning path card component to display different skill levels
 */
interface LearningPathCardProps {
  level: string;
  description: string;
  imageSrc: string;
}

function LearningPathCard({ level, description, imageSrc }: LearningPathCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 overflow-hidden">
        <img src={imageSrc} alt={`${level} violin lessons`} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-amber-900 mb-2">{level} Path</h3>
        <p className="text-amber-700 mb-4">{description}</p>
        <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
          Explore {level} Lessons
        </Button>
      </div>
    </div>
  )
}

/**
 * Testimonial card component to display student reviews
 */
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <p className="italic text-amber-700 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-semibold text-amber-900">{name}</h4>
          <p className="text-amber-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
