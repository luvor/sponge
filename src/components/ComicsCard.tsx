import { Comic } from '../types'

export default function ComicsCard({ comic }: { comic: Comic }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} className="w-1/2" />
      <h2 className="text-xl font-bold">{comic.title}</h2>
      <p>{comic.description}</p>
    </div>
  )
}
