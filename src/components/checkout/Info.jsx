import edit from "../../assets/edit.png";
import map from "../../assets/map.png";
import { useCartContext } from "../../context/CartContext.jsx";
import { HandleCount } from "../buttons/HandleCount.jsx";
import { GrayLine } from "../GrayLine.jsx";
import { useEffect } from "react";

export const Info = () => {
  const { cart, setCart } = useCartContext();
  // Because of strict mode, I have to save the value of the cart in a variable
  const savedCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  useEffect(() => {
    setCart(savedCart);
  }, []);
  return (
    <div className="lg:w-9/12 w-11/12">
      {/* top part */}
      <div className="bg-white rounded-2xl p-6 space-y-6">
        {/* description part */}
        <div className="flex justify-between">
          <p className="text-2xl text-primary font-bold">
            Delivery information
          </p>
          <div className="flex text-randomOrange">
            <img className="h-8" src={edit} alt="Edit Icon" />
            <p className="font-bold">Edit</p>
          </div>
        </div>
        <GrayLine />
        {/* delivery info part */}
        <div className="flex space-x-4">
          <img className="h-24 w-24 rounded-2xl" src={map} alt="Map Icon" />
          <div className="space-y-3">
            <p className="text-xl text-primary font-bold">Delivery to</p>
            <div>
              <p className="text-md text-gray-400 font-light">
                Address: +995 598-75-33-55
              </p>
              <p className="text-md text-gray-400 font-light">
                Ilia Chavchavadze Street 39, Apartment 17th
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white mt-6 rounded-2xl">
        <p className="text-3xl text-primary font-bold">Your catalogue</p>
        {cart &&
          cart.map((item, id) => {
            const min = Math.min(...item.stores.map((store) => store.price));

            return (
              <div className="animate-fade-right" key={id}>
                {/* The actual item, different from Card Component, i will separate when i have the time */}
                <div className="flex justify-between py-6">
                  <div className="flex space-x-3">
                    <img className="h-32" src={item.source} alt="" />
                    <div>
                      <p className="text-primary text-xl font-medium">
                        {item.name}
                      </p>
                      <p className="text-gray-500 font-light">{item.weight}g</p>
                      <p className="text-primary font-medium text-lg">
                        Lowest: {min}₾
                      </p>
                    </div>
                  </div>
                  <div className="w-4/12">
                    <HandleCount attributes="bg-white" item={item} />
                  </div>
                </div>
                {/* Prices */}
                <div className="flex justify-around text-primary font-bold">
                  {item.stores &&
                    item.stores.map((store) => (
                      <div className="flex items-center">
                        <img className="h-10" src={store.source} alt="" />
                        {store.price}₾
                      </div>
                    ))}
                </div>
                <GrayLine />
              </div>
            );
          })}
      </div>
    </div>
  );
};
