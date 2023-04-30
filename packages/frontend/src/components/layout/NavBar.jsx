import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              marginLeft: 23,
            }}
          >
            Day of the week: {'15'}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
