import {Header} from "../components/layout/Header.jsx";
import {Banner} from "../components/home/Banner.jsx";
import {CategoriesSlider} from "../components/home/CategoriesSlider.jsx";
import {ItemList} from "../components/home/ItemList.jsx";

export const Home = () => {
  return (
    <div className='py-4 px-6 bg-gray-100'>
      <Header/>
      <Banner/>
      <CategoriesSlider/>
      <ItemList/>
    </div>
  )
}