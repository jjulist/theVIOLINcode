/**
 * Curriculum page component displaying structured violin learning paths
 * Shows beginner and intermediate courses with detailed lessons
 */
import { ArrowRight, Clock, Star, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function Curriculum() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:text-amber-200">
            <span className="text-xl font-semibold">← Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Violin Learning Curriculum
          </h1>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Our structured curriculum is designed to take you from complete beginner to confident intermediate player. 
            Each course builds upon previous skills with clear progression milestones.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Beginner Course */}
            <CourseCard
              level="Beginner"
              duration="3-6 months"
              lessons={24}
              description="Perfect for complete beginners. Learn proper posture, basic bow techniques, finger placement, and simple melodies."
              skills={[
                "Proper violin and bow hold",
                "Basic bow techniques (detaché, legato)",
                "First position finger placement",
                "Simple scales and arpeggios",
                "Easy folk songs and melodies",
                "Reading basic music notation"
              ]}
              price="$99/month"
              imageSrc="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/bf8f5e05-1898-4e70-92fc-33266c3ec917.jpg"
              linkTo="/lessons/beginner"
            />

            {/* Intermediate Course */}
            <CourseCard
              level="Intermediate"
              duration="6-12 months"
              lessons={36}
              description="Build on your foundation with advanced techniques, vibrato, shifting, and complex musical pieces."
              skills={[
                "Vibrato technique development",
                "Position shifting (1st to 3rd position)",
                "Advanced bow techniques (staccato, spiccato)",
                "Double stops and simple harmonies",
                "Classical pieces and etudes",
                "Performance techniques and stage presence"
              ]}
              price="$129/month"
              imageSrc="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/53836b60-ab9d-4caa-9e19-c4fd920c4f63.jpg"
              linkTo="/lessons/intermediate"
            />
          </div>
        </div>
      </section>

      {/* Learning Path Timeline */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Your Learning Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <TimelineItem
                week="Weeks 1-4"
                title="Foundation Building"
                description="Master proper posture, instrument care, and basic bow movements"
                isCompleted={false}
              />
              <TimelineItem
                week="Weeks 5-12"
                title="First Notes & Scales"
                description="Learn finger placement, play your first scales and simple melodies"
                isCompleted={false}
              />
              <TimelineItem
                week="Weeks 13-20"
                title="Musical Development"
                description="Start playing recognizable songs and develop rhythm skills"
                isCompleted={false}
              />
              <TimelineItem
                week="Weeks 21+"
                title="Advanced Techniques"
                description="Master vibrato, shifting, and tackle intermediate repertoire"
                isCompleted={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">What's Included</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-amber-700" />}
              title="Self-Paced Learning"
              description="Learn at your own speed with lifetime access to all course materials"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-amber-700" />}
              title="Expert Feedback"
              description="Submit practice videos and receive personalized feedback from instructors"
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-amber-700" />}
              title="Progress Tracking"
              description="Monitor your improvement with skill assessments and achievement badges"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Musical Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Choose your starting level and begin mastering the violin today with our proven curriculum.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-amber-800 hover:bg-amber-100">
              Start Beginner Course
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800">
              Try Free Sample Lesson
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Course card component displaying course details and enrollment options
 */
interface CourseCardProps {
  level: string;
  duration: string;
  lessons: number;
  description: string;
  skills: string[];
  price: string;
  imageSrc: string;
  linkTo: string;
}

function CourseCard({ level, duration, lessons, description, skills, price, imageSrc, linkTo }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="h-48 overflow-hidden">
        <img src={imageSrc} alt={`${level} violin course`} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-amber-900">{level} Course</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-amber-700">{price}</div>
            <div className="text-sm text-amber-600">{duration}</div>
          </div>
        </div>
        
        <p className="text-amber-700 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-amber-900 mb-2">What You'll Learn:</h4>
          <ul className="space-y-1">
            {skills.map((skill, index) => (
              <li key={index} className="text-amber-700 text-sm flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between text-sm text-amber-600 mb-4">
          <span>{lessons} lessons</span>
          <span>Lifetime access</span>
        </div>
        
        <Link to={linkTo}>
          <Button className="w-full bg-amber-800 hover:bg-amber-700">
            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

/**
 * Timeline item component for learning path visualization
 */
interface TimelineItemProps {
  week: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

function TimelineItem({ week, title, description, isCompleted }: TimelineItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 ${
        isCompleted ? 'bg-amber-600' : 'bg-amber-300'
      }`} />
      <div className="flex-grow">
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-sm font-medium text-amber-600">{week}</span>
        </div>
        <h3 className="text-lg font-semibold text-amber-900">{title}</h3>
        <p className="text-amber-700">{description}</p>
      </div>
    </div>
  )
}

/**
 * Feature card component for highlighting course benefits
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </div>
  )
}
