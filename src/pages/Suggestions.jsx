import { MdOutlineAddReaction } from "react-icons/md"
import { GrYoga } from "react-icons/gr";
import { GiFoodChain } from "react-icons/gi";

function Suggestions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">
         We support Pregant Women 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-pink-500 text-4xl mb-4">
              <MdOutlineAddReaction />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Action taken during Pregnancy
            </h3>
            <p className="text-gray-600">
            Get expert guidance on essential actions to take throughout your pregnancy, including regular check-ups, lifestyle adjustments, and self-care tips for a healthy journey.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-purple-500 text-4xl mb-4">
              <GrYoga />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
             Excercise Recommendation
            </h3>
            <p className="text-gray-600">
            tay active with safe and effective exercise routines tailored to your pregnancy stage for improved wellness and strength
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-indigo-500 text-4xl mb-4">
              <GiFoodChain/>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
             Food Recommendation 
            </h3>
            <p className="text-gray-600">
            eceive personalized nutrition advice to support your health and your baby's development throughout your pregnancy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Suggestions;








// import React from 'react'
// import  './suggestion.css'
// const Guidlines = () => {
//     return (
//         <div className="max-w-5xl mx-auto px-4 py-8">
//           <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Pregnancy Guidelines</h1>
    
//           <Section title="General Actions" items={data.generalActions} highlight="bg-red-50 border-red-500" />
//           <Section title="Things to Avoid" items={data.generalAvoidance} highlight="bg-red-50 border-red-500" />
//           <Section title="Emergency Signs" items={data.emergencySigns} highlight="bg-yellow-50 border-yellow-500" />
//         </div>
//       );
//     }
    
//     function Section({ title, items, highlight }) {
//       return (
//         <section className="mb-10">
//           <h2 className="text-2xl font-semibold mb-6 text-blue-600">{title}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className={`p-6 bg-white rounded-lg shadow-md border-l-4 ${highlight || "border-blue-500"} hover:move-up`}
//               >
//                 <h3 className="text-lg font-bold text-gray-700 mb-2">
//                   {item.action || item.sign}
//                 </h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       );
//     }

// export default Guidlines