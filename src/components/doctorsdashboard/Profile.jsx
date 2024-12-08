import React from "react";
import { FaHospital, FaCalendarAlt, FaBell } from "react-icons/fa";

const doctor = {
  User: {
    name: "Dr. Sarah Thompson",
    profilePicture: "https://via.placeholder.com/150",
  },
  specialty: "Cardiology",
  hospitalName: "City General Hospital",
  availability: "Monday to Friday, 9 AM - 5 PM",
  Appointments: [
    { patientName: "John Doe", date: "Dec 10, 2024, 2:30 PM" },
    { patientName: "Jane Smith", date: "Dec 12, 2024, 10:00 AM" },
  ],
  notifications: [
    { message: "Patient John Doe has updated his medical history.", date: "Dec 7, 2024" },
    { message: "Your meeting with the board has been rescheduled.", date: "Dec 6, 2024" },
  ],
};

const DoctorProfile = () => {
  return (
    <div className="bg-blue-300 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center space-x-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-6">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={doctor.User.profilePicture}
              alt="Doctor Profile"
            />
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                {doctor.User.name}
              </h1>
              <p className="text-lg text-gray-500">{doctor.specialty}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaHospital className="text-3xl text-gray-600" />
            <div>
              <p className="font-medium text-gray-700">{doctor.hospitalName}</p>
              <p className="text-sm text-gray-500">Hospital</p>
            </div>
          </div>
        </div>

        {/* Main Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Availability & Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Availability</h2>
            <p className="text-lg text-gray-700">{doctor.availability}</p>
            <h3 className="text-lg font-medium text-gray-900 mt-6">Contact</h3>
            <p className="text-gray-500">For appointment inquiries, please call the hospital.</p>
          </div>

          {/* Appointments */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
            <div className="space-y-4">
              {doctor.Appointments.length > 0 ? (
                doctor.Appointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <div>
                      <p className="text-lg text-gray-900">{appointment.patientName}</p>
                      <p className="text-sm text-gray-500">{appointment.date}</p>
                    </div>
                    <FaCalendarAlt className="text-2xl text-gray-600" />
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No upcoming appointments.</p>
              )}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            <div className="space-y-4">
              {doctor.notifications.length > 0 ? (
                doctor.notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <div>
                      <p className="text-lg text-gray-900">{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.date}</p>
                    </div>
                    <FaBell className="text-2xl text-gray-600" />
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No new notifications.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
