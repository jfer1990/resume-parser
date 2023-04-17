import { ArrowRight, TurnedInNot } from "@mui/icons-material";
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

export const ReviewersTable = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: 3,
          margin: "40px",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            borderRight: "1px solid black",
            minHeight: "300px",
          }}
        >
          {" "}
          <Typography color="black" variant="h5" textAlign="center">
            Luis
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
        <Grid item xs={4} sx={{ minHeight: "300px" }}>
          {" "}
          <Typography color="black" variant="h5" textAlign="center">
            Marcelo
          </Typography>{" "}
          <Divider />
          <List>
            {["Oswaldo Chan", "Kevin Medina"].map((text) => (
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
        <Grid
          item
          xs={4}
          sx={{
            borderLeft: "1px solid black",
            minHeight: "300px",
          }}
        >
          {" "}
          <Typography color="black" variant="h5" textAlign="center">
            Fernando
          </Typography>{" "}
          <Divider />
          <List>
            {["Cristian Pan", "Carlos May", "Alfonso Tort"].map((text) => (
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
      </Grid>
    </Grid>
  );
};
