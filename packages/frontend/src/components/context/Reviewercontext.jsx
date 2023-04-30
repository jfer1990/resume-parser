import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ReviewerContext = createContext({
  reviewers: [],
  setReviewers: null,
  students: [],
  setStudents: null,
});

const ReviewerProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const [reviewers, setReviewers] = useState([]);

  const onAddReviewer = (form) => {
    setReviewers((reviewers) => [...reviewers, form]);
  };

  const onAddStudent = (form) => {
    setStudents((students) => [...students, form]);
  };
  const onDeletedStudent = (students) => {
    setStudents(students);
  };
  const onDeletedReviewer = (Reviewers) => {
    setStudents(Reviewers);
  };

  return (
    <ReviewerContext.Provider
      value={{
        reviewers,
        setReviewers,
        students,
        setStudents,
        onAddReviewer,
        onAddStudent,
        onDeletedStudent,
        onDeletedReviewer,
      }}
    >
      {children}
    </ReviewerContext.Provider>
  );
};

ReviewerProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ReviewerProvider };
