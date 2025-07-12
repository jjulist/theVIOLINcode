/**
 * Resources page component for practice materials and learning tools
 * Provides access to sheet music, audio tracks, and educational content
 */
import { Download, FileText, Headphones, Play, Search, Star } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Comprehensive collection of sheet music, practice tracks, and learning materials
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'sheet-music', 'audio', 'exercises', 'scales'].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category.replace('-', ' ')}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Sheet Music Library */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Sheet Music Library</h2>
              <div className="grid gap-4">
                {sheetMusicItems.map((item) => (
                  <SheetMusicCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Quick Access Panel */}
            <div className="space-y-6">
              {/* Practice Tools */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Practice Tools</h3>
                <div className="space-y-3">
                  <ToolCard
                    title="Metronome"
                    description="Interactive metronome for timing practice"
                    icon={<Play className="h-5 w-5" />}
                  />
                  <ToolCard
                    title="Tuner"
                    description="Chromatic tuner for perfect pitch"
                    icon={<Headphones className="h-5 w-5" />}
                  />
                  <ToolCard
                    title="Scale Generator"
                    description="Generate scales in any key"
                    icon={<FileText className="h-5 w-5" />}
                  />
                </div>
              </div>

              {/* Audio Library */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Audio Library</h3>
                <div className="space-y-3">
                  {audioTracks.map((track) => (
                    <AudioTrackCard key={track.id} track={track} />
                  ))}
                </div>
              </div>

              {/* Quick Downloads */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Quick Downloads</h3>
                <div className="space-y-2">
                  <DownloadItem title="Beginner Exercise Pack" size="2.3 MB" />
                  <DownloadItem title="Scale Practice Sheets" size="1.8 MB" />
                  <DownloadItem title="Finger Position Guide" size="950 KB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-12 px-4 bg-amber-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Video Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/**
 * Sheet music card component for displaying music pieces
 */
interface SheetMusicItem {
  id: string;
  title: string;
  composer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  key: string;
  pages: number;
  rating: number;
  category: string;
}

interface SheetMusicCardProps {
  item: SheetMusicItem;
}

function SheetMusicCard({ item }: SheetMusicCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-amber-900">{item.title}</h3>
          <p className="text-amber-700">by {item.composer}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{item.rating}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs ${
          item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
          item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {item.difficulty}
        </span>
        <span>Key: {item.key}</span>
        <span>{item.pages} pages</span>
      </div>
      
      <div className="flex gap-2">
        <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
          <Play className="h-4 w-4 mr-1" />
          Preview
        </Button>
        <Button size="sm" variant="outline" className="border-amber-700 text-amber-700">
          <Download className="h-4 w-4 mr-1" />
          Download
        </Button>
      </div>
    </div>
  )
}

/**
 * Practice tool card component
 */
interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ToolCard({ title, description, icon }: ToolCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-amber-50 transition cursor-pointer">
      <div className="text-amber-700">{icon}</div>
      <div>
        <h4 className="font-medium text-amber-900">{title}</h4>
        <p className="text-sm text-amber-600">{description}</p>
      </div>
    </div>
  )
}

/**
 * Audio track card component
 */
interface AudioTrack {
  id: string;
  title: string;
  duration: string;
  type: string;
}

interface AudioTrackCardProps {
  track: AudioTrack;
}

function AudioTrackCard({ track }: AudioTrackCardProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-amber-50 transition">
      <div>
        <h4 className="font-medium text-amber-900">{track.title}</h4>
        <p className="text-sm text-amber-600">{track.type} • {track.duration}</p>
      </div>
      <Button size="sm" variant="ghost">
        <Play className="h-4 w-4" />
      </Button>
    </div>
  )
}

/**
 * Download item component
 */
interface DownloadItemProps {
  title: string;
  size: string;
}

function DownloadItem({ title, size }: DownloadItemProps) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-amber-50 rounded transition cursor-pointer">
      <div>
        <p className="font-medium text-amber-900">{title}</p>
        <p className="text-sm text-amber-600">{size}</p>
      </div>
      <Download className="h-4 w-4 text-amber-700" />
    </div>
  )
}

/**
 * Video tutorial card component
 */
interface VideoTutorial {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  views: string;
}

interface VideoCardProps {
  video: VideoTutorial;
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
          <Play className="h-12 w-12 text-white" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-amber-900 mb-2">{video.title}</h3>
        <p className="text-sm text-amber-600">{video.views} views</p>
      </div>
    </div>
  )
}

/**
 * Sample data for sheet music library
 */
const sheetMusicItems: SheetMusicItem[] = [
  {
    id: '1',
    title: 'Canon in D',
    composer: 'Johann Pachelbel',
    difficulty: 'Intermediate',
    key: 'D Major',
    pages: 4,
    rating: 4.8,
    category: 'classical'
  },
  {
    id: '2',
    title: 'Amazing Grace',
    composer: 'Traditional',
    difficulty: 'Beginner',
    key: 'G Major',
    pages: 2,
    rating: 4.6,
    category: 'traditional'
  },
  {
    id: '3',
    title: 'Ave Maria',
    composer: 'Franz Schubert',
    difficulty: 'Advanced',
    key: 'Bb Major',
    pages: 6,
    rating: 4.9,
    category: 'classical'
  },
  {
    id: '4',
    title: 'Twinkle, Twinkle, Little Star',
    composer: 'Traditional',
    difficulty: 'Beginner',
    key: 'C Major',
    pages: 1,
    rating: 4.2,
    category: 'beginner'
  }
]

/**
 * Sample data for audio tracks
 */
const audioTracks: AudioTrack[] = [
  { id: '1', title: 'G Major Scale', duration: '0:45', type: 'Scale Practice' },
  { id: '2', title: 'Bow Technique Exercise', duration: '2:30', type: 'Exercise' },
  { id: '3', title: 'Canon in D - Backing Track', duration: '4:15', type: 'Play Along' },
  { id: '4', title: 'Vibrato Practice', duration: '1:20', type: 'Technique' }
]

/**
 * Sample data for video tutorials
 */
const videoTutorials: VideoTutorial[] = [
  {
    id: '1',
    title: 'Proper Bow Hold Technique',
    duration: '8:45',
    thumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/18036b26-1180-4e30-9849-7eb680ddb781.jpg',
    views: '12.5K'
  },
  {
    id: '2',
    title: 'First Position Fingering',
    duration: '12:30',
    thumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/bb8c7fed-d86f-4e09-861b-a280d276c165.jpg',
    views: '8.9K'
  },
  {
    id: '3',
    title: 'Reading Violin Sheet Music',
    duration: '15:20',
    thumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/c1f57b86-2320-4b04-aa7e-350e7d13dd00.jpg',
    views: '18.2K'
  },
  {
    id: '4',
    title: 'Vibrato Fundamentals',
    duration: '10:15',
    thumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/075ffcdd-4a92-4bf3-aa12-efb0a102322b.jpg',
    views: '6.7K'
  },
  {
    id: '5',
    title: 'Scales and Arpeggios',
    duration: '14:00',
    thumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/b4b13ad1-6203-4ab0-91da-246c47e07982.jpg',
    views: '9.3K'
  },
  {
    id: '6',
    title: 'Common Playing Mistakes',
    duration: '11:45',
    thumbnail: 'https://pub-cdn.sider.ai/u/U05XHRZ9YX/web-coder/6858dcac1edf704c1cf2dde1/resource/8dfa2acc-ee33-43fe-8bae-3ba5ab163e3d.jpg',
    views: '15.1K'
  }
]
