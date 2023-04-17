import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "..";
import { createContext, useState } from "react";

export const ReviewerContext = createContext();

export const ReviewerProvider = ({ children }) => {
  const drawerWidth = 280;
  const [students, setStudents] = useState([
    "Enrique Mauricio",
    "Carlos Calderon",
    "Oswaldo Chan",
    "Kevin Medina",
    "Cristian Pan",
    "Carlos May",
    "Fernando joachin",
  ]);

  const onAddStudent = () => {
    setStudents([...students, "hola"]);
  };

  return (
    <ReviewerContext.Provider
      value={{
        students,
        setStudents,
        drawerWidth,
        onAddStudent,
      }}
    >
      {children}
    </ReviewerContext.Provider>
  );
};
