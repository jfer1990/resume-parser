import { Box, IconButton, Toolbar } from "@mui/material";
import { ReviewerContext, ReviewerProvider } from "./context/Reviewercontext";
import { ReviewersTable } from "../views/ReviewersTable";
import { AddOutlined } from "@mui/icons-material";
import { AddReviewerInput } from "../views/AddReviewerInput";
import { AddStudentInput } from "../views/AddStudentInput";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { ReviewRoutes } from "./routes/ReviewRoutes";
import { AppRouter } from "../../router/AppRouter";

export const ReviewApp = () => {
  return <AppRouter />;
};
