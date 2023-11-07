import {Header} from "../components/layout/Header.jsx";
import {Info} from "../components/Info.jsx";
export const Checkout = () => {
  return (
    <div className='py-4 px-6 bg-gray-100'>
      <Header/>
      <div className='flex'>
        <Info/>

      </div>
    </div>
  )
}