import React, { useState, useEffect } from "react";
import NavBar from '../patient/header/NavBar';
import Footer from '../../components/../pages/Footer';
import './scroll.css';

const data = {
  meals: [
    {
      src: "meal1",
      title: "Delicious Pasta",
      description: "A hearty serving of pasta with marinara sauce and fresh basil.",
    },
    {
      src: "meal2",
      title: "Grilled Chicken Salad",
      description: "A refreshing salad with grilled chicken and seasonal veggies.",
    },
    {
      src: "meal3",
      title: "Sushi Platter",
      description: "A delightful selection of fresh sushi rolls.",
    },
    {
      src: "meal4",
      title: "Chocolate Cake",
      description: "A rich, moist chocolate cake topped with creamy frosting.",
    },
    {
      src: "meal5",
      title: "Fruit Parfait",
      description: "A layered parfait of fresh fruits and yogurt.",
    },
  ],
  exercise: [
    {
      src: "exercise1",
      title: "Yoga Session",
      description: "A relaxing 30-minute yoga session to stretch and strengthen.",
    },
    {
      src: "exercise2",
      title: "Prenatal Pilates",
      description: "Gentle pilates to build core strength safely during pregnancy.",
    },
  ],
  snacks: [
    {
      src: "snack1",
      title: "Mixed Nuts",
      description: "A handful of mixed nuts for a healthy energy boost.",
    },
    {
      src: "snack2",
      title: "Veggie Sticks with Hummus",
      description: "Crunchy veggies paired with creamy hummus.",
    },
  ],
};

const SuggestionItem = ({ title, description }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden w-64 h-80 flex-shrink-0 transform transition-transform duration-300 hover:translate-y-[-1rem] hover:shadow-xl p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("meals");
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const appointmentDate = new Date("2024-12-14T10:00:00");

  // Countdown logic
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = appointmentDate - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [appointmentDate]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 p-8">
        {/* Dashboard Sections */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications */}
          <div className="col-span-1 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Notifications</h2>
            <ul className="space-y-4">
              <li className="bg-purple-50 p-4 rounded-lg text-gray-700 shadow-md">
                Stay hydrated and monitor fetal movements regularly.
              </li>
            </ul>
          </div>

          {/* Countdown */}
          <div className="col-span-1 flex flex-col items-center justify-center shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Countdown to Appointment</h2>
            <div className="relative flex items-center justify-center w-48 h-48 rounded-full border-4 border-pink-500">
              {/* Circular Background */}
              <div className="absolute w-full h-full rounded-full border-4 border-gray-300"></div>
              {/* Pointer */}
              <div
                className="absolute w-1/2 h-1/2 bg-pink-500"
                style={{
                  transformOrigin: "100% 100%",
                  transform: `rotate(${(360 / 30) * countdown.days}deg)`,
                }}
              ></div>
              {/* Days Left Text */}
              <div className="absolute text-center text-xl font-semibold text-pink-600">
                <span>{countdown.days} Days</span>
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="col-span-1 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Why this is important</h2>
            <p className="text-gray-700">Monitors your baby growth.</p>
          </div>
        </div>

        {/* SuggestionToggle */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold p-7">Today's Suggestions</h1>
          <div className="flex gap-4 mb-6">
            {Object.keys(data).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Suggestions List */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {data[activeCategory].map((item, index) => (
              <SuggestionItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
