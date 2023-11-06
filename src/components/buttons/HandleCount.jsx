import {useCartContext} from "../../context/CartContext.jsx";
import {useState} from "react";

export const HandleCount = ({item}) => {
  const {cart, setCart} = useCartContext();
  let arrayWithoutItem = cart.filter(cartItem => cartItem !== item);
  let itemArray = cart.filter(cartItem => cartItem === item);
  // idk tbh i dont need to use the 2 states i like the code like this better ;p
  // const [arrayWithoutItem, setArrayWithoutItem] = useState(cart.filter(cartItem => cartItem !== item));
  // const [itemArray, setItemArray] = useState(cart.filter(cartItem => cartItem === item));


  const handleReduction = () => {
    if (itemArray.length !== 1) {
      itemArray.pop();
      setCart([...arrayWithoutItem, ...itemArray]);
      return;
    }
    setCart(arrayWithoutItem);
  }
  const handleIncrease = () => {
    setCart([...arrayWithoutItem, ...itemArray, item]);
    // setItemArray(prevItemArray => [...prevItemArray, item]);
  }

  return (
    <div className='flex justify-center'>
      <div className='flex justify-around text-5xl text-primary bg-handleCountBackground w-3/4 p-1 my-2'>
        <button onClick={handleReduction}>-</button>
        <p>{itemArray.length}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  )
}