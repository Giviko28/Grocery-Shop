import {Header} from "./components/Header.jsx";
import {Banner} from "./components/Banner.jsx";

export const Home = () => {
  return (
    <div className='py-4 px-6'>
      <Header/>
      <Banner/>
    </div>
  )
}