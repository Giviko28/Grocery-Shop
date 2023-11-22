import { Header } from "../components/layout/Header.jsx";
import { Banner } from "../components/home/Banner.jsx";
import { CategoriesSlider } from "../components/home/CategoriesSlider.jsx";
import { ItemList } from "../components/home/ItemList.jsx";
import { Popup } from "../components/layout/Popup.jsx";
import { useState } from "react";

export const Home = () => {
  const [isPopupClicked, setIsPopupClicked] = useState(
    localStorage.getItem("isClicked") ?? false,
  );
  const parentClass = `sm:py-3 sm:px-8 bg-gray-100 ${
    !isPopupClicked ? "blur-md" : ""
  }`;

  return (
    <>
      <div className={parentClass}>
        <Header />
        <div className="px-3 py-1 sm:px-0 lg:py-0">
          <Banner />
          <CategoriesSlider />
          <ItemList />
        </div>
      </div>
      <Popup
        isPopupClicked={isPopupClicked}
        setIsPopupClicked={setIsPopupClicked}
      />
    </>
  );
};
