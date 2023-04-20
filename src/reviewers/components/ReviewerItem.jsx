import { PersonOutline } from "@mui/icons-material";
import {
  Box,
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
        // borderRight: "1px solid black",
        minHeight: "300px",
      }}
    >
      <Box
        sx={{ background: "#5C5B85", borderRadius: 3, margin: 1, padding: 1 }}
      >
        <Typography color="white" variant="h6" textAlign="center">
          {reviewer}
        </Typography>
      </Box>
      {/* <Divider /> */}
      <List sx={{ background: "white", borderRadius: 3, margin: 1 }}>
        {["Enrique Mauricio", "Carlos Calderon"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <Grid container>
                <ListItemText sx={{ marginLeft: 14 }} primary={text} />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
