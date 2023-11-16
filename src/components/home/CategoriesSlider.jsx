import data from "../../data/db.json";

export const CategoriesSlider = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 py-6 gap-4">
      {data.categories &&
        data.categories.map((category, id) => (
          <div
            className="bg-white py-2 px-4 h-32 rounded-xl shadow shadow-slate-200 flex justify-between"
            key={id}
          >
            <div>
              <p className="text-2xl text-primary font-medium">
                {category.name}
              </p>
              <p className="text-gray-500">{category.quote}</p>
            </div>
            <img className="h-24" src={category.source} alt="" />
          </div>
        ))}
    </div>
  );
};
