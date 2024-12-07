import React, { useState } from "react";

const RequestPage = () => {
  // Dummy data for requests
  const dummyRequests = [
    { id: 1, message: "Request from John Doe" },
    { id: 2, message: "Request from Jane Smith" },
    { id: 3, message: "Request from Alice Johnson" },
  ];

  const [requests, setRequests] = useState(dummyRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    action: "accept",
    height: "",
    weight: "",
    bloodType: "",
    medicalHistory: { condition: "" },
    allergies: "",
    currentMedications: "",
    immunizations: "",
    dueDate: "",
    pregnancyDate: "",
  });

  // Handle Accept or Remove actions
  const handleRequestAction = (request, action) => {
    setSelectedRequest(request);
    if (action === "accept") {
      setIsFormVisible(true);
    } else if (action === "remove") {
      setRequests(requests.filter((req) => req.id !== request.id));
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const [field, subField] = name.split(".");
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [subField]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted for request ID: ${selectedRequest.id}`);
    setRequests(requests.filter((req) => req.id !== selectedRequest.id));
    setIsFormVisible(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-300">
      <h1 className="text-3xl font-semibold text-center mb-8">Request Page</h1>

      {/* Request List */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Pending Requests ({requests.length})</h2>
        <ul className="space-y-4 mt-4">
          {requests.map((request) => (
            <li
              key={request.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-md"
            >
              <span>{request.message}</span>
              <div>
                <button
                  onClick={() => handleRequestAction(request, "accept")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleRequestAction(request, "remove")}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Accept Request</h2>
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="mb-4">
                <label className="block mb-2">Height</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Weight</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Blood Type</label>
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              {/* Submit */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsFormVisible(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom"; // For navigation
// import { useAuth } from "./authContext"; // Assuming you have an authentication context to get the doctorId

// function RequestPage() {
//   const [requests, setRequests] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [formData, setFormData] = useState({
//     action: "accept",
//     height: "",
//     weight: "",
//     bloodType: "",
//     medicalHistory: { condition: "" },
//     allergies: "",
//     currentMedications: "",
//     immunizations: "",
//     dueDate: "",
//     pregnancyDate: "",
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const { doctorId } = useAuth(); // Assuming you have a custom hook to get doctorId

//   useEffect(() => {
//     // Fetch requests based on doctorId
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get(`/api/notifications/${doctorId}`);
//         setRequests(response.data);
//       } catch (error) {
//         console.error("Error fetching requests:", error);
//       }
//     };

//     fetchRequests();
//   }, [doctorId]);

//   // Handle Accept or Remove request
//   const handleRequestAction = (request, action) => {
//     setSelectedRequest(request);
//     if (action === "accept") {
//       setFormData({
//         ...formData,
//         action: "accept",
//         height: "",
//         weight: "",
//         bloodType: "",
//         medicalHistory: { condition: "" },
//         allergies: "",
//         currentMedications: "",
//         immunizations: "",
//         dueDate: "",
//         pregnancyDate: "",
//       });
//       setIsFormVisible(true);
//     } else if (action === "remove") {
//       handleRemove(request.id);
//     }
//   };

//   // Handle removing a request
//   const handleRemove = async (requestId) => {
//     try {
//       await axios.delete(`/api/notifications/${requestId}`);
//       setRequests(requests.filter((request) => request.id !== requestId));
//     } catch (error) {
//       console.error("Error removing request:", error);
//     }
//   };

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name in formData) {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle nested fields (e.g., medicalHistory condition)
//   const handleNestedChange = (e) => {
//     const { name, value } = e.target;
//     const [field, subField] = name.split(".");
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: {
//         ...prevData[field],
//         [subField]: value,
//       },
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send data to the server (you can change the URL based on your backend endpoint)
//     try {
//       const response = await axios.post("/api/submit-request", formData);
//       console.log("Form submitted:", response.data);

//       // Update request status
//       await axios.put(`/api/notifications/${selectedRequest.id}`, {
//         status: "Accepted",
//       });

//       // Hide the form and update requests list
//       setIsFormVisible(false);
//       setRequests(requests.filter((request) => request.id !== selectedRequest.id));
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold text-center mb-8">Request Page</h1>

//       {/* Request List */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold">Pending Requests ({requests.length})</h2>
//         <ul className="space-y-4 mt-4">
//           {requests.map((request) => (
//             <li key={request.id} className="flex justify-between items-center p-4 border rounded-lg shadow-md">
//               <span>{request.message}</span>
//               <div>
//                 <button
//                   onClick={() => handleRequestAction(request, "accept")}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600"
//                 >
//                   Accept
//                 </button>
//                 <button
//                   onClick={() => handleRequestAction(request, "remove")}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Modal for form */}
//       {isFormVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-2xl font-semibold mb-4">Accept Request</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block mb-2">Action</label>
//                 <input
//                   type="text"
//                   name="action"
//                   value={formData.action}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   readOnly
//                 />
//               </div>

//               {/* Height */}
//               <div className="mb-4">
//                 <label className="block mb-2">Height</label>
//                 <input
//                   type="number"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Weight */}
//               <div className="mb-4">
//                 <label className="block mb-2">Weight</label>
//                 <input
//                   type="number"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Blood Type */}
//               <div className="mb-4">
//                 <label className="block mb-2">Blood Type</label>
//                 <input
//                   type="text"
//                   name="bloodType"
//                   value={formData.bloodType}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Medical History */}
//               <div className="mb-4">
//                 <label className="block mb-2">Medical History</label>
//                 <input
//                   type="text"
//                   name="medicalHistory.condition"
//                   value={formData.medicalHistory.condition}
//                   onChange={handleNestedChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Allergies */}
//               <div className="mb-4">
//                 <label className="block mb-2">Allergies</label>
//                 <input
//                   type="text"
//                   name="allergies"
//                   value={formData.allergies}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Current Medications */}
//               <div className="mb-4">
//                 <label className="block mb-2">Current Medications</label>
//                 <input
//                   type="text"
//                   name="currentMedications"
//                   value={formData.currentMedications}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Immunizations */}
//               <div className="mb-4">
//                 <label className="block mb-2">Immunizations</label>
//                 <input
//                   type="text"
//                   name="immunizations"
//                   value={formData.immunizations}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Due Date */}
//               <div className="mb-4">
//                 <label className="block mb-2">Due Date</label>
//                 <input
//                   type="datetime-local"
//                   name="dueDate"
//                   value={formData.dueDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               {/* Pregnancy Date */}
//               <div className="mb-4">
//                 <label className="block mb-2">Pregnancy Date</label>
//                 <input
//                   type="datetime-local"
//                   name="pregnancyDate"
//                   value={formData.pregnancyDate}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mt-6 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setIsFormVisible(false)}
//                   className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RequestPage;
