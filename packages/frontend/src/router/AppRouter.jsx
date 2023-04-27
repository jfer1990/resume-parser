import { Route, Routes } from 'react-router-dom';
import { AddReviewerInput } from '../components/views/AddReviewerInput';
import { AddStudentInput } from '../components/views/AddStudentInput';
import { ReviewersTable } from '../components/views/ReviewersTable';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewersTable />} />
      <Route path="/add-reviewer" element={<AddReviewerInput />} />
      <Route path="/add-student" element={<AddStudentInput />} />
    </Routes>
  );
};

export default AppRouter;
