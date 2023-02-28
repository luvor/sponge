import { Link } from 'react-router-dom'
import { Comic } from '../types'

export default function ComicsCard({ comic, size }: { comic: Comic; size: string }) {
  const styles = {
    small: {
      gridRowEnd: 'span 26',
    },
    medium: {
      gridRowEnd: 'span 34',
    },
    large: {
      gridRowEnd: 'span 50',
    },
  } as { [key: string]: React.CSSProperties }
  return (
    <Link
      style={{
        ...styles[size],
      }}
      className="group decoration-none m-1 border-0.1px border-gray-100 border-solid flex items-center overflow-hidden  text-black"
      to={`/comics/${comic.id}`}
    >
      <div className="relative">
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} className="object-contain w-full h-full bg-black" />
        {/* on hover show comics title */}
        <div className="absolute duration-300 top-0 left-0 w-full h-full group-hover:bg-black bg-transparent group-hover:bg-opacity-50 group-hover:text-white text-transparent text-center flex justify-center items-center">
          <h2 className="text-2xl font-bold">{comic.title}</h2>
        </div>
      </div>
    </Link>
  )
}
