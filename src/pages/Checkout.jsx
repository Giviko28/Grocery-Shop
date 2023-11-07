import {Header} from "../components/layout/Header.jsx";
import {Info} from "../components/checkout/Info.jsx";
import {Payment} from "../components/checkout/Payment.jsx";
export const Checkout = () => {
  return (
    <div className='sm:py-4 sm:px-6 bg-gray-100'>
      <Header/>
      <div className='flex flex-col items-center py-6 lg:flex-row lg:items-baseline  lg:space-x-12 lg:px-20 lg:py-12'>
        <Info/>
        <Payment/>
      </div>
    </div>
  )
}