import { Box, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';

const ReviewerLayaout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

ReviewerLayaout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ReviewerLayaout };
