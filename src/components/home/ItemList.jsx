import data from "../../data/db.json";
import { useCartContext } from "../../context/CartContext.jsx";
import { useEffect } from "react";
import { Card } from "../Card.jsx";

export const ItemList = () => {
  const { cart, setCart } = useCartContext();
  // Because of strict mode, I have to save the value of the cart in a variable
  const savedCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  useEffect(() => {
    setCart(savedCart);
  }, []);

  return (
    <div className="py-4">
      <div className="flex justify-between py-4">
        <p className="text-4xl text-primary font-bold">You might need</p>
        <p className="text-randomOrange text-xl font-medium">See more -></p>
      </div>
      {/* actual items */}
      <div className="py-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {data.items &&
          data.items.map((item, id) => (
            <Card key={id} item={item} cart={cart} />
          ))}
      </div>
    </div>
  );
};
