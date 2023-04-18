import { Box, IconButton, Toolbar } from "@mui/material";
import { ReviewerContext, ReviewerProvider } from "./context/Reviewercontext";
import { ReviewersTable } from "../views/ReviewersTable";
import { AddOutlined } from "@mui/icons-material";
import { AddReviewerInput } from "../views/AddReviewerInput";
import { AddStudentInput } from "../views/AddStudentInput";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
export const ReviewPage = () => {
  return (
    <ReviewerProvider>
      <Box component="main" sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1, p: 3, marginLeft: 35 }}>
          <Toolbar />
          <NavBar />
          <SideBar />
          <ReviewersTable />
          <AddReviewerInput />
          <AddStudentInput />
          <IconButton
            size="large"
            sx={{
              color: "white",
              backgroundColor: "error.main",
              ":hover": { backgroundColor: "error.main", opacity: 0.9 },
              position: "fixed",
              right: 50,
              bottom: 50,
            }}
          >
            <AddOutlined sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>
    </ReviewerProvider>
  );
};
