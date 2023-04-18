import { ArrowRight } from "@mui/icons-material";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const ReviewerItem = ({ reviewer }) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        borderRight: "1px solid black",
        minHeight: "300px",
      }}
    >
      <Typography color="black" variant="h5" textAlign="center">
        {reviewer}
      </Typography>
      <Divider />
      <List>
        {["Enrique Mauricio", "Carlos Calderon"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={text} />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
