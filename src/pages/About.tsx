/**
 * About page component showcasing instructors, teaching philosophy and school information
 * Features instructor profiles, mission statement, and contact details
 */
import { useState } from 'react'
import { Mail, Phone, MapPin, Award, Users, Clock, Star, Music, Heart, Target, Lightbulb } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

/**
 * Interface for instructor data structure
 */
interface Instructor {
  id: number
  name: string
  title: string
  experience: string
  specialties: string[]
  bio: string
  image: string
  achievements: string[]
}

/**
 * Interface for statistics data structure
 */
interface Statistic {
  icon: React.ComponentType<{ className?: string }>
  number: string
  label: string
  description: string
}

export default function About() {
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null)

  /**
   * Array of instructor profiles
   */
  const instructors: Instructor[] = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Lead Violin Instructor & Founder",
      experience: "15+ years",
      specialties: ["Classical Technique", "Performance Coaching", "Music Theory"],
      bio: "Sarah graduated from Juilliard with a Master's in Violin Performance. She has performed with major orchestras and has been teaching for over 15 years, developing innovative methods that make violin accessible to all ages.",
      image: "https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/f1d4dcb6-2cd2-4856-b19f-d08abe21e80b.jpg",
      achievements: [
        "Juilliard Master's Degree",
        "Principal Violinist - City Symphony",
        "International Competition Winner",
        "500+ Students Taught"
      ]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Advanced Technique Specialist",
      experience: "12+ years",
      specialties: ["Advanced Technique", "Competition Prep", "Chamber Music"],
      bio: "Michael specializes in advanced violin techniques and competition preparation. His students have won numerous regional and national competitions, and many have gone on to prestigious music conservatories.",
      image: "https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/604df279-5b91-4f2b-ac7c-b4dbf650735b.jpg",
      achievements: [
        "Curtis Institute Graduate",
        "Competition Coach",
        "Chamber Music Expert",
        "200+ Advanced Students"
      ]
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "Youth & Beginner Specialist",
      experience: "8+ years",
      specialties: ["Children's Education", "Beginner Methods", "Group Classes"],
      bio: "Emma has a special gift for working with young students and beginners. Her patient, encouraging approach has helped hundreds of students fall in love with the violin and build strong foundations.",
      image: "https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/a22feb7f-2829-4114-a39e-f5122ee4a1bb.jpg",
      achievements: [
        "Suzuki Method Certified",
        "Child Development Specialist",
        "Group Class Innovation",
        "300+ Young Students"
      ]
    }
  ]

  /**
   * School statistics and achievements
   */
  const statistics: Statistic[] = [
    {
      icon: Users,
      number: "1000+",
      label: "Students Taught",
      description: "Students of all ages and skill levels"
    },
    {
      icon: Award,
      number: "150+",
      label: "Competition Winners",
      description: "Students who won regional and national competitions"
    },
    {
      icon: Clock,
      number: "15",
      label: "Years Experience",
      description: "Combined teaching experience of our faculty"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "Student satisfaction rating"
    }
  ]

  /**
   * Core values and teaching philosophy points
   */
  const coreValues = [
    {
      icon: Heart,
      title: "Passion for Music",
      description: "We believe music should be joyful and inspiring. Our teaching ignites the love for violin in every student."
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Every student is unique. We tailor our approach to match individual learning styles and goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation in Teaching",
      description: "We constantly evolve our methods, incorporating modern technology with classical techniques."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We create a supportive community where students learn from each other and grow together."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">
              About ViolinMaster
            </h1>
            <p className="text-xl text-stone-700 mb-8 leading-relaxed">
              Where passion meets precision, and every student discovers their unique musical voice. 
              Our mission is to make violin education accessible, enjoyable, and transformative for all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900">
                Meet Our Teachers
              </Button>
              <Button size="lg" variant="outline" className="border-amber-800 text-amber-800">
                Our Teaching Method
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-amber-800 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-amber-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-stone-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-stone-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              These principles guide everything we do and shape the learning experience for our students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">{value.title}</h3>
                  <p className="text-stone-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Meet Our Expert Instructors</h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              Our team of dedicated professionals brings decades of combined experience and passion for violin education.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card 
                key={instructor.id} 
                className="overflow-hidden border-amber-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedInstructor(selectedInstructor === instructor.id ? null : instructor.id)}
              >
                <div className="relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-800 text-white">{instructor.experience}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-amber-900">{instructor.name}</CardTitle>
                  <p className="text-amber-700 font-medium">{instructor.title}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-stone-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="border-amber-300 text-amber-800">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {selectedInstructor === instructor.id && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-stone-600">{instructor.bio}</p>
                      <div>
                        <h4 className="font-semibold text-stone-700 mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {instructor.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-stone-600 flex items-center gap-2">
                              <Star className="h-3 w-3 text-amber-600" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full bg-amber-800 hover:bg-amber-900"
                      >
                        Book a Lesson
                      </Button>
                    </div>
                  )}
                  
                  {selectedInstructor !== instructor.id && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-amber-300 text-amber-800 hover:bg-amber-50"
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  ViolinMaster was founded in 2009 with a simple yet ambitious vision: to make world-class violin education 
                  accessible to students of all backgrounds and skill levels. What started as a small studio with just one 
                  instructor has grown into a thriving community of musicians.
                </p>
                <p>
                  Our founder, Sarah Chen, experienced firsthand the transformative power of music education. After years 
                  of performing with major orchestras, she realized her true calling was in teaching and nurturing the next 
                  generation of violinists.
                </p>
                <p>
                  Today, we're proud to have taught over 1,000 students, many of whom have gone on to successful careers 
                  in music, while others simply enjoy the lifelong gift of musical expression. Our innovative teaching 
                  methods combine traditional techniques with modern technology, ensuring every student receives a 
                  comprehensive and engaging education.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-amber-800 hover:bg-amber-900">
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/05c8aac4-6c9d-40e8-9dfd-8a485c461df7.jpg" 
                alt="ViolinMaster Studio"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-2 border-amber-200">
                <Music className="h-8 w-8 text-amber-800 mb-2" />
                <div className="text-lg font-bold text-amber-900">Est. 2009</div>
                <div className="text-sm text-stone-600">15 Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-amber-100 mb-8 text-lg">
                Ready to begin your violin journey? We'd love to hear from you and help you take the first step 
                toward musical excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-amber-200">(555) 123-VIOLIN</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-amber-200">info@violinmaster.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 p-3 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-amber-200">123 Music Avenue<br />Downtown Arts District</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-amber-700">
              <CardHeader>
                <CardTitle className="text-white">Schedule a Free Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-amber-100 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-amber-600 text-white placeholder-amber-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-amber-100 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-amber-600 text-white placeholder-amber-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-amber-100 mb-2">Experience Level</label>
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-amber-600 text-white">
                    <option value="">Select your level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-amber-100 mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 rounded-lg bg-white/10 border border-amber-600 text-white placeholder-amber-300 h-24"
                    placeholder="Tell us about your musical goals..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-amber-900 hover:bg-amber-50 font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
