import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart, clearCart, addItemToCart, decreaseItemQuantity, CartItem } from '../../store/slices/cartSlice'
export default function CartPage() {
  const dispatch = useDispatch()
  const cartList = useSelector((state: any) => state.cart.cartList as CartItem[])

  const handleRemoveFromCart = (e: any, id: number) => {
    e.preventDefault()
    console.log('remove from cart')
    dispatch(removeItemFromCart(id))
  }

  const handleAddToCart = (e: any, item: CartItem) => {
    e.preventDefault()
    console.log('add to cart')
    dispatch(addItemToCart(item))
  }

  const handleRemoveOneFromCart = (e: any, item: CartItem) => {
    e.preventDefault()
    console.log('remove one from cart')
    dispatch(decreaseItemQuantity(item))
  }

  return (
    <div className="flex flex-col h-screen p-8">
      <h1 className="text-2xl font-bold">Корзина</h1>
      {/* make a list of CartItem */}
      <ul className="flex flex-col py-4">
        {cartList.map((item) => (
          <li key={item.id} className="flex flex-row items-center justify-between mb-2">
            <div className="flex items-center justify-center gap-4">
              <img src={`${item.image}.jpg`} alt={item.name} className="object-cover w-32 h-32" />
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="text-xl font-bold">Кол-во: {item.quantity}</p>
                <p className="text-xl font-bold">Цена: {item.price} тг.</p>
                <div className="flex items-center">
                  <button onClick={(e) => handleAddToCart(e, item)} className="px-6 py-2 bg-blue rounded border-none text-white hover:bg-blue-900 cursor-pointer">
                    +
                  </button>
                  <p className="px-1"></p>
                  <button onClick={(e) => handleRemoveOneFromCart(e, item)} className="px-6 py-2 bg-blue rounded border-none text-white hover:bg-blue-900 cursor-pointer">
                    -
                  </button>
                  <p className="px-4"></p>
                  <button className="px-6 py-2 bg-blue rounded border-none text-white hover:bg-blue-900 cursor-pointer" onClick={(e) => handleRemoveFromCart(e, item.id)}>
                    Удалить из корзины
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* cart total summary */}
      <div className="flex flex-col items-end gap-4">
        <button className="px-6 py-2 bg-blue rounded border-none text-white hover:bg-blue-900 cursor-pointer" onClick={() => dispatch(clearCart())}>
          Очистить корзину
        </button>
        <p className="text-2xl font-bold">Общая сумма: {cartList.reduce((acc, item) => acc + item.price * item.quantity, 0)} тг.</p>
        <button className="bg-black text-white px-4 py-2 rounded-md border-none px-6 py-2">Оформить заказ</button>
      </div>
    </div>
  )
}
