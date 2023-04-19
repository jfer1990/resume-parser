import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBar } from "../NavBar";
import { SideBar } from "../SideBar";

export const ReviewerLayaout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
