import React from "react";
import trimesterData from "../components/data/insight";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const Insights = () => {
  return (
    <>
      <Navbar/> 
    <section className="bg-gray-50 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pregnancy Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trimesterData.trimesters.map((trimester, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={trimester.image}
                alt={trimester.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 m-5">
                <h3 className="text-2xl font-semibold mb-2">{trimester.name}</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Mother:</strong> {trimester.mother_description}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Baby:</strong> {trimester.baby_description}
                </p>
                <h4 className="text-lg font-semibold mb-2">What to Expect:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {trimester.what_to_expect.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold mb-2">Tips:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {trimester.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <Footer/>
    </>
  );
};

export default Insights;
