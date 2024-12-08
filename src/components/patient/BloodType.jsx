import React, { useEffect, useState } from 'react';
import bloodTypeData from '../data/blood';
import NavBar from "./header/NavBar";
import Footer from '../../pages/Footer';

const BloodTypeInfoBox = () => {
  const [bloodType, setBloodType] = useState('');
  const [bloodInfo, setBloodInfo] = useState(null);

  // Simulate fetching blood type from the backend
  useEffect(() => {
    const fetchBloodType = async () => {
      const fetchedBloodType = 'O-'; // Example response
      setBloodType(fetchedBloodType);
      setBloodInfo(bloodTypeData[fetchedBloodType]);
    };
    fetchBloodType();
  }, []);

  if (!bloodInfo) return <p>Loading...</p>;

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg rounded-lg overflow-hidden mt-20 mb-20">
        <div className="p-6 flex items-center gap-10">
          {/* Large Letter (Logo-like) on the Left */}
          <div className="flex-shrink-0 w-32 h-32 bg-white text-purple-500 flex items-center justify-center text-6xl font-extrabold rounded-full">
            {bloodType[0]} {/* Use the first letter of the blood type */}
          </div>

          {/* Description Container on the Right */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Blood Type: {bloodType}</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">About:</h3>
              <p>{bloodInfo.diet}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Biological Info:</h3>
              <p>{bloodInfo.biologicalInfo}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Care Tips:</h3>
              <p>{bloodInfo.careTips}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Risks:</h3>
              <p>{bloodInfo.risks}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BloodTypeInfoBox;
