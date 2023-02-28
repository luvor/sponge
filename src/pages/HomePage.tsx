import { useEffect, useState } from 'react'

import CharacterList from '../components/CharacterList'
import StoriesSlider from '../components/StoriesSlider'

import MarvelService from '../services/MarvelService'

export default function HomePage() {
  const [characters, setCharacters] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    MarvelService.getCharacters().then((res) => {
      setCharacters(res.data.data.results)
      setLoading(false)
      console.log(res.data.data.results)
    })
  }, [])
  return (
    <div className="p-4 max-w-full flex">
      <div>
        <h1 className="text-2xl font-bold mb-4">Marvel Characters</h1>
        <CharacterList characters={characters} isLoading={loading} />
      </div>
      <StoriesSlider />
    </div>
  )
}
