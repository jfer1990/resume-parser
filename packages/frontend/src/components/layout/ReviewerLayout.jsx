import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { NavBar } from './NavBar';
import { SideBar } from './sideBar';

const ReviewerLayout = ({ children }) => {
  {
    /*  FIXME: box responsive para diferentes tamaños*/
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <SideBar />
      <Box component="main" sx={{ p: 3, flexGrow: 1, marginTop: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

ReviewerLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ReviewerLayout };
