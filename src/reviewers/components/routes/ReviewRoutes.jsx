import React from "react";
import { ReviewApp } from "..";
import { ReviewPage } from "../ReviewPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const ReviewRoutes = () => {
  <Routes>
    <Route path="/" element={<ReviewPage />} />

    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>;
};
