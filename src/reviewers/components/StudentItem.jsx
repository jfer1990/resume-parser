import React from "react";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PersonOutline } from "@mui/icons-material";

export const StudentItem = ({ student, studentEmail }) => {
  return (
    <>
      <ListItem key={student} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PersonOutline sx={{ color: "primary.main" }} />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={student} />
            <ListItemText secondary={studentEmail} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
