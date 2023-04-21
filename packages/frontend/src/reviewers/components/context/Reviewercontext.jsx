import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "..";
import { createContext, useState } from "react";

export const ReviewerContext = createContext();

export const ReviewerProvider = ({ children }) => {
  const drawerWidth = 280;
  const [students, setStudents] = useState([
    { name: "Enrique Mauricio", email: null },
    { name: "Carlos Calderon", email: null },
    { name: "Oswaldo Chan", email: null },
    { name: "Kevin Medina", email: null },
    { name: "Cristian Pan", email: null },
    { name: "Carlos May", email: null },
    { name: "Fernando joachin", email: null },
  ]);

  const [reviewers, setReviewers] = useState([
    { name: "Luis", email: null },
    { name: "Marcelo", email: null },
    { name: "Fernando", email: null },
  ]);

  // const onAddStudent = () => {
  //   setStudents([...students, "hola"]);
  // };

  return (
    <ReviewerContext.Provider
      value={{
        students,
        setStudents,
        drawerWidth,
        reviewers,
        setReviewers,

        // onAddStudent,
      }}
    >
      {children}
    </ReviewerContext.Provider>
  );
};
