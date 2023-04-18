import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { StudentItem } from "./StudentItem";
import { useContext } from "react";
import { ReviewerContext } from "./context/Reviewercontext";

export const SideBar = () => {
  const { drawerWidth, students } = useContext(ReviewerContext);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ReviewApp
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {students.map((student) => (
            <StudentItem key={student} student={student} />
          ))}
        </List>
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "absolute",
            right: 20,
            bottom: 10,
          }}
        >
          <AddOutlined sx={{ fontSize: 20 }} />
        </IconButton>
      </Drawer>
    </Box>
  );
};
