import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Default styles
import "swiper/css/navigation"; // Navigation styles (optional)
import "swiper/css/pagination"; // Pagination styles (optional)

import doctor1 from "../assets/images/image2.jpg";
import doctor2 from "../assets/images/image5.jpg";
import doctor3 from "../assets/images/image4.jpg";

function Doctors() {
  const doctors = [
    { name: "Dr. John Doe", specialization: "Obstetrician", image: doctor1 },
    { name: "Dr. Jane Smith", specialization: "Pediatrician", image: doctor2 },
    { name: "Dr. Alice Brown", specialization: "Gynecologist", image: doctor3 },
    // Add more doctor objects as needed
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-12">
         Communicate and schedule appointement with your Doctor 
        </h2>

        {/* Swiper (Slideable Doctors) */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-cover w-48 h-48 mx-auto rounded-full mb-4"
                />
                {/* <h3 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h3> */}
                {/* <p className="text-gray-600">{doctor.specialization}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Doctors;
