import { Box, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';

const ReviewerLayout = ({ children }) => {
  return (
    // FIXME: Cambiar esto a un grid para que sea responsive y sea fácil de manejar esto no hace match con un elemento flex
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* FIXME: Que hace este toolbar aquí en que ayuda? si es para dar margin esto esta muy mal*/}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

ReviewerLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ReviewerLayout };
