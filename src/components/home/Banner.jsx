import mainbanner from '../../assets/mainbanner.jpg'
import mainbanner2 from '../../assets/mainbanner2.jpg'

export const Banner = () => {
  return (
    <div className="mt-4 w-full rounded-2xl h-500" style={{backgroundImage: `url(${mainbanner2})`}}>
      <div className='w-1/2 px-16 py-12'>
        <div className='space-y-6 text-white lg:w-500 w-96'>
          <h1 className='text-5xl font-medium'>We bring the store to your door</h1>
          <p className='font-light'>Get your order from the most optimal store to save the most for your wallet!</p>
          <button className='text-primary rounded-xl p-3 bg-cta font-bold w-2/6'>Shop now</button>
        </div>
      </div>
    </div>
  )
}