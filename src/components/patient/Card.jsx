import React, { useState } from "react";
import "./scroll.css";

const data = {
  birth: [
    {
      src: "birth1",
      title: "Baby's Development",
      description: "Learn about your baby's growth and milestones this month.",
    },
    {
      src: "birth2",
      title: "Preparation Tips",
      description: "Essentials to prepare for a smooth delivery process.",
    },
  ],
  hormonal: [
    {
      src: "hormonal1",
      title: "Mood Swings",
      description: "How to cope with mood changes during pregnancy.",
    },
    {
      src: "hormonal2",
      title: "Energy Levels",
      description: "Understanding fluctuations in your energy levels.",
    },
  ],
  physical: [
    {
      src: "physical1",
      title: "Weight Changes",
      description: "Tips to manage healthy weight gain during pregnancy.",
    },
    {
      src: "physical2",
      title: "Posture and Back Pain",
      description: "Exercises to alleviate back pain and maintain good posture.",
    },
  ],
  irregular: [
    {
      src: "irregular1",
      title: "Unusual Symptoms",
      description: "When to consult a doctor for irregular symptoms.",
    },
    {
      src: "irregular2",
      title: "Monitoring Your Health",
      description: "Tracking your vital signs for any irregularities.",
    },
  ],
};

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 flex-shrink-0 transform transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-xl">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const DynamicSuggestionToggle = () => {
  const [activeCategory, setActiveCategory] = useState("birth");

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold p-10">Your Pregnancy Insights</h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="overflow-x-auto scrollbar-hide p-10">
        <div className="flex gap-6 scroll-snap-x">
          {data[activeCategory].map((item, index) => (
            <Card
              key={index}
              imageSrc={item.src}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Form Component for Displaying and Adding Data
const FormComponent = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update the `data` object or send to backend
    alert("Data Submitted");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Add New Suggestion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select a category</option>
            {Object.keys(data).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Export Components
export { DynamicSuggestionToggle, FormComponent };
