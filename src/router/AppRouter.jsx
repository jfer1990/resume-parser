import { Navigate, Route, Routes } from "react-router-dom";

import { ReviewRoutes } from "../reviewers/components/routes/ReviewRoutes";
import { ReviewPage } from "../reviewers/components/ReviewPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
