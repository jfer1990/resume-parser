import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ReviewerContext = createContext({});

const ReviewerProvider = ({ children }) => {
  const drawerWidth = 280;

  const [students, setStudents] = useState([]);

  const [reviewers, setReviewers] = useState([]);

  // const onAddStudent = () => {
  //   setStudents([...students, "hola"]);
  // };

  return (
    <ReviewerContext.Provider
      value={{
        drawerWidth,
        reviewers,
        setReviewers,
        students,
        setStudents,
        // onAddStudent,
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
