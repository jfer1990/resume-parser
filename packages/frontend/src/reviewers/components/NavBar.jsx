import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { ReviewerContext } from './context/ReviewerContext';

// FIXME: Este componente no debería estar en esta carpeta, debería estar en la carpeta de layout
export const NavBar = () => {
  // FIXME: no usar el drawerWidth en el contexto en todo caso debería ser una variable global
  // FIXME: tratar de forzar el width asi es una mala practica, El papa del navbar debería ser un contenedor grid y decirle a AppBar que width debería tener
  const { drawerWidth } = useContext(ReviewerContext);
  return (
    <AppBar
      position="fixed"
      // FIXME: Hay que priorizar tratar de usar styled components en vez de usar sx.
      // FIXME: tratar de forzar el width asi es una mala practica, El papa del navbar debería ser un contenedor grid y decirle a AppBar que width debería tener
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        {/* FIXME: Este Botón ni funciona */}
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h4" noWrap component="div">
            Day of the week: {'15'}
          </Typography>

          {/* FIXME: Por que esta este botón aquí? */}
          <IconButton color="error"></IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
