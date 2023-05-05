import { MenuOpenOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useContext } from 'react';
import { ReviewerContext } from '../context/ReviewerContext';

export const NavBar = () => {
  const { open, setOpen } = useContext(ReviewerContext);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ paddingLeft: '8px' }}>
        <IconButton onClick={() => setOpen(!open)} sx={{ color: 'white', p: '3px' }}>
          {open ? <MenuOpenOutlined /> : <MenuOutlined />}
        </IconButton>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              marginLeft: isSmallScreen ? 0 : 23,
              fontSize: isSmallScreen ? '1.7rem' : '2.12rem',
            }}
          >
            Day of the week: {'15'}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
