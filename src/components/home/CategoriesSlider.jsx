import data from '../../data/db.json'
import vegetable from '../../assets/categories/vegetables.png'
import fruit from '../../assets/categories/fruits.png'
import snack from '../../assets/categories/snack.png'
import milk from '../../assets/categories/milk.png'
import meat from '../../assets/categories/frozen.png'
import icecream from '../../assets/categories/icecream.png'

export const CategoriesSlider = () => {
  const images = [vegetable, snack, fruit, milk, meat, icecream];
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 py-6 gap-4">
      {data.categories && data.categories.map((category, id) => (
        <div className='bg-white py-2 px-4 h-32 rounded-xl shadow shadow-slate-200 flex justify-between' key={id}>
          <div>
            <p className="text-2xl text-primary font-medium">{category.name}</p>
            <p className="text-gray-500">{category.quote}</p>
          </div>
          <img className='h-24' src={images[id]} alt=""/>
        </div>
      ))}
    </div>
  )
}