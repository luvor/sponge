import { useEffect, useState } from 'react'
import MarvelService from '../services/MarvelService'

import { Story } from '../types'

export default function StoriesSlider() {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    MarvelService.getStories().then((res) => {
      setStories(res.data.data.results)
      setLoading(false)
      console.log(res.data.data.results)
    })
  }, [])
  return (
    <div className="px-4 max-w-md min-w-md">
      <h1 className="text-2xl font-bold mb-4">Marvel Stories</h1>
      {stories.map((story) => (
        <div key={story.id} className="flex flex-row mt-2">
          <a className="block w-full hover:bg-gray-50 pt-1 decoration-none hover:text-red-400 text-black" href={`/stories/${story.id}`}>
            {story.title}
          </a>
        </div>
      ))}
    </div>
  )
}
