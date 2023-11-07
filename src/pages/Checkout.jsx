import {Header} from "../components/layout/Header.jsx";
import {Info} from "../components/Info.jsx";
import {Payment} from "../components/Payment.jsx";
export const Checkout = () => {
  return (
    <div className='py-4 px-6 bg-gray-100'>
      <Header/>
      <div className='flex space-x-12 px-20 py-12'>
        <Info/>
        <Payment/>
      </div>
    </div>
  )
}