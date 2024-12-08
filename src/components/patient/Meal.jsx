import './scroll.css';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 flex-shrink-0 transform transition-transform duration-300 hover:translate-y-[-1rem] hover:shadow-xl">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const SuggestionMeals = ({ meals }) => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold p-5">
        Today's Suggested Meals
      </h1>
      <div className="overflow-x-auto scrollbar-hide p-10">
        <div className="flex gap-6">
          {meals.map((meal, index) => (
            <Card
              key={index}
              imageSrc={meal.src}
              title={meal.title}
              description={meal.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionMeals;
