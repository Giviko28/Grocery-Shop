import icon from "../../assets/gift-icon.png";

export const Popup = ({ isPopupClicked, setIsPopupClicked }) => {
  const handleClick = () => {
    localStorage.setItem("isClicked", "true");
    setIsPopupClicked(true);
  };

  if (isPopupClicked) return null;

  return (
    <div className="fixed inset-0 left-10 right-10 sm:left-20 sm:right-20 flex justify-center items-center animate-jump-in z-10">
      <div className="flex md:flex-row flex-col items-center bg-white md:max-w-2xl lg:max-w-3xl p-6 rounded-2xl shadow-xl relative">
        <div className="w-1/2 flex justify-center md:block">
          <img src={icon} alt="Gift Icon" />
        </div>
        <div className="md:w-1/2 w-full md:p-12 p-2 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Don't leave empty handed! Enjoy free delivery 🔥
          </h1>
          <p className="text-sm md:text-md text-gray-600">
            Complete your purchase with free shipping now! Use the coupon code
            below. 🥳
          </p>
          <button className="block w-full flex justify-center border-dotted border-2 p-2 rounded font-bold">
            PP5_U1WKJH
          </button>
          <button
            onClick={handleClick}
            className="flex justify-center w-full bg-primary text-white p-2 rounded"
          >
            Go back to shopping
          </button>
        </div>
        <button
          onClick={handleClick}
          className="absolute top-3 right-5 bg-primary text-white px-4 py-2 rounded-3xl"
        >
          X
        </button>
      </div>
    </div>
  );
};
