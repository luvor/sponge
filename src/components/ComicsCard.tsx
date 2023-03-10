import { Link } from 'react-router-dom'
import { Comic } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart, CartItem, removeItemFromCart } from '../store/slices/cartSlice'

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

  const dispatch = useDispatch()

  const handleAddToCart = (e: any) => {
    e.preventDefault()
    console.log('add to cart')

    dispatch(
      addItemToCart({
        image: comic.thumbnail.path,
        name: comic.title,
        quantity: 1,
        id: comic.id,
        description: comic.description,
        price: 2000,
      } as CartItem)
    )
  }
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
        <div className="absolute flex flex-col duration-300 top-0 left-0 w-full h-full group-hover:bg-black bg-transparent group-hover:bg-opacity-50 group-hover:text-white text-transparent text-center flex justify-center items-center">
          <h2 className="text-2xl font-bold">{comic.title}</h2>
          <button className="group-hover:block hidden px-6 py-2 bg-blue rounded border-none text-white hover:bg-blue-900 cursor-pointer" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </Link>
  )
}
