import React, { useState, useEffect } from "react";
import NavBar from '../patient/header/NavBar';
import Footer from '../../components/../pages/Footer';
import pregnancyData from '../data/pregdata'; // Import your JSON data
import './scroll.css';
 // Import the SuggestionItem component
 const SuggestionItem = ({ title, description }) => (
    <div className="bg-gradient-to-r from-pink-200 to-purple-300 shadow-lg rounded-lg overflow-hidden w-64 h-80 flex-shrink-0 transform transition-transform duration-300 hover:translate-y-[-1rem] hover:shadow-xl p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
const Countdown = ({ appointmentDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
  );
};

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("hormonalChanges"); // Default to "hormonalChanges"
  console.log(activeCategory)
  const appointmentDate = new Date("2024-12-14T10:00:00");
  const trimester = "First Trimester"; // Example: You can set this dynamically or pass as prop

  // Find data for the selected trimester
  const selectedTrimester = pregnancyData.trimesters.find((t) => t.trimester === trimester);
console.log(selectedTrimester)
  // Handle case when selectedTrimester is not found
  if (!selectedTrimester) {
    return <div>No data available for this trimester.</div>;
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white p-8">
        {/* Dashboard Sections */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications */}
          <div className="col-span-1 bg-gradient-to-r from-pink-100 to-purple-300 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Notifications</h2>
            <ul className="space-y-4">
              <li className="bg-purple-50 p-4 rounded-lg text-gray-700 shadow-md">
                Stay hydrated and monitor fetal movements regularly.
              </li>
            </ul>
          </div>

          {/* Countdown */}
          <div className="col-span-1 bg-gradient-to-r from-pink-100 to-purple-300 flex flex-col items-center justify-center shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Countdown to Appointment</h2>
            <Countdown appointmentDate={appointmentDate} />
          </div>

          {/* Appointment Details */}
          <div className="col-span-1 bg-gradient-to-r from-pink-100 to-purple-300 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Why this is important</h2>
            <p className="text-gray-700">Monitors your baby growth.</p>
          </div>
        </div>

        {/* SuggestionToggle */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold p-7">Today's Suggestions</h1>
          <div className="flex gap-4 mb-6">
            {/* Toggle buttons */}
            {["hormonalChanges", "physicalChanges", "actions"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold ${activeCategory === category ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Suggestions List */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {selectedTrimester[activeCategory] && Array.isArray(selectedTrimester[activeCategory]) && selectedTrimester[activeCategory].map((item) => (
              <SuggestionItem key={item.id} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
