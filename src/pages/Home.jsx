import {Header} from "../components/layout/Header.jsx";
import {Banner} from "../components/home/Banner.jsx";
import {CategoriesSlider} from "../components/home/CategoriesSlider.jsx";
import {ItemList} from "../components/home/ItemList.jsx";

export const Home = () => {
  return (
    <div className='sm:py-4 sm:px-6 bg-gray-100'>
      <Header/>
      <div className='px-3 py-1 sm:px-0 lg:py-0'>
        <Banner/>
        <CategoriesSlider/>
        <ItemList/>
      </div>
    </div>
  )
}