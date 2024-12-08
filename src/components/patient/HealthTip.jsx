import React, { useState } from 'react';
import NavBar from '../patient/header/NavBar'
import Footer from '../../pages/Footer'
const wellnessData = {
  "tasks": [
    "Take 5 minutes to relax and breathe deeply.",
    "Stretch gently to ease tension.",
    "Drink some water and stay hydrated.",
    "Listen to your favorite relaxing music."
  ],
  "affirmations": [
    "You are beautiful, strong, and capable.",
    "Every day, you are getting closer to meeting your baby!",
    "You deserve all the joy and peace on this journey."
  ],
  "quotes": [
    "The journey of pregnancy is filled with magic and miracles.",
    "Trust your body. You are capable of amazing things.",
    "Every step you take is one step closer to your beautiful baby."
  ]
};

const PregnancyJoyHub = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(wellnessData.affirmations[0]);
  const [currentQuote, setCurrentQuote] = useState(wellnessData.quotes[0]);
  const [completedTasks, setCompletedTasks] = useState([]);
  
  // Handle task completion
  const handleTaskCompletion = (task) => {
    setCompletedTasks((prev) => prev.includes(task) ? prev : [...prev, task]);
  };

  // Change affirmation or quote
  const changeAffirmation = () => {
    setCurrentAffirmation(wellnessData.affirmations[Math.floor(Math.random() * wellnessData.affirmations.length)]);
  };
  
  const changeQuote = () => {
    setCurrentQuote(wellnessData.quotes[Math.floor(Math.random() * wellnessData.quotes.length)]);
  };

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-white py-12 px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        {/* Title Section */}
        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">Pregnancy Joy Hub</h1>

        {/* Pregnancy Journey Animation */}
        <div className="mb-6 text-center">
          <img 
            src="https://i.pinimg.com/474x/f2/68/c9/f268c90fb0b74aa11845e81b3cab40e6.jpg" 
            alt="Pregnancy Journey" 
            className="w-48 h-48 mx-auto rounded-full shadow-lg"
          />
          <p className="text-lg text-gray-600 mt-3">Your Beautiful Journey Week by Week</p>
        </div>

        {/* Relaxing Daily Tasks Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold   text from-purple-300 to-pink-300  mb-4">Relaxing Daily Tasks</h3>
          <ul className="space-y-4">
            {wellnessData.tasks.map((task, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <input 
                  type="checkbox" 
                  checked={completedTasks.includes(task)} 
                  onChange={() => handleTaskCompletion(task)} 
                  className="mr-3 w-6 h-6 rounded-full border-gray-300 text from-purple-300 to-pink-300  focus:ring-indigo-500" 
                />
                <span className={completedTasks.includes(task) ? "line-through text-gray-400" : "text-gray-700"}>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pregnancy Milestone Tracker */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold  text from-purple-300 to-pink-300  mb-4">Your Pregnancy Milestones</h3>
          <div className="p-6 bg-gradient-to-r from-pink-300 to-indigo-200 rounded-xl shadow-lg text-center">
            <p className="text-xl font-semibold text from-purple-300 to-pink-300 ">You are in Week 1!</p>
            <p className="mt-2 text  from-purple-300 to-pink-300 ">Every day is a new step in your beautiful journey.</p>
          </div>
        </div>

        {/* Positive Affirmations */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Your Daily Affirmation</h3>
          <div className="bg-gradient-to-r from-pink-300 to-indigo-200 p-6 rounded-xl shadow-lg text-center">
            <p className="text-xl font-semibold text-indigo-700">{currentAffirmation}</p>
            <button 
              onClick={changeAffirmation} 
              className="mt-4 px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300"
            >
              Get New Affirmation
            </button>
          </div>
        </div>

        {/* Daily Inspirational Quote */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Inspirational Quote of the Day</h3>
          <div className="bg-gradient-to-r from-purple-300 to-pink-300 p-6 rounded-xl shadow-lg text-center">
            <p className="text-xl font-semibold text-indigo-700">{currentQuote}</p>
            <button 
              onClick={changeQuote} 
              className="mt-4 px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300"
            >
              Get New Quote
            </button>
          </div>
        </div>

        {/* Music or Sound Options */}
        <div className="mb-6 text-center">
         
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PregnancyJoyHub;
