import { useState, useEffect } from "react";
import SuggestionMeals from "./Meal";
import SuggestionExercise from "./Exercise";
import Footer from "../../pages/Footer";
import NavBar from "./header/NavBar";
import pregnancyWeeksData from "../data/weekdata"; 
import BloodTypeInfoBox from "./BloodType";

const Hero = () => {
  const [weeks, setWeeks] = useState(0); // Current week number
  const [date, setDate] = useState(new Date());
  const [currentWeekData, setCurrentWeekData] = useState(null); // Data for the current week

  useEffect(() => {
    const dummyWeeks = 1; // Simulating the current week
    setWeeks(dummyWeeks);
    setDate(new Date());

    const weekData = pregnancyWeeksData.find((data) => data.week === dummyWeeks);
    setCurrentWeekData(weekData || {});
  }, []);

  return (
    <>
      <NavBar />
      <div className=" grid grid-cols-2 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-row gap-2">
            <div>
            <h1 className="max-w-2xl text-xl font-semibold tracking-tight p-10 sm:text-5xl">
            Empowering Expectant Mothers and Providers for a Healthier Pregnancy Journey
          </h1>
          <div>
           
            </div>
            </div>
          
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center mb-8"></div>
        </div>
      </div>
      <div className="px-10">
        {currentWeekData && (
          <>
            <SuggestionMeals meals={currentWeekData.foods} />
            <SuggestionExercise exercises={currentWeekData.exercises} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Hero;



















// import { useState, useEffect } from "react";
// import SuggestionMeals from "./Meal";
// import SuggestionExercise from "./Exercise";
// import Footer from "../../pages/Footer";
// import NavBar from "./header/NavBar";
// const Hero = () => {
//   const [weeks, setWeeks] = useState(0);
//   const [date, setDate] = useState(new Date());
//   useEffect(() => {
//     const dummyWeeks = 12;
//     setWeeks(dummyWeeks);

//     setDate(new Date());
//   }, []);

//   return (
//     <>
//     <NavBar/>
//       <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//         <div className="">
//           <h1 className="max-w-2xl text-xl font-semibold tracking-tight p-10  sm:text-5xl ">
//             Empowering Expectant Mothers and Providers for a Healthier Pregnancy
//             Journey
//           </h1>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <div className="flex justify-center items-center mb-8">
           
//           </div>

          
//         </div>
       
        
//       </div>
//       <div className='px-10'>
//       <SuggestionMeals/>
//       <SuggestionExercise/>
//       </div>
      
//       <Footer/>
//     </>
//   );
// };
// export default Hero;
