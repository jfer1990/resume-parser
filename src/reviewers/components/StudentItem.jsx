import React from "react";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

export const StudentItem = ({ student }) => {
  return (
    <>
      <ListItem key={student} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ArrowRight />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={student} />
            <ListItemText
              secondary={"Exercitation cillum irure elit consectetur."}
            />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
