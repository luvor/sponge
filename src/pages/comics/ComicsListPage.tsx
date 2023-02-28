import { useEffect, useState } from 'react'

import ComicsList from '../../components/ComicsList'

import MarvelService from '../../services/MarvelService'

export default function ComicsListPage() {
  const [comics, setComics] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    MarvelService.getComics().then((res) => {
      setComics(res.data.data.results)
      setLoading(false)
      console.log(res.data.data.results)
    })
  }, [])
  return (
    <div className="p-4 max-w-full bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Комиксы Marvel</h1>
      <ComicsList comics={comics} isLoading={loading} />
    </div>
  )
}
