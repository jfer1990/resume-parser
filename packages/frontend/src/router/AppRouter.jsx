import { Route, Routes } from 'react-router-dom';
import { AddReviewerInput } from '../reviewers/components/views/AddReviewerInput';
import { AddStudentInput } from '../reviewers/components/views/AddStudentInput';
import { ReviewersTable } from '../reviewers/components/views/ReviewersTable';

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
