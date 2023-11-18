import { useCartContext } from "../../context/CartContext.jsx";

export const HandleCount = ({ item, attributes }) => {
  const { cart, setCart } = useCartContext();
  let arrayWithoutItem = cart.filter((cartItem) => cartItem.id !== item.id);
  let currentItem = cart.find((cartItem) => cartItem.id === item.id);

  const handleReduction = () => {
    if (currentItem.quantity !== 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
      return;
    }
    setCart(arrayWithoutItem);
  };
  const handleIncrease = () => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
    // setCart([...arrayWithoutItem, ...itemArray, item]);
    // setItemArray(prevItemArray => [...prevItemArray, item]);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`${attributes} flex justify-around text-5xl text-primary bg-handleCountBackground w-3/4 p-1 my-2`}
      >
        <button onClick={handleReduction}>-</button>
        <p>{currentItem.quantity}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};
