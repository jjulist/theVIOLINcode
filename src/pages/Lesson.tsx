/**
 * Individual lesson page component
 * Displays lesson content, video, exercises, and progress tracking
 */
import { ArrowLeft, Play, Download, CheckCircle, Clock, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

export default function Lesson() {
  const { id } = useParams()
  
  // Mock lesson data based on ID
  const lesson = getLessonData(id || '1')

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link to="/curriculum" className="flex items-center gap-2 hover:text-amber-200 transition">
              <ArrowLeft className="h-4 w-4" />
              Back to Curriculum
            </Link>
            <div className="h-6 w-px bg-amber-600"></div>
            <span className="text-amber-200">Lesson {lesson.number}</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Lesson Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-amber-900 mb-2">{lesson.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-amber-700">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {lesson.difficulty}
                    </span>
                  </div>
                </div>
                <Button className="bg-amber-800 hover:bg-amber-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark Complete
                </Button>
              </div>
              <p className="text-amber-700">{lesson.description}</p>
            </div>

            {/* Video Player */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-4">Lesson Video</h2>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <img 
                  src={lesson.videoThumbnail} 
                  alt="Lesson video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <Button size="lg" className="bg-amber-800 hover:bg-amber-700 rounded-full p-4">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {lesson.duration}
                </div>
              </div>
            </div>

            {/* Lesson Content Tabs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="exercises">Exercises</TabsTrigger>
                  <TabsTrigger value="sheet-music">Sheet Music</TabsTrigger>
                  <TabsTrigger value="tips">Tips</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-900">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {lesson.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-amber-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="exercises" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-900">Practice Exercises</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {lesson.exercises.map((exercise, index) => (
                        <AccordionItem key={index} value={`exercise-${index}`}>
                          <AccordionTrigger className="text-left">
                            <span className="font-medium">{exercise.name}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              <p className="text-amber-700">{exercise.description}</p>
                              <div className="flex items-center gap-2 text-sm text-amber-600">
                                <Clock className="h-4 w-4" />
                                Practice time: {exercise.duration}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
                
                <TabsContent value="sheet-music" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-900">Sheet Music & Resources</h3>
                    <div className="grid gap-4">
                      {lesson.resources.map((resource, index) => (
                        <div key={index} className="border border-amber-200 rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-amber-900">{resource.name}</h4>
                            <p className="text-sm text-amber-600">{resource.type}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tips" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-900">Practice Tips</h3>
                    <div className="space-y-3">
                      {lesson.tips.map((tip, index) => (
                        <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                          <p className="text-amber-800">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-amber-700">Lesson Progress</span>
                    <span className="text-amber-600">{lesson.progress}%</span>
                  </div>
                  <Progress value={lesson.progress} className="h-2" />
                </div>
                <div className="text-sm text-amber-600">
                  <p>• Video watched: {lesson.videoWatched ? '✓' : '○'}</p>
                  <p>• Exercises completed: {lesson.exercisesCompleted}/3</p>
                  <p>• Sheet music downloaded: {lesson.sheetMusicDownloaded ? '✓' : '○'}</p>
                </div>
              </div>
            </div>

            {/* Next Lesson */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Up Next</h3>
              <div className="space-y-3">
                <img 
                  src="https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/418c18c7-1d27-40d7-b9ff-9013d57a9547.jpg" 
                  alt="Next lesson preview"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h4 className="font-medium text-amber-900">Lesson {parseInt(lesson.number) + 1}: Bow Techniques</h4>
                <p className="text-sm text-amber-700">Learn proper bowing techniques for smooth sound production.</p>
                <Button className="w-full bg-amber-800 hover:bg-amber-700">
                  Continue to Next Lesson
                </Button>
              </div>
            </div>

            {/* Course Navigation */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Course Navigation</h3>
              <div className="space-y-2">
                <Link to="/curriculum" className="block text-amber-700 hover:text-amber-900 transition">
                  ← Back to Course Overview
                </Link>
                <Link to="/resources" className="block text-amber-700 hover:text-amber-900 transition">
                  📚 Practice Resources
                </Link>
                <Link to="/methodology" className="block text-amber-700 hover:text-amber-900 transition">
                  🎯 Teaching Methods
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Get lesson data based on lesson ID
 */
function getLessonData(id: string) {
  const lessons: { [key: string]: any } = {
    '1': {
      number: '1',
      title: 'Holding the Violin and Bow',
      description: 'Learn the fundamental posture and grip techniques for holding both the violin and bow correctly. This foundation lesson is crucial for developing good playing habits.',
      duration: '15 min',
      difficulty: 'Beginner',
      progress: 65,
      videoWatched: true,
      exercisesCompleted: 2,
      sheetMusicDownloaded: false,
      videoThumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/2112fb7f-210a-47d9-a799-1dd0381b6ff2.jpg',
      objectives: [
        'Proper violin positioning on the shoulder',
        'Correct bow grip and hand position',
        'Maintaining good posture while playing',
        'Understanding the violin\'s parts and their functions'
      ],
      exercises: [
        {
          name: 'Violin Hold Practice',
          description: 'Practice holding the violin without the bow for 2-3 minutes, focusing on comfort and stability.',
          duration: '5 minutes'
        },
        {
          name: 'Bow Grip Exercise',
          description: 'Practice the correct bow grip, ensuring fingers are curved and thumb placement is optimal.',
          duration: '5 minutes'
        },
        {
          name: 'Posture Check',
          description: 'Stand in front of a mirror and check your posture with both violin and bow.',
          duration: '3 minutes'
        }
      ],
      resources: [
        {
          name: 'Violin Parts Diagram',
          type: 'PDF Reference'
        },
        {
          name: 'Posture Checklist',
          type: 'Practice Guide'
        },
        {
          name: 'Audio: Tuning Reference',
          type: 'Audio File'
        }
      ],
      tips: [
        'Start with short practice sessions (5-10 minutes) to avoid fatigue and maintain good posture.',
        'Use a mirror to check your posture regularly during practice.',
        'Keep your shoulders relaxed and avoid hunching over the instrument.',
        'The violin should rest on your collarbone, not your shoulder blade.'
      ]
    },
    '2': {
      number: '2',
      title: 'First Bow Strokes',
      description: 'Develop smooth, controlled bow movements across the strings. Learn to produce clean, consistent sounds.',
      duration: '18 min',
      difficulty: 'Beginner',
      progress: 30,
      videoWatched: false,
      exercisesCompleted: 0,
      sheetMusicDownloaded: false,
      videoThumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/2f9e725c-f377-4246-8e19-37a153595c43.jpg',
      objectives: [
        'Execute smooth bow strokes across individual strings',
        'Control bow speed and pressure',
        'Maintain consistent sound quality',
        'Understand down-bow and up-bow directions'
      ],
      exercises: [
        {
          name: 'Open String Practice',
          description: 'Play long, slow bow strokes on each open string, focusing on sound quality.',
          duration: '8 minutes'
        },
        {
          name: 'Bow Direction Exercise',
          description: 'Practice alternating down-bow and up-bow strokes with clear separation.',
          duration: '6 minutes'
        },
        {
          name: 'Dynamic Control',
          description: 'Vary the volume from soft to loud while maintaining clean sound.',
          duration: '4 minutes'
        }
      ],
      resources: [
        {
          name: 'Open String Exercises',
          type: 'Sheet Music'
        },
        {
          name: 'Bow Technique Guide',
          type: 'PDF Tutorial'
        }
      ],
      tips: [
        'Keep the bow parallel to the bridge for optimal sound production.',
        'Use the full length of the bow, from frog to tip.',
        'Listen carefully to the sound you\'re producing and adjust pressure accordingly.'
      ]
    }
  }

  return lessons[id] || lessons['1']
}
