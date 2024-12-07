import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Patient List", icon: <PeopleIcon />, path: "/patients" },
    { text: "Requests", icon: <AssignmentIcon />, path: "/requests" },
    { text: "Today's Appointments", icon: <CalendarTodayIcon />, path: "/appointments" },
    { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
    { text: "createappointement", icon: <AccountCircleIcon />, path: "/createappointement" },
  ];

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          padding: 2,
          backgroundColor: "#1976d2",
          color: "white",
        }}
      >
        Doctor's Portal
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                ":hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
