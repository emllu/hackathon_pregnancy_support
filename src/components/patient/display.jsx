import { useState, useEffect } from "react";
import SuggestionMeals from "./Meal";
import SuggestionExercise from "./Exercise";
import Footer from "../../pages/Footer";
import NavBar from "./header/NavBar";
const Hero = () => {
  const [weeks, setWeeks] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const dummyWeeks = 12;
    setWeeks(dummyWeeks);

    setDate(new Date());
  }, []);

  return (
    <>
    <NavBar/>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="">
          <h1 className="max-w-2xl text-xl font-semibold tracking-tight p-10  sm:text-5xl ">
            Empowering Expectant Mothers and Providers for a Healthier Pregnancy
            Journey
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center mb-8">
           
          </div>

          
        </div>
       
        
      </div>
      <div className='px-10'>
      <SuggestionMeals/>
      <SuggestionExercise/>
      </div>
      
      <Footer/>
    </>
  );
};
export default Hero;
