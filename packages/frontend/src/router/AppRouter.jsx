import { Route, Routes } from 'react-router-dom';
import UserInputForm from '../components/views/AddUserInput';
import { ReviewersTable } from '../components/views/ReviewersTable';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewersTable />} />
      <Route path="/add-reviewer" element={<UserInputForm user="reviewer" />} />
      <Route path="/add-member" element={<UserInputForm user="member" />} />
    </Routes>
  );
};

export default AppRouter;
