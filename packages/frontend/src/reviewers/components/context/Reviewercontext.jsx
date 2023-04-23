import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ReviewerContext = createContext({});

const ReviewerProvider = ({ children }) => {
  const drawerWidth = 280;
  const [students, setStudents] = useState([
    { name: 'Enrique Mauricio', email: null },
    { name: 'Carlos Calderon', email: null },
    { name: 'Oswaldo Chan', email: null },
    { name: 'Kevin Medina', email: null },
    { name: 'Cristian Pan', email: null },
    { name: 'Carlos May', email: null },
    { name: 'Fernando joachin', email: null },
  ]);

  const [reviewers, setReviewers] = useState([
    { name: 'Luis', email: null },
    { name: 'Marcelo', email: null },
    { name: 'Fernando', email: null },
  ]);

  // const onAddStudent = () => {
  //   setStudents([...students, "hola"]);
  // };

  return (
    <ReviewerContext.Provider
      value={{
        students,
        setStudents,
        drawerWidth,
        reviewers,
        setReviewers,

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