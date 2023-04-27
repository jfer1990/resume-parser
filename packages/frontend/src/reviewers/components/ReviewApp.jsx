import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';
import { ReviewerProvider } from './context/ReviewerContext';
import { ReviewerLayout } from './layout/ReviewerLayout';

export const ReviewApp = () => {
  return (
    <ReviewerProvider>
      <ReviewerLayout>
        <AppRouter />
        {/* FIXME: Que hace este icono aquí suelto por que no esta dentro de una vista del router? hacer este componente reusable si se usa en otro lado*/}
        {/* FIXME: Hay que priorizar tratar de usar styled components en vez de usar sx. Si son mas de 3 propiedades de sx que se usan o se usan selectores complejos*/}
        <IconButton
          component={Link}
          to="/add-reviewer"
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </ReviewerLayout>
    </ReviewerProvider>
  );
};
