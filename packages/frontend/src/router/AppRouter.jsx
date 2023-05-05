import { Route, Routes } from 'react-router-dom';
import { AddMemberInput } from '../components/views/AddMemberInput';
import { AddReviewerInput } from '../components/views/AddReviewerInput';
import { ReviewersTable } from '../components/views/ReviewersTable';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewersTable />} />
      <Route path="/add-reviewer" element={<AddReviewerInput />} />
      <Route path="/add-member" element={<AddMemberInput />} />
    </Routes>
  );
};

export default AppRouter;
