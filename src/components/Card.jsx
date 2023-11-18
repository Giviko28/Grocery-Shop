import React, { useState } from "react";
import { HandleCount } from "./buttons/HandleCount.jsx";
import { AddToCart } from "./buttons/AddToCart.jsx";

export const Card = ({ item, cart }) => {
  const [isInfo, setIsInfo] = useState(false);
  const [animate, setAnimate] = useState(true);

  const cardClass = `p-4 text-center bg-white shadow shadow-slate-200 rounded relative ${
    animate ? "animate-rotate-y animate-duration-700 animate-ease-in" : ""
  }`;
  const lowestPrice = Math.min(...item.stores.map((store) => store.price));
  const lowestPriceStore = item.stores.find(
    (store) => store.price === lowestPrice,
  );

  const handleClick = () => {
    setIsInfo((prevInfo) => !prevInfo);
    setAnimate((prevAnimate) => !prevAnimate);
  };

  return (
    <div key={item.name} className={cardClass}>
      {/* Info */}
      <img
        src="src/assets/info.png"
        alt="Info icon"
        className="w-6 absolute right-3 top-3 cursor-pointer z-10"
        onClick={handleClick}
      />
      <div
        className={`${
          isInfo ? "" : "hidden"
        } absolute bg-white w-full h-full inset-0 flex flex-col justify-center items-center overflow-hidden animate-rotate-y animate-duration-500 animate-ease-in`}
      >
        {item.stores &&
          item.stores.map((store) => (
            <div className="flex justify-between items-center w-full px-8">
              <img src={store.source} alt="Store Icon" className="h-32" />
              <h2 className="text-xl  text-primary font-bold">
                {store.price}₾
              </h2>
            </div>
          ))}
      </div>
      {/* End of info */}
      <div className={`flex justify-center`}>
        <img className="h-48" src={`${item.source}`} alt="Item Image" />
      </div>
      <p className="text-3xl text-primary font-medium line-clamp-1">
        {item.name}
      </p>
      <p className="text-xl text-primary flex w-full justify-center py-2">
        Cheapest in:{" "}
        <img src={lowestPriceStore.source} alt="Store icon" className="h-8" />
      </p>
      <p className="text-gray-400 font-light">{item.weight}g</p>
      <p className="text-4xl text-primary m-4">{lowestPrice}₾</p>
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
  );
};
