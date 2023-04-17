import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { ReviewerContext } from "./context/Reviewercontext";
import { useContext } from "react";

export const NavBar = () => {
  const { drawerWidth } = useContext(ReviewerContext);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" noWrap component="div">
            Day of the week: {"15"}
          </Typography>

          <IconButton color="error"></IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
