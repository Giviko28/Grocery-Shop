import { GrayLine } from "../GrayLine.jsx";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext.jsx";

export const Payment = () => {
  const [clicked, setClicked] = useState({});
  const { cart, setCart } = useCartContext();

  const deliveryFee = 3.2;
  const serviceFee = 0.2;
  const totalFees = deliveryFee + serviceFee;

  const calculateTotal = (storeToCalculate) => {
    return cart.reduce((sum, item) => {
      let priceInStore = item.stores.find(
        (store) => store.name === storeToCalculate,
      ).price;
      return sum + priceInStore * item.quantity;
    }, 0);
  };

  const stores = [
    {
      name: "nikora",
      total: calculateTotal("nikora"),
    },
    {
      name: "spar",
      total: calculateTotal("spar"),
    },
    {
      name: "orinabiji",
      total: calculateTotal("orinabiji"),
    },
  ];

  const activeRadio = "accent-randomOrange transform scale-125";
  const inActiveRadio = "accent-gray-400 transform scale-125";
  const activeRadioLabel = "text-lg text-primary font-bold";
  const inActiveRadioLabel = "text-lg text-gray-400 font-light";

  const handleClick = (store) => {
    setClicked(store);
  };

  return (
    <div className="bg-white lg:w-3/4 w-11/12 rounded-2xl my-6 lg:my-0 p-6 ">
      <p className="text-2xl text-primary font-bold">Order Summary</p>
      <GrayLine attribute="my-6" />
      {/* store prices */}
      <div className="flex flex-col space-y-2">
        {stores &&
          stores.map((store, index) => (
            <div className="flex space-x-2">
              <input
                onClick={() => handleClick(store)}
                className={
                  clicked.name === store.name ? activeRadio : inActiveRadio
                }
                name="store"
                type="radio"
              />
              <label
                className={
                  clicked.name === store.name
                    ? activeRadioLabel
                    : inActiveRadioLabel
                }
                htmlFor="store"
              >
                {store.name[0].toUpperCase() +
                  store.name.slice(1, store.name.length)}
                : {store.total.toFixed(2)}₾
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
            {clicked.total
              ? `₾ ${stores
                  .find((store) => store.name === clicked.name)
                  .total.toFixed(2)}`
              : "Choose your store"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Delivery Fee</p>
          <p className="text-primary font-bold">₾ {deliveryFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Coupon Discount</p>
          <p className="text-primary font-bold">₾ 0.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Service Fee</p>
          <p className="text-primary font-bold">₾ {serviceFee.toFixed(2)}</p>
        </div>
      </div>
      <GrayLine />
      <div className="flex justify-between text-2xl text-primary font-bold">
        <p className="">Total</p>
        <p>
          {clicked.total
            ? `₾ ${(
                stores.find((store) => store.name === clicked.name).total +
                totalFees
              ).toFixed(2)}`
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
