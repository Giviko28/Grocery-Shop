import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import thunder from "../../assets/thunder.png";
import cart from "../../assets/cart.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full bg-primary py-6 px-10 rounded-2xl flex justify-between items-center">
      {/* First part */}
      <div className="flex space-x-8 items-center lg:w-7/12 w-full ">
        <img className="w-8 h-6" src={menu} alt="Menu Logo" />
        <Link to="/">
          <img className="w-64 lg:block hidden" src={logo} alt="Main Logo" />
        </Link>
        <div className="relative w-full">
          <input
            className="w-full py-2 px-4 rounded-3xl placeholder-gray-500"
            type="text"
            placeholder="Search for Grocery, Stores, Vegetable, and Meat"
          />
          <img
            className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-4"
            src={search}
            alt="Search logo"
          />
        </div>
      </div>
      {/* Second Part */}
      <div className="flex justify-end space-x-1 font-medium items-center whitespace-nowrap">
        {/* text of second part */}
        <div className="lg:flex space-x-2 hidden">
          <img src={thunder} alt="Thunder Logo" />
          <p className="text-white">Order now and get it within</p>
          <p className="text-quirkyYellow">15 mins!</p>
        </div>
        {/* shopping cart */}
        <div className="px-2">
          <div className="bg-white rounded-3xl p-1.5">
            <Link to="/checkout">
              <img src={cart} alt="Cart logo" />
            </Link>
          </div>
        </div>
        {/* profile logo */}
        <div className="bg-white p-1.5 rounded-3xl border-dotted ">
          <img src={profile} alt="Profile logo" />
        </div>
      </div>
    </div>
  );
};
