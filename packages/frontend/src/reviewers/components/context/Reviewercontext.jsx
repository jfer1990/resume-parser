import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ReviewerContext = createContext({});

const ReviewerProvider = ({ children }) => {
  const drawerWidth = 280;

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
