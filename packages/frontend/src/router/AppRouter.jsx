import { Route, Routes } from 'react-router-dom';
import { AddReviewerInput } from '../reviewers/views/AddReviewerInput';
import { AddStudentInput } from '../reviewers/views/AddStudentInput';
import { ReviewersTable } from '../reviewers/views/ReviewersTable';

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
