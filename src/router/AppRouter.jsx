import { Link, Navigate, Route, Routes } from "react-router-dom";

import { ReviewerProvider } from "../reviewers/components/context/Reviewercontext";
import { ReviewerLayaout } from "../reviewers/components/layout/ReviewerLayaout";
import { ReviewersTable } from "../reviewers/views/ReviewersTable";
import { AddReviewerInput } from "../reviewers/views/AddReviewerInput";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { AddStudentInput } from "../reviewers/views/AddStudentInput";

export const AppRouter = () => {
  return (
    <ReviewerProvider>
      <ReviewerLayaout>
        <Routes>
          <Route path="/" element={<ReviewersTable />} />
          <Route path="/addReviewer" element={<AddReviewerInput />} />
          <Route path="/addStudent" element={<AddStudentInput />} />
        </Routes>
        <IconButton
          component={Link}
          to="/addReviewer"
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
