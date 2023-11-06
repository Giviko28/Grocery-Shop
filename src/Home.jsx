import {Header} from "./components/Header.jsx";
import {Banner} from "./components/Banner.jsx";
import {CategoriesSlider} from "./components/CategoriesSlider.jsx";

export const Home = () => {
  return (
    <div className='py-4 px-6 bg-gray-100'>
      <Header/>
      <Banner/>
      <CategoriesSlider/>
    </div>
  )
}