/**
 * Teaching Method page component that explains the educational philosophy and approach
 * Showcases the structured methodology used for violin instruction
 */
import { 
  BookOpen, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Music, 
  Clock, 
  Award,
  Brain,
  Heart,
  Zap,
  TrendingUp
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Progress } from '../components/ui/progress'

export default function TeachingMethod() {
  /**
   * Data for teaching principles
   */
  const principles = [
    {
      icon: Brain,
      title: "Progressive Learning",
      description: "Step-by-step approach that builds upon previous knowledge",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "Fostering love and passion for music through engaging content",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Zap,
      title: "Active Practice",
      description: "Hands-on learning with immediate feedback and correction",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: TrendingUp,
      title: "Continuous Assessment",
      description: "Regular evaluation and personalized improvement plans",
      color: "bg-green-100 text-green-600"
    }
  ]

  /**
   * Data for learning stages
   */
  const stages = [
    {
      stage: 1,
      title: "Foundation Building",
      duration: "Months 1-3",
      progress: 100,
      description: "Proper posture, bow hold, and basic finger placement",
      skills: ["Correct violin holding position", "Basic bow technique", "First position fingering", "Simple scales"]
    },
    {
      stage: 2,
      title: "Skill Development",
      duration: "Months 4-8",
      progress: 75,
      description: "String crossing, basic pieces, and rhythm patterns",
      skills: ["String crossing exercises", "Simple melodies", "Rhythm reading", "Intonation training"]
    },
    {
      stage: 3,
      title: "Musical Expression",
      duration: "Months 9-18",
      progress: 60,
      description: "Dynamics, phrasing, and intermediate repertoire",
      skills: ["Dynamic control", "Musical phrasing", "Intermediate pieces", "Performance skills"]
    },
    {
      stage: 4,
      title: "Advanced Technique",
      duration: "18+ Months",
      progress: 40,
      description: "Advanced bowing, positions, and complex repertoire",
      skills: ["Advanced bow techniques", "Higher positions", "Complex repertoire", "Personal style"]
    }
  ]

  /**
   * Data for teaching techniques
   */
  const techniques = [
    {
      title: "Visual Learning",
      description: "High-quality video demonstrations and visual aids",
      icon: "📹",
      benefits: ["Clear technique demonstration", "Replay capability", "Multiple camera angles"]
    },
    {
      title: "Audio Training",
      description: "Ear training exercises and backing tracks",
      icon: "🎧",
      benefits: ["Pitch recognition", "Rhythm development", "Ensemble playing"]
    },
    {
      title: "Interactive Practice",
      description: "Real-time feedback and guided practice sessions",
      icon: "🎯",
      benefits: ["Immediate correction", "Progress tracking", "Personalized exercises"]
    },
    {
      title: "Theory Integration",
      description: "Music theory woven into practical learning",
      icon: "📚",
      benefits: ["Understanding music structure", "Improved sight-reading", "Better musicianship"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Teaching Method</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
            A scientifically-proven, student-centered approach that makes violin learning 
            engaging, effective, and enjoyable for students of all ages.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
              View Curriculum
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
              Book Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Teaching Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four fundamental principles that guide every aspect of our teaching methodology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${principle.color} flex items-center justify-center mx-auto mb-4`}>
                    <principle.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Stages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Progressive Learning Stages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach takes students from complete beginners to confident musicians
            </p>
          </div>

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-6 p-6 rounded-lg bg-gray-50">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {stage.stage}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stage.title}</h3>
                    <span className="text-amber-600 font-medium">{stage.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{stage.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Average Progress</span>
                      <span className="text-sm text-gray-500">{stage.progress}%</span>
                    </div>
                    <Progress value={stage.progress} className="h-2" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-2">
                    {stage.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Techniques */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Innovative Teaching Techniques</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine traditional violin pedagogy with modern technology for optimal learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{technique.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{technique.title}</CardTitle>
                      <CardDescription>{technique.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {technique.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-amber-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Proven Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our methodology delivers measurable progress and student satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Student Satisfaction Rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">50%</h3>
              <p className="text-gray-600">Faster Progress Than Traditional Methods</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h3>
              <p className="text-gray-600">Successful Students Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Method?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their violin playing with our proven methodology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
