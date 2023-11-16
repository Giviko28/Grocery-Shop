import data from "../../data/db.json";
import { useCartContext } from "../../context/CartContext.jsx";
import { AddToCart } from "../buttons/AddToCart.jsx";
import { HandleCount } from "../buttons/HandleCount.jsx";

export const ItemList = () => {
  const { cart, setCart } = useCartContext();
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
            <div className="p-4 text-center bg-white shadow shadow-slate-200 rounded">
              <div className="flex justify-center">
                <img className="h-48" src={`${item.source}`} alt="" />
              </div>
              <p className="text-3xl text-primary font-medium line-clamp-1">
                {item.name}
              </p>
              <p className="text-xl text-primary">({item.quote})</p>
              <p className="text-gray-400 font-light">{item.weight}g</p>
              <p className="text-4xl text-primary m-4">{item.orinabiji}₾</p>
              {cart.find((cartItem) => cartItem.id === item.id) ? (
                <HandleCount item={{ ...item, quantity: 1 }} />
              ) : (
                <AddToCart item={{ ...item, quantity: 1 }} />
              )}
              {/*{cart.includes(item) ? (*/}
              {/*  <HandleCount item={{ ...item, quantity: 1 }} />*/}
              {/*) : (*/}
              {/*  <AddToCart item={{ ...item, quantity: 1 }} />*/}
              {/*)}*/}
            </div>
          ))}
      </div>
    </div>
  );
};
