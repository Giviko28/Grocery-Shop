import { GrayLine } from "../GrayLine.jsx";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext.jsx";

export const Payment = () => {
  const [isClicked, setIsClicked] = useState([]);
  const { cart, setCart } = useCartContext();

  const stores = ["spar", "orinabiji", "nikora"];

  const activeRadio = "accent-randomOrange transform scale-125";
  const inActiveRadio = "accent-gray-400 transform scale-125";
  const activeRadioLabel = "text-lg text-primary font-bold";
  const inActiveRadioLabel = "text-lg text-gray-400 font-light";

  const handleClick = (store) => {
    setIsClicked([]);
    let clickedStores = [];
    clickedStores[store] = !clickedStores[store];
    setIsClicked(clickedStores);
  };

  const storeTotal = [];
  const clickedStore = Object.keys(isClicked);

  stores.forEach((store) => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item[store] * item.quantity;
    });
    storeTotal[store] = Math.round(sum * 100) / 100;
  });

  return (
    <div className="bg-white lg:w-3/4 w-11/12 rounded-2xl my-6 lg:my-0 p-6 ">
      <p className="text-2xl text-primary font-bold">Order Summary</p>
      <GrayLine attribute="my-6" />
      {/* store prices */}
      <div className="flex flex-col space-y-2">
        {stores &&
          stores.map((store, index) => (
            <div id={index} className="flex space-x-2">
              <input
                onClick={() => handleClick(store)}
                className={isClicked[store] ? activeRadio : inActiveRadio}
                name="store"
                type="radio"
              />
              <label
                className={
                  isClicked[store] ? activeRadioLabel : inActiveRadioLabel
                }
                htmlFor="store"
              >
                {store[0].toUpperCase() + store.slice(1, store.length)}:{" "}
                {storeTotal[store]}₾
              </label>
            </div>
          ))}
      </div>
      <GrayLine attribute="my-6" />
      {/* promo code */}
      <div className="relative">
        <input
          className="bg-gray-100 w-full p-4 rounded-3xl font-bold"
          type="text"
          placeholder="Add promo"
        />
        <button className="absolute bg-primary text-handleCountBackground font-medium py-4 px-9 rounded-3xl right-0 shadow shadow-lg">
          Apply
        </button>
      </div>
      <GrayLine attribute="my-6" />
      {/* all costs */}
      <div className="text-lg space-y-3">
        <div className="flex justify-between">
          <p className="text-gray-400">Subtotal</p>
          <p className="text-primary font-bold">
            {storeTotal[clickedStore]
              ? "₾ " + storeTotal[clickedStore]
              : "Choose your store"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Delivery Fee</p>
          <p className="text-primary font-bold">₾ 3.0</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Coupon Discount</p>
          <p className="text-primary font-bold">₾ 0.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Service Fee</p>
          <p className="text-primary font-bold">₾ 0.20</p>
        </div>
      </div>
      <GrayLine />
      <div className="flex justify-between text-2xl text-primary font-bold">
        <p className="">Total</p>
        <p>
          {storeTotal[clickedStore]
            ? "₾ " + (storeTotal[clickedStore] + 3.2)
            : "Choose your store"}
        </p>
      </div>
      {/* confirmation button(s) */}
      <button className="bg-handleCountBackground text-primary w-full p-4 rounded-3xl font-bold my-6">
        Confirm order
      </button>
    </div>
  );
};
