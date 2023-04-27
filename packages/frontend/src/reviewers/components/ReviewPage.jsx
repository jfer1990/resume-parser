import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { AddReviewerInput } from '../views/AddReviewerInput';
import { AddStudentInput } from '../views/AddStudentInput';
import { ReviewersTable } from '../views/ReviewersTable';
import { ReviewerProvider } from './context/ReviewerContext';
import { ReviewerLayout } from './layout/ReviewerLayout';

// FIXME: Este componente nadie lo usa se debe eliminar
export const ReviewPage = () => {
  return (
    <ReviewerProvider>
      <ReviewerLayout>
        <ReviewersTable />
        <AddReviewerInput />
        <AddStudentInput />

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
