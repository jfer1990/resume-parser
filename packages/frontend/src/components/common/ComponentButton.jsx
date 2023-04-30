import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const ComponentButton = ({ children, route, right, bottom }) => {
  // modificación aquí
  return (
    <IconButton
      component={Link}
      size="large"
      to={route}
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.5 },
        position: 'absolute',
        right: { right },
        bottom: { bottom },
      }}
    >
      {children}
    </IconButton>
  );
};
