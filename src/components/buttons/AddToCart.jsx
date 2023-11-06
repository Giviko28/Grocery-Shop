import {useCartContext} from "../../context/CartContext.jsx";

export const AddToCart = ({item}) => {
  const {cart, setCart} = useCartContext();

  const handleClick = () => {
    setCart(prevCart => [...prevCart, item]);
  }
  return (
    <button onClick={handleClick} className='text-5xl text-primary bg-buttonBackground w-3/4 text-center p-1 my-2'>+</button>
  )
}