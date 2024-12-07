import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, Tooltip } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

// Dummy data
const patients = [
  {
    id: 1,
    name: "Sarah Connor",
    height: 170,
    weight: 65,
    bloodType: "O+",
    allergies: "None",
    currentMedications: "Vitamin D",
    immunizations: "Up-to-date",
    dueDate: "2025-05-15",
    pregnancyDate: "2024-08-15",
  },
  {
    id: 2,
    name: "John Doe",
    height: 180,
    weight: 75,
    bloodType: "A-",
    allergies: "Peanuts",
    currentMedications: "Aspirin",
    immunizations: "Up-to-date",
    dueDate: "2025-06-10",
    pregnancyDate: "2024-09-01",
  },
  {
    id: 3,
    name: "Jane Smith",
    height: 165,
    weight: 55,
    bloodType: "B+",
    allergies: "Dust",
    currentMedications: "None",
    immunizations: "Not updated",
    dueDate: "2025-04-20",
    pregnancyDate: "2024-07-15",
  },
];

const DoctorPatientTable = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: blue[40], minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          color: blue[800],
          textAlign: "center",
        }}
      >
        Patient List
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 4,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: blue[100] }}>
            <TableRow>
              <TableCell align="left">Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Height (cm)</TableCell>
              <TableCell>Weight (kg)</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Allergies</TableCell>
              <TableCell>Medications</TableCell>
              <TableCell>Immunizations</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Pregnancy Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell align="left">
                  <Avatar sx={{ backgroundColor: blue[300] }}>
                    {patient.name.charAt(0)}
                  </Avatar>
                </TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.height}</TableCell>
                <TableCell>{patient.weight}</TableCell>
                <TableCell>{patient.bloodType}</TableCell>
                <TableCell>{patient.allergies}</TableCell>
                <TableCell>{patient.currentMedications}</TableCell>
                <TableCell>{patient.immunizations}</TableCell>
                <TableCell>{new Date(patient.dueDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  {new Date(patient.pregnancyDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DoctorPatientTable;

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
// } from "@mui/material";
// import Sidebar from '../src/components/Sidebar'
// const DoctorPatientList = () => {
//   // Dummy data for demonstration
//   const patients = [
//     {
//       id: 1,
//       name: "John Doe",
//       height: 175,
//       weight: 70,
//       bloodType: "A+",
//       allergies: "Pollen",
//       currentMedications: "Ibuprofen",
//       dueDate: "2025-05-20T00:00:00Z",
//       pregnancyDate: null,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       height: 160,
//       weight: 60,
//       bloodType: "O-",
//       allergies: "None",
//       currentMedications: "None",
//       dueDate: null,
//       pregnancyDate: "2025-04-15T00:00:00Z",
//     },
//     {
//       id: 3,
//       name: "Alice Brown",
//       height: 165,
//       weight: 65,
//       bloodType: "B+",
//       allergies: "Peanuts",
//       currentMedications: "Paracetamol",
//       dueDate: "2025-06-10T00:00:00Z",
//       pregnancyDate: null,
//     },
//   ];

//   return (
   
//     <div style={{ padding: "20px" }}>
//     <Typography
//       variant="h4"
//       align="center"
//       gutterBottom
//       sx={{ marginBottom: 3, color: "#333", fontWeight: "bold" }}
//     >
//       Patients List
//     </Typography>
//     <TableContainer
//       component={Paper}
//       elevation={4}
//       sx={{
//         maxWidth: "90%",
//         margin: "0 auto",
//         borderRadius: "10px",
//         overflow: "hidden",
//         boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//       }}
//     >
//       <Table>
//         <TableHead>
//           <TableRow
//             sx={{
//               backgroundColor: "#1976d2",
//             }}
//           >
//             <TableCell
//               align="center"
//               sx={{ color: "#fff", fontWeight: "bold" }}
//             >
//               #
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Patient Name
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Height (cm)
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Weight (kg)
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Blood Type
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Allergies
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Current Medications
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Due Date
//             </TableCell>
//             <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
//               Pregnancy Date
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {patients.map((patient, index) => (
//             <TableRow
//               key={patient.id}
//               sx={{
//                 "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
//                 "&:hover": { backgroundColor: "#e0f7fa" },
//               }}
//             >
//               <TableCell align="center">{index + 1}</TableCell>
//               <TableCell>{patient.name}</TableCell>
//               <TableCell>{patient.height || "N/A"}</TableCell>
//               <TableCell>{patient.weight || "N/A"}</TableCell>
//               <TableCell>{patient.bloodType || "N/A"}</TableCell>
//               <TableCell>{patient.allergies || "N/A"}</TableCell>
//               <TableCell>{patient.currentMedications || "N/A"}</TableCell>
//               <TableCell>
//                 {patient.dueDate
//                   ? new Date(patient.dueDate).toLocaleDateString()
//                   : "N/A"}
//               </TableCell>
//               <TableCell>
//                 {patient.pregnancyDate
//                   ? new Date(patient.pregnancyDate).toLocaleDateString()
//                   : "N/A"}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </div>
     
//   );
// };

// export default DoctorPatientList;
