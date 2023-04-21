import { Button, IconButton } from "@mui/material";
import { ReviewersTable } from "../views/ReviewersTable";
import { AddOutlined } from "@mui/icons-material";
import { AddReviewerInput } from "../views/AddReviewerInput";
import { AddStudentInput } from "../views/AddStudentInput";
import { ReviewerLayaout } from "./layout/ReviewerLayaout";
import { ReviewerProvider } from "./context/Reviewercontext";
import { Link, Router } from "react-router-dom";
export const ReviewPage = () => {
  return (
    <ReviewerProvider>
      <ReviewerLayaout>
        <ReviewersTable />
        <AddReviewerInput />
        <AddStudentInput />

        <IconButton
          component={Link}
          to="/add-reviewer"
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
      </ReviewerLayaout>
    </ReviewerProvider>
  );
};
