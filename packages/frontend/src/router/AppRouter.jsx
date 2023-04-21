import { Link, Route, Routes } from "react-router-dom";
import { ReviewersTable } from "../reviewers/views/ReviewersTable";
import { AddReviewerInput } from "../reviewers/views/AddReviewerInput";

import { AddStudentInput } from "../reviewers/views/AddStudentInput";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewersTable />} />
      <Route path="/add-reviewer" element={<AddReviewerInput />} />
      <Route path="/add-student" element={<AddStudentInput />} />
    </Routes>
  );
};
